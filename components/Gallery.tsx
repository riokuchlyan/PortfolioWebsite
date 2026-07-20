import Image from 'next/image';
import galleryData from '@/data/gallery.json';

const CONTINENTS = [
  { id: 'asia', label: 'Asia' },
  { id: 'europe', label: 'Europe' },
  { id: 'north-america', label: 'North America' },
  { id: 'oceania', label: 'Oceania' },
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

function caption(filename: string): string {
  if (PHOTO_LABELS[filename]) return PHOTO_LABELS[filename];
  const base = filename.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  return base.replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Gallery() {
  const files = galleryData as Record<string, string[]>;

  return (
    <div className="gallery">
      {CONTINENTS.filter((c) => files[c.id]?.length).map((c) => (
        <section key={c.id} className="gallery-section">
          <div className="gallery-label">{c.label}</div>
          <div className="gallery-grid">
            {files[c.id].map((filename) => (
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
                <figcaption className="gallery-cap">{caption(filename)}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
