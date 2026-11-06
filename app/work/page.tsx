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
      <main id="main" className={`page ${styles.work}`}>
        <div className="page-heading">
          <h1 className="page-title">{experience.title}</h1>
          <p className="page-description">{experience.descriptionLines.map((line, index) => <span key={index}>{index > 0 && <br />}{line}</span>)}</p>
        </div>

        <section className={styles.experience} aria-labelledby="professional-heading">
          <h2 id="professional-heading" className={styles.sectionHeading}>{experience.professionalLabel}</h2>
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
              <h3 className={styles.organization} id={`work-${index}`}>{item.organization}</h3>
              <div className={styles.details}>
                <p className={styles.role}>{item.role}</p>
                {item.description && <p className={styles.description}>{item.description}</p>}
              </div>
            </article>
          ))}
        </section>

        <section className={styles.education} aria-labelledby="education-heading">
          <h2 id="education-heading" className={styles.sectionHeading}>{experience.education.label}</h2>
          {experience.education.entries.map((item, index) => (
            <article className={styles.row} key={item.organization} aria-labelledby={`education-${index}`}>
              <div className={styles.logo} aria-hidden="true">
                <Image
                  src={item.logo}
                  alt=""
                  width={item.logoWidth}
                  height={item.logoHeight}
                  className={styles.logoImage}
                  style={{ width: item.logoWidth, height: item.logoHeight }}
                  unoptimized
                />
              </div>
              <div>
                <h3 className={styles.organization} id={`education-${index}`}>{item.organization}</h3>
                <p className={styles.description}>{item.school}</p>
              </div>
              <div className={styles.details}>
                <p className={styles.role}>{item.degrees.join(' & ')}</p>
                <p className={styles.description}>{item.graduation}</p>
              </div>
            </article>
          ))}
        </section>

        <div className={styles.closing}>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            {experience.resumeLabel} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </main>
    </div>
  );
}
