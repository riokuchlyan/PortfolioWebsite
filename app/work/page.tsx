import type { Metadata } from 'next';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import experience from '@/data/experience.json';
import profile from '@/data/profile.json';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: `${experience.title} — ${profile.name}`,
  description: experience.seoDescription,
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return (
    <div className="site-shell">
      <SiteHeader active="work" />
      <main id="main" className={styles.work}>
        <header className={styles.heading}>
          <h1 className="page-title">{experience.title}</h1>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={styles.resumeLink}>
            {experience.resumeLabel} <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className={styles.experience}>
          {experience.entries.map((item, index) => (
            <article className={styles.row} key={item.organization} aria-labelledby={`work-${index}`}>
              <div className={styles.logo} aria-hidden="true">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt=""
                    width={item.logoWidth ?? 84}
                    height={item.logoHeight ?? 32}
                    className={styles.logoImage}
                    style={{ width: item.logoWidth ?? 84, height: item.logoHeight ?? 32 }}
                    unoptimized
                  />
                ) : (
                  <span className={styles.wordmark}>{item.organization}</span>
                )}
              </div>
              <div className={styles.details}>
                <div className={styles.rowHeading}>
                  <h2 className={styles.organization} id={`work-${index}`}>{item.organization}</h2>
                  <span className={styles.label}>{item.label}</span>
                </div>
                <p className={styles.role}>{item.subtitle}</p>
                <div className={styles.description}>
                  {item.details.map((detail) => <p key={detail}>{detail}</p>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
