import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import home from '@/data/home.json';
import profile from '@/data/profile.json';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className="site-shell">
      <SiteHeader active="about" />
      <main id="main" className={`page ${styles.about}`}>
        <div className="page-heading">
          <h1 className="page-title">{profile.name}</h1>
          <p className={`page-description ${styles.subtitle}`}>{home.intro} {home.university}</p>
        </div>
        <div className={styles.content}>
          <div className={styles.introduction}>
            {home.paragraphs.map((paragraph, index) => (
              <p key={index} className={index === 0 ? styles.statement : styles.personal}>{paragraph}</p>
            ))}

            <div className={styles.actions} aria-label={home.actions.label}>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={styles.resume}>
                {home.actions.resume} <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.booking} target="_blank" rel="noopener noreferrer" className={styles.meeting}>
                {home.actions.meeting} <span aria-hidden="true">↗</span>
              </a>
              <div className={styles.socials}>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.social} aria-label={home.actions.linkedin} title={home.actions.linkedin}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                  </svg>
                </a>
                <a href={`mailto:${profile.email}`} className={styles.social} aria-label={home.actions.email} title={home.actions.email}>
                  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.portrait}>
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              width={profile.portrait.width}
              height={profile.portrait.height}
              sizes="(max-width: 860px) 220px, 240px"
              className={styles.photo}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
