'use client';

import profile from '@/data/profile.json';
import sections from '@/data/sections.json';
import type { Section } from '@/types';

const SECTIONS = sections as Section[];

type Props = {
  active: string;
  onJump: (id: string) => void;
  scrolled: boolean;
  dark: boolean;
  onToggleDark: () => void;
  mobileNavOpen: boolean;
  onToggleMobileNav: () => void;
};

export default function Topbar({
  active,
  onJump,
  scrolled,
  dark,
  onToggleDark,
  mobileNavOpen,
  onToggleMobileNav,
}: Props) {
  return (
    <header className={`topbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="topbar-inner">
        <a
          href="#index"
          onClick={(e) => {
            e.preventDefault();
            onJump('index');
          }}
          className="mark"
        >
          <span className="mark-glyph" aria-hidden="true">
            RK
          </span>
          <span className="mark-name">Rio Kuchlyan</span>
        </a>
        <nav className="nav-top">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                onJump(s.id);
              }}
              className={`nav-top-item ${active === s.id ? 'is-active' : ''}`}
            >
              <span className="mono tiny nav-num">{s.n}</span>
              <span className="nav-label">{s.label}</span>
            </a>
          ))}
        </nav>
        <div className="topbar-right">
          <a
            className="topbar-link topbar-icon"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            className="topbar-link topbar-icon"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3" />
            </svg>
          </a>
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleDark}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
          <a className="topbar-cta mono caps tiny" href={profile.resume} target="_blank" rel="noreferrer">
            Resume <span className="cta-arrow">↗</span>
          </a>
          <button
            type="button"
            className={`mobile-nav-toggle ${mobileNavOpen ? 'is-open' : ''}`}
            onClick={onToggleMobileNav}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
