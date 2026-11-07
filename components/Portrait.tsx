'use client';

import Image from 'next/image';
import { useId, useRef, useState } from 'react';
import profile from '@/data/profile.json';
import styles from './Portrait.module.css';

export default function Portrait() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialogId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const portrait = profile.portrait;

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        aria-label={portrait.enlargeLabel}
        title={portrait.enlargeLabel}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen(true);
          dialog.current?.showModal();
        }}
      >
        <Image
          src={portrait.src}
          alt={portrait.alt}
          width={portrait.width}
          height={portrait.height}
          sizes="(max-width: 600px) 132px, 180px"
          className={styles.image}
          priority
        />
      </button>
      <dialog
        ref={dialog}
        id={dialogId}
        className={styles.dialog}
        aria-label={portrait.dialogLabel}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onClose={() => {
          setIsOpen(false);
          trigger.current?.focus();
        }}
      >
        <button type="button" className={styles.close} onClick={() => dialog.current?.close()} autoFocus>
          {portrait.closeLabel} <span aria-hidden="true">×</span>
        </button>
        <div className={styles.expanded}>
          {isOpen && (
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              sizes="(max-width: 600px) 135vw, 780px"
              className={styles.image}
            />
          )}
        </div>
      </dialog>
    </>
  );
}
