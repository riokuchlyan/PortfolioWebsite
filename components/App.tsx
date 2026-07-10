'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import sections from '@/data/sections.json';
import type { Section } from '@/types';
import Topbar from './Topbar';

const SECTIONS: Section[] = sections as Section[];
const HOME = 'about';

type Props = {
  panels: Record<string, ReactNode>;
};

export default function App({ panels }: Props) {
  const [open, setOpen] = useState<string>(HOME);
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

  const openPanel = useCallback(
    (id: string) => {
      if (id === open) return;
      setOpen(id);
      if (id === HOME) {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.history.pushState({ panel: id }, '', `#${id}`);
      }
    },
    [open]
  );

  useEffect(() => {
    const fromHash = () => {
      const hash = window.location.hash.slice(1);
      setOpen(SECTIONS.some((s) => s.id === hash) ? hash : HOME);
    };
    fromHash();
    window.addEventListener('popstate', fromHash);
    return () => window.removeEventListener('popstate', fromHash);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') openPanel(HOME);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openPanel]);

  // move focus into the panel on section change; skip initial mount so the
  // landing view doesn't paint a focus ring
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    document.getElementById(open)?.focus({ preventScroll: true });
  }, [open]);

  return (
    <div className="stage">
      <Topbar
        active={open}
        wordmarkHidden={open === HOME}
        onSelect={(id) => openPanel(open === id ? HOME : id)}
        onHome={() => openPanel(HOME)}
        dark={dark}
        onToggleDark={() => setDark((v) => !v)}
      />

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
                <h2 className="panel-title">{s.title ?? s.label}</h2>
              </header>
              <div className="panel-body">{panels[s.id]}</div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
