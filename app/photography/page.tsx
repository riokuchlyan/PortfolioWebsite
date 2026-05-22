import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import type { Metadata } from 'next';
import featuredPhotos from '@/data/photography.json';
import profile from '@/data/profile.json';
import type { Photo } from '@/types';

export const metadata: Metadata = {
  title: `Photography — ${profile.name}`,
  description: 'Photography by Rio Kuchlyan.',
  alternates: { canonical: '/photography' },
};

const FEATURED = featuredPhotos as Photo[];

const CONTINENTS = [
  { id: 'asia', label: 'Asia', n: '01' },
  { id: 'europe', label: 'Europe', n: '02' },
  { id: 'north-america', label: 'North America', n: '03' },
  { id: 'oceania', label: 'Oceania', n: '04' },
] as const;

const LANDSCAPE_FILES = new Set<string>([
  'chapel_hill.jpeg',
  'santorini.jpeg',
  'stirling.jpeg',
  'stirling_castle.jpeg',
]);

const PHOTO_CONTINENTS: Record<string, string> = {
  // Asia
  'seoul.jpeg': 'asia',
  'busan.jpeg': 'asia',
  // Europe
  'london.jpeg': 'europe',
  'paris.jpeg': 'europe',
  'acropolis.jpeg': 'europe',
  'vatican.jpeg': 'europe',
  'colosseum.jpeg': 'europe',
  'scotland.jpeg': 'europe',
  'stirling.jpeg': 'europe',
  'stirling_castle.jpeg': 'europe',
  'santorini.jpeg': 'europe',
  // North America
  'chapel_hill.jpeg': 'north-america',
  'philadelphia.jpeg': 'north-america',
  'tennessee.jpeg': 'north-america',
  'oak_island.jpeg': 'north-america',
  'bellhaven.jpeg': 'north-america',
  // Oceania
  'sydney.jpeg': 'oceania',
  'new_zealand.jpeg': 'oceania',
};

const PHOTO_LABELS: Record<string, string> = {
  'chapel_hill.jpeg': 'Chapel Hill — Dean Dome',
};

function prettify(filename: string): string {
  const base = filename.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  return base
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function caption(filename: string): string {
  return PHOTO_LABELS[filename] ?? prettify(filename);
}

export default function PhotographyPage() {
  const photosDir = path.join(process.cwd(), 'public/assets/photos');
  const allFiles = fs
    .readdirSync(photosDir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));

  const featuredFilenames = FEATURED.map((p) => path.basename(p.src));
  const featuredSet = new Set(featuredFilenames);

  const groups = CONTINENTS.map((continent) => {
    const inContinent = allFiles.filter(
      (f) => PHOTO_CONTINENTS[f] === continent.id,
    );
    const featured = featuredFilenames.filter((f) => inContinent.includes(f));
    const rest = inContinent
      .filter((f) => !featuredSet.has(f))
      .sort((a, b) => a.localeCompare(b));
    return { ...continent, files: [...featured, ...rest] };
  }).filter((g) => g.files.length > 0);

  return (
    <main className="gallery-page">
      <div className="gallery-topbar">
        <Link href="/#photography" className="gallery-back mono caps tiny">
          <span aria-hidden="true">←</span> Back to portfolio
        </Link>
      </div>

      <header className="gallery-head">
        <div className="gallery-head-eyebrow mono caps tiny dim">
          <span aria-hidden="true">§</span> {profile.name}
        </div>
        <h1 className="gallery-head-title">Photography</h1>
        <p className="gallery-head-caption">
          <em>My journeys around the world.</em>
        </p>
      </header>

      <div className="gallery-body">
        <aside className="gallery-toc" aria-label="Continents">
          <div className="gallery-toc-label mono caps tiny dim">Index</div>
          <ol>
            {groups.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="gallery-toc-link mono caps tiny">
                  <span className="gallery-toc-n">{g.n}</span>
                  <span>{g.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div className="gallery-content">
          {groups.map((g) => (
            <section key={g.id} id={g.id} className="gallery-section">
              <div className="gallery-divider">
                <span className="gallery-divider-rule" aria-hidden="true" />
                <span className="gallery-divider-label mono caps tiny">
                  <span className="dim">{g.n}</span> · {g.label}
                </span>
                <span className="gallery-divider-rule" aria-hidden="true" />
              </div>
              <div className="gallery-grid">
                {g.files.map((filename) => (
                  <figure
                    key={filename}
                    className={`gallery-tile ${LANDSCAPE_FILES.has(filename) ? 'is-landscape' : 'is-portrait'}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/assets/photos/${filename}`}
                      alt={caption(filename)}
                      className="gallery-img"
                      loading="lazy"
                    />
                    <figcaption className="gallery-cap mono caps tiny">
                      {caption(filename)}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
