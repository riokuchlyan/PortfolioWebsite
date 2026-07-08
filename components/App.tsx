'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import sections from '@/data/sections.json';
import type { Section } from '@/types';
import Topbar from './Topbar';

const SECTIONS: Section[] = sections as Section[];

type Props = {
  home: ReactNode;
  panels: Record<string, ReactNode>;
};

export default function App({ home, panels }: Props) {
  const [open, setOpen] = useState<string | null>(null);
  const [dark, setDark] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {}
  }, [dark, hydrated]);

  const openPanel = useCallback((id: string | null) => {
    setOpen(id);
    if (typeof window === 'undefined') return;
    if (id) {
      window.history.pushState({ panel: id }, '', `#${id}`);
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const fromHash = () => {
      const hash = window.location.hash.slice(1);
      setOpen(SECTIONS.some((s) => s.id === hash) ? hash : null);
    };
    fromHash();
    window.addEventListener('popstate', fromHash);
    return () => window.removeEventListener('popstate', fromHash);
  }, []);

  const closedByKeyboard = useRef(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closedByKeyboard.current = true;
        openPanel(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openPanel]);

  // move focus into the panel on open; on close only Escape returns it (a mouse
  // close would otherwise paint a focus ring on the wordmark)
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (open) {
      document.getElementById(open)?.focus({ preventScroll: true });
    } else if (closedByKeyboard.current) {
      closedByKeyboard.current = false;
      document.querySelector<HTMLElement>('.wordmark')?.focus({ preventScroll: true });
    }
  }, [open]);

  return (
    <div className="stage">
      <Topbar
        active={open}
        onSelect={(id) => openPanel(open === id ? null : id)}
        onHome={() => openPanel(null)}
        dark={dark}
        onToggleDark={() => setDark((v) => !v)}
      />

      <main className={`home${open ? ' is-hidden' : ''}`} inert={open !== null}>
        {home}
      </main>

      {SECTIONS.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={`panel${open === s.id ? ' is-open' : ''}`}
          inert={open !== s.id}
          aria-label={s.label}
          tabIndex={-1}
        >
          <div className="panel-scroll">
            <div className="panel-inner">
              <header className="panel-head">
                <span className="panel-n mono" aria-hidden="true">
                  ({s.n})
                </span>
                <h2 className="panel-title">{s.label}</h2>
              </header>
              <div className="panel-body">{panels[s.id]}</div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
