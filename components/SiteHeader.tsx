import Link from 'next/link';
import site from '@/data/site.json';

export default function SiteHeader({ active }: { active: 'about' | 'work' | 'photography' }) {
  return (
    <header className="site-header">
      <a href="#main" className="skip-link">{site.skipLink}</a>
      <nav className="site-nav" aria-label={site.navigationLabel}>
        {site.navigation.map((item) => (
          <Link key={item.id} href={item.href} aria-current={active === item.id ? 'page' : undefined}>{item.label}</Link>
        ))}
      </nav>
    </header>
  );
}
