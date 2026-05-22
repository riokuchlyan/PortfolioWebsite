'use client';

import { useEffect, useRef, useState } from 'react';
import sections from '@/data/sections.json';
import type { Section } from '@/types';
import Topbar from './Topbar';
import MobileNav from './MobileNav';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Work from './sections/Work';
import Photography from './sections/Photography';
import Contact from './sections/Contact';

const SECTIONS: Section[] = sections as Section[];

export default function App() {
  const [active, setActive] = useState('index');
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
    setHydrated(true);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      const root = containerRef.current;
      if (el && root) {
        root.scrollTo({ top: el.offsetTop - 16, behavior: 'auto' });
        setActive(hash);
      }
    });
  }, []);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { root, threshold: 0, rootMargin: '-40% 0px -55% 0px' },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    const onScroll = () => setScrolled(root.scrollTop > 120);
    root.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      obs.disconnect();
      root.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {}
  }, [dark, hydrated]);

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : '';
  }, [mobileNavOpen]);

  const onJump = (id: string) => {
    const el = document.getElementById(id);
    const root = containerRef.current;
    if (el && root) {
      root.scrollTo({ top: el.offsetTop - 16, behavior: 'smooth' });
    }
  };

  return (
    <div className="page">
      <Topbar
        active={active}
        onJump={onJump}
        scrolled={scrolled}
        dark={dark}
        onToggleDark={() => setDark((v) => !v)}
        mobileNavOpen={mobileNavOpen}
        onToggleMobileNav={() => setMobileNavOpen((v) => !v)}
      />
      <MobileNav
        open={mobileNavOpen}
        active={active}
        onJump={onJump}
        onClose={() => setMobileNavOpen(false)}
        dark={dark}
        onToggleDark={() => setDark((v) => !v)}
      />
      <main className="main" ref={containerRef}>
        <Hero />
        <Experience />
        <Work />
        <Photography />
        <Contact />
      </main>
    </div>
  );
}
