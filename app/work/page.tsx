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
          <h1 className={styles.title}>{experience.title}</h1>
          <p className={styles.intro}>{experience.descriptionLines.join(' ')}</p>
        </header>

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
              <div className={styles.details}>
                <h3 className={styles.organization} id={`work-${index}`}>{item.organization}</h3>
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
              <div className={styles.details}>
                <h3 className={styles.organization} id={`education-${index}`}>{item.organization}</h3>
                <p className={styles.role}>{item.school}</p>
                <p className={styles.degrees}>{item.degrees.join(' & ')}</p>
                <p className={styles.description}>{item.graduation}</p>
              </div>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
