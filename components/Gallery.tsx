'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import files from '@/data/gallery.json';

function caption(filename: string): string {
  return filename
    .replace(/\.(jpe?g|png|webp|avif)$/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFile = files[activeIndex];

  function movePhoto(direction: number) {
    setActiveIndex((index) => (index + direction + files.length) % files.length);
  }

  return (
    <>
      <div className="gallery-grid">
        {files.map((filename, index) => (
          <figure key={filename} className="gallery-tile">
            <button
              type="button"
              className="gallery-frame"
              aria-label={`Enlarge ${caption(filename)} photograph`}
              aria-haspopup="dialog"
              onClick={() => {
                setActiveIndex(index);
                dialog.current?.showModal();
              }}
            >
              <Image
                src={`/assets/photos/${filename}`}
                alt={caption(filename)}
                className="gallery-img"
                fill
                sizes="(max-width: 360px) 87vw, (max-width: 700px) 43vw, (max-width: 1144px) 28vw, 320px"
                priority={index < 3}
              />
              <span className="gallery-expand" aria-hidden="true">↗</span>
            </button>
            <figcaption className="gallery-cap">
              <span className="gallery-location">{caption(filename)}</span>
              <span className="gallery-number">{String(index + 1).padStart(2, '0')}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="photo-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            movePhoto(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
      >
        <div className="lightbox-content">
          <div className="lightbox-toolbar">
            <h2 id="photo-title" className="lightbox-title" aria-live="polite">{caption(activeFile)}</h2>
            <button type="button" className="lightbox-close" onClick={() => dialog.current?.close()} autoFocus>
              Close <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="lightbox-image">
            <Image
              src={`/assets/photos/${activeFile}`}
              alt={caption(activeFile)}
              fill
              sizes="(max-width: 600px) 85vw, 800px"
            />
          </div>
          <div className="lightbox-navigation">
            <button type="button" onClick={() => movePhoto(-1)} aria-label="Previous photograph">← Previous</button>
            <span aria-live="polite">{activeIndex + 1} / {files.length}</span>
            <button type="button" onClick={() => movePhoto(1)} aria-label="Next photograph">Next →</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
