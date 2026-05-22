'use client';

import profile from '@/data/profile.json';
import sections from '@/data/sections.json';
import type { Section } from '@/types';

const SECTIONS = sections as Section[];

type Props = {
  open: boolean;
  active: string;
  onJump: (id: string) => void;
  onClose: () => void;
  dark: boolean;
  onToggleDark: () => void;
};

export default function MobileNav({ open, active, onJump, onClose, dark, onToggleDark }: Props) {
  return (
    <div className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open}>
      <div className="mobile-nav-inner">
        <div className="mobile-nav-eyebrow mono caps tiny dim">
          <span>Sections</span>
          <span>
            {String(SECTIONS.length).padStart(2, '0')} /{' '}
            {String(SECTIONS.length).padStart(2, '0')}
          </span>
        </div>
        <nav className="mobile-nav-list">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                onJump(s.id);
                onClose();
              }}
              className={`mobile-nav-item ${active === s.id ? 'is-active' : ''}`}
            >
              <span className="mono tiny dim">{s.n}</span>
              <span className="mobile-nav-label">{s.label}</span>
              <span className="mobile-nav-arrow">→</span>
            </a>
          ))}
        </nav>
        <div className="mobile-nav-foot">
          <button type="button" className="mobile-nav-theme mono caps tiny" onClick={onToggleDark}>
            {dark ? '☀ Light' : '☾ Dark'} mode
          </button>
          <div className="mobile-nav-links">
            <a href={`mailto:${profile.email}`} className="mono caps tiny">
              Email ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mono caps tiny"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="mono caps tiny"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
