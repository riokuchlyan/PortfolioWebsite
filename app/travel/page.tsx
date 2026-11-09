import type { Metadata } from 'next';
import { preload } from 'react-dom';
import SiteHeader from '@/components/SiteHeader';
import TravelGlobe from '@/components/TravelGlobe';
import profile from '@/data/profile.json';
import travel from '@/data/travel.json';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: `${travel.title} — ${profile.name}`,
  description: travel.seoDescription,
  alternates: { canonical: '/travel' },
};

export default function TravelPage() {
  preload(travel.mapSrc, { as: 'fetch', crossOrigin: 'anonymous' });
  return (
    <div className="site-shell">
      <SiteHeader active="travel" />
      <main id="main" className="page">
        <div className="page-heading">
          <h1 className="page-title">{travel.title}</h1>
          <p className="page-description">{travel.description}</p>
        </div>
        <TravelGlobe />
        <div className={styles.continents}>
          {travel.continents.map((continent) => (
            <section key={continent.name}>
              <h2 className={styles.heading}>{continent.name}</h2>
              <ul className={styles.places}>
                {continent.places.map((place) => (
                  <li key={place.id}>
                    {place.name}
                    {'detail' in place && <span className={styles.detail}>{place.detail}</span>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
