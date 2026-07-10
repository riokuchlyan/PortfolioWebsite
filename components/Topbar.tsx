'use client';

import sections from '@/data/sections.json';
import type { Section } from '@/types';

const SECTIONS = sections as Section[];

type Props = {
  active: string | null;
  wordmarkHidden: boolean;
  onSelect: (id: string) => void;
  onHome: () => void;
  dark: boolean;
  onToggleDark: () => void;
};

export default function Topbar({
  active,
  wordmarkHidden,
  onSelect,
  onHome,
  dark,
  onToggleDark,
}: Props) {
  return (
    <header className="topbar">
      <a
        href="/"
        className={`wordmark${wordmarkHidden ? ' is-hidden' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          onHome();
        }}
      >
        Rio Kuchlyan
      </a>
      <div className="topbar-right">
        <nav className="nav" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav-item${active === s.id ? ' is-active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onSelect(s.id);
              }}
            >
              <span className="nav-label">{s.label}</span>
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleDark}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          title={dark ? 'Light mode' : 'Dark mode'}
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            {dark ? (
              <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <circle cx="8" cy="8" r="3" />
                <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.3 3.3l1.05 1.05M11.65 11.65l1.05 1.05M3.3 12.7l1.05-1.05M11.65 4.35l1.05-1.05" />
              </g>
            ) : (
              <path d="M13 9.5A5.5 5.5 0 1 1 6.5 3a4.5 4.5 0 0 0 6.5 6.5z" fill="currentColor" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
