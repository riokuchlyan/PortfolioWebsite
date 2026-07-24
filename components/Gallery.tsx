import Image from 'next/image';
import galleryData from '@/data/gallery.json';

function caption(filename: string): string {
  const base = filename.replace(/\.(jpe?g|png|webp|avif)$/i, '');
  return base.replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Gallery() {
  const files = galleryData as string[];

  return (
    <>
      <figure className="gallery-map">
        <Image
          src="/assets/world-map.jpeg"
          alt="Places I've visited"
          width={3600}
          height={1950}
          className="gallery-map-img"
          sizes="(max-width: 460px) 100vw, 420px"
          priority
        />
        <figcaption className="gallery-cap">Where I&rsquo;ve traveled</figcaption>
      </figure>

      <div className="gallery-grid">
        {files.map((filename) => (
          <figure key={filename} className="gallery-tile">
            <div className="gallery-frame">
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
    </>
  );
}
