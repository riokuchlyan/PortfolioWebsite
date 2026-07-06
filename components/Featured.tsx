'use client';

import { useEffect, useState } from 'react';
import featured from '@/data/featured.json';

type Item = { prefix: string; text: string; target: string };

const ITEMS = featured as Item[];
const CYCLE_MS = 4500;
const FADE_MS = 420;

export default function Featured({ onSelect }: { onSelect: (id: string) => void }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const cycle = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % ITEMS.length);
        setVisible(true);
      }, FADE_MS);
    }, CYCLE_MS);
    return () => clearInterval(cycle);
  }, [paused]);

  const goTo = (i: number) => {
    if (i === index) return;
    setVisible(false);
    setTimeout(() => {
      setIndex(i);
      setVisible(true);
    }, FADE_MS);
  };

  const item = ITEMS[index];

  return (
    <div
      className="featured-wrap"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <a
        href={`#${item.target}`}
        className={`featured${visible ? ' is-visible' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          onSelect(item.target);
        }}
      >
        <span className="featured-prefix mono tiny dim">{item.prefix}</span>
        <span className="featured-text">
          {item.text}{' '}
          <span className="featured-arrow" aria-hidden="true">
            →
          </span>
        </span>
      </a>
      <div className="featured-ticks" role="tablist" aria-label="Featured items">
        {ITEMS.map((it, i) => (
          <button
            key={it.target + i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`${it.prefix}: ${it.text}`}
            className={`featured-tick${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
