import Link from 'next/link';

export default function SiteHeader({ active }: { active: 'about' | 'photography' }) {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">Skip to content</a>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/" aria-current={active === 'about' ? 'page' : undefined}>About</Link>
        <Link href="/photography" aria-current={active === 'photography' ? 'page' : undefined}>Photography</Link>
      </nav>
    </header>
  );
}
