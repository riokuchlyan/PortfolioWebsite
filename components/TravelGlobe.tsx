'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { geoDistance, geoGraticule10, geoOrthographic, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import type { Feature, Geometry } from 'geojson';
import type { GeometryCollection, Topology } from 'topojson-specification';
import travel from '@/data/travel.json';
import styles from './TravelGlobe.module.css';

type Country = Feature<Geometry, { name: string }>;
type World = Topology<{ countries: GeometryCollection<{ name: string }> }>;
const places = travel.continents.flatMap((continent) => continent.places);
const visited = new Map(places.map((place) => [place.id, place.name]));
const graticule = geoGraticule10();
const initialRotation: [number, number] = [-15, -20];
const clampLatitude = (latitude: number) => Math.max(-80, Math.min(80, latitude));

export default function TravelGlobe() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState(false);
  const [rotation, setRotation] = useState(initialRotation);
  const [zoom, setZoom] = useState(1);
  const [hovered, setHovered] = useState('');
  const drag = useRef<{ id: number; x: number; y: number; rotation: [number, number] } | null>(null);
  const frame = useRef(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch(travel.mapSrc, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Map unavailable');
        return response.json() as Promise<World>;
      })
      .then((world) => setCountries(feature(world, world.objects.countries).features))
      .catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => { controller.abort(); cancelAnimationFrame(frame.current); };
  }, []);

  const { projection, sphere, grid, outlines } = useMemo(() => {
    const projection = geoOrthographic()
      .translate([310, 270]).scale(250 * zoom).rotate(rotation).clipAngle(90);
    const path = geoPath(projection).digits(1);
    return {
      projection,
      sphere: path({ type: 'Sphere' }) ?? '',
      grid: path(graticule) ?? '',
      outlines: countries.map((country) => ({
        country,
        name: visited.get(String(country.id)) ?? country.properties.name,
        d: path(country) ?? '',
        isVisited: visited.has(String(country.id)),
      })),
    };
  }, [countries, rotation, zoom]);
  const changeZoom = (amount: number) => setZoom((value) => Math.max(1, Math.min(2, value + amount)));

  function resetView() {
    setRotation(initialRotation);
    setZoom(1);
  }

  return (
    <div>
      <div className={styles.stage}>
        <svg
          viewBox="0 0 620 540"
          className={styles.globe}
          role="group"
          aria-label={travel.globeLabel}
          tabIndex={0}
          onPointerDown={(event) => {
            if (event.button !== 0 || drag.current) return;
            event.currentTarget.setPointerCapture(event.pointerId);
            drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY, rotation };
            setHovered('');
          }}
          onPointerMove={(event) => {
            const start = drag.current;
            if (!start || start.id !== event.pointerId) return;
            const sensitivity = 160 / event.currentTarget.getBoundingClientRect().width / zoom;
            const next: [number, number] = [
              start.rotation[0] + (event.clientX - start.x) * sensitivity,
              clampLatitude(start.rotation[1] - (event.clientY - start.y) * sensitivity),
            ];
            cancelAnimationFrame(frame.current);
            frame.current = requestAnimationFrame(() => setRotation(next));
          }}
          onPointerUp={(event) => {
            if (drag.current?.id === event.pointerId) {
              drag.current = null;
              event.currentTarget.releasePointerCapture(event.pointerId);
            }
          }}
          onLostPointerCapture={() => { drag.current = null; }}
          onPointerCancel={() => { drag.current = null; }}
          onPointerLeave={() => setHovered('')}
          onKeyDown={(event) => {
            const offsets: Record<string, [number, number]> = {
              ArrowLeft: [-12, 0], ArrowRight: [12, 0], ArrowUp: [0, 12], ArrowDown: [0, -12],
            };
            if (offsets[event.key]) {
              event.preventDefault();
              const [longitude, latitude] = offsets[event.key];
              setRotation(([x, y]) => [x + longitude, clampLatitude(y + latitude)]);
            } else if (['+', '=', '-'].includes(event.key)) {
              event.preventDefault();
              changeZoom(event.key === '-' ? -0.2 : 0.2);
            } else if (event.key === 'Home') {
              event.preventDefault();
              resetView();
            }
          }}
        >
          <defs>
            <radialGradient id="globe-light" cx="35%" cy="30%" r="75%">
              <stop offset="45%" stopColor="#202b35" stopOpacity="0" />
              <stop offset="100%" stopColor="#202b35" stopOpacity="0.12" />
            </radialGradient>
          </defs>
          <path d={sphere} className={styles.ocean} />
          <path d={grid} className={styles.grid} />
          {outlines.map(({ country, name, d, isVisited }, index) => (
            <path
              key={`${country.id}-${index}`}
              d={d}
              className={isVisited ? styles.visited : styles.land}
              onPointerEnter={() => { if (!drag.current) setHovered(name); }}
              onPointerLeave={() => setHovered('')}
            >
              <title>{name}{isVisited ? ` · ${travel.legend}` : ''}</title>
            </path>
          ))}
          <path d={sphere} fill="url(#globe-light)" pointerEvents="none" />
          {places.map((place) => {
            if (!('marker' in place) || !place.marker) return null;
            const coordinates: [number, number] = [place.marker[0], place.marker[1]];
            if (geoDistance(coordinates, [-rotation[0], -rotation[1]]) >= Math.PI / 2) return null;
            const point = projection(coordinates);
            return point && (
              <circle key={place.id} cx={point[0]} cy={point[1]} r={3.5} className={styles.marker}
                onPointerEnter={() => { if (!drag.current) setHovered(place.name); }}
                onPointerLeave={() => setHovered('')}>
                <title>{place.name} · {travel.legend}</title>
              </circle>
            );
          })}
        </svg>
        {!countries.length && <p className={styles.status} role="status">{error ? travel.error : travel.loading}</p>}
      </div>
      <div className={styles.toolbar}>
        <span className={styles.legend}><span aria-hidden="true" />{travel.legend}</span>
        <div className={styles.controls}>
          <button type="button" onClick={() => changeZoom(-0.2)} disabled={zoom <= 1} aria-label={travel.controls.zoomOut}>−</button>
          <button type="button" onClick={() => changeZoom(0.2)} disabled={zoom >= 2} aria-label={travel.controls.zoomIn}>+</button>
          <button type="button" className={styles.reset} onClick={resetView}>{travel.controls.reset}</button>
        </div>
      </div>
      <p className={styles.hint}>{hovered || travel.hint}</p>
    </div>
  );
}
