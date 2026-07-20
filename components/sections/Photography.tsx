import Image from 'next/image';
import featuredPhotos from '@/data/photography.json';
import galleryData from '@/data/gallery.json';
import type { Photo } from '@/types';

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

const PHOTO_LABELS: Record<string, string> = {
  'chapel_hill.jpeg': 'Chapel Hill — Dean Dome',
};

function prettify(filename: string): string {
  const base = filename.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  return base.replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function caption(filename: string): string {
  return PHOTO_LABELS[filename] ?? prettify(filename);
}

export default function Photography() {
  const featuredSet = new Set(FEATURED.map((p) => p.src.split('/').pop() || ''));

  const groups = CONTINENTS.map((continent) => {
    const continentFiles = (galleryData as Record<string, string[]>)[continent.id] || [];
    const featured = continentFiles.filter((f) => featuredSet.has(f));
    const rest = continentFiles
      .filter((f) => !featuredSet.has(f))
      .sort((a, b) => a.localeCompare(b));
    return { ...continent, files: [...featured, ...rest] };
  }).filter((g) => g.files.length > 0);

  return (
    <div className="gallery">
      {groups.map((g) => (
        <section key={g.id} className="gallery-section">
          <div className="gallery-label tiny dim">{g.label}</div>
          <div className="gallery-grid">
            {g.files.map((filename) => (
              <figure key={filename} className="gallery-tile">
                <div
                  className={`gallery-frame ${LANDSCAPE_FILES.has(filename) ? 'is-landscape' : 'is-portrait'}`}
                >
                  <Image
                    src={`/assets/photos/${filename}`}
                    alt={caption(filename)}
                    className="gallery-img"
                    fill
                    sizes="(max-width: 720px) 50vw, (max-width: 1180px) 33vw, 25vw"
                  />
                </div>
                <figcaption className="gallery-cap tiny dim">{caption(filename)}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
