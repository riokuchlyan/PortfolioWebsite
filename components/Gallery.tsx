'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import photos from '@/data/gallery.json';
import photography from '@/data/photography.json';

export default function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = photos[activeIndex];

  function movePhoto(direction: number) {
    setActiveIndex((index) => (index + direction + photos.length) % photos.length);
  }

  return (
    <>
      <div className="gallery-grid">
        {photos.map(({ filename, caption }, index) => (
          <figure key={filename}>
            <button
              type="button"
              className="gallery-frame"
              aria-label={photography.labels.enlarge.replace('{caption}', caption)}
              aria-haspopup="dialog"
              onClick={() => {
                setActiveIndex(index);
                dialog.current?.showModal();
              }}
            >
              <Image
                src={`/assets/photos/${filename}`}
                alt={caption}
                className="gallery-img"
                fill
                sizes="(max-width: 360px) 87vw, (max-width: 700px) 43vw, 300px"
                priority={index < 2}
              />
              <span className="gallery-expand" aria-hidden="true">↗</span>
            </button>
            <figcaption className="gallery-cap">
              <span className="gallery-location">{caption}</span>
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
            <h2 id="photo-title" className="lightbox-title" aria-live="polite">{activePhoto.caption}</h2>
            <button type="button" className="lightbox-close" onClick={() => dialog.current?.close()} autoFocus>
              {photography.labels.close} <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="lightbox-image">
            <Image
              src={`/assets/photos/${activePhoto.filename}`}
              alt={activePhoto.caption}
              fill
              sizes="(max-width: 600px) 85vw, 800px"
            />
          </div>
          <div className="lightbox-navigation">
            <button type="button" onClick={() => movePhoto(-1)} aria-label={photography.labels.previousPhoto}>← {photography.labels.previous}</button>
            <span aria-live="polite">{activeIndex + 1} / {photos.length}</span>
            <button type="button" onClick={() => movePhoto(1)} aria-label={photography.labels.nextPhoto}>{photography.labels.next} →</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
