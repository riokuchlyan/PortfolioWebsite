import Link from 'next/link';
import photos from '@/data/photography.json';
import profile from '@/data/profile.json';
import type { Photo } from '@/types';
import SectionMast from '../SectionMast';

const PHOTOS = photos as Photo[];

export default function Photography() {
  return (
    <section id="photography" className="section section-photography" data-screen-label="04 Photography">
      <div className="section-inner">
        <SectionMast n="04" title="Photography" />
        <div className="photo-mosaic">
          {PHOTOS.map((p, i) => (
            <figure key={i} className={`photo photo-${p.size}`}>
              <div className="photo-img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={`${p.label} — ${p.city}`}
                  className="photo-img"
                  loading="lazy"
                />
              </div>
              <figcaption className="photo-cap mono caps tiny">
                <span>
                  {String(i + 1).padStart(2, '0')} · {p.city}
                </span>
                <span className="dim">{p.label}</span>
              </figcaption>
            </figure>
          ))}
          <Link
            href="/photography"
            className="photo photo-md photo-view-all"
            aria-label="View all photos"
          >
            <span className="photo-view-all-eyebrow mono caps tiny">{profile.name}</span>
            <span className="photo-view-all-label">View all</span>
            <span className="photo-view-all-cta mono caps tiny">
              Open gallery <span aria-hidden="true">↗</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
