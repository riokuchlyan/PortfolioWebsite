import Image from 'next/image';
import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import home from '@/data/home.json';
import profile from '@/data/profile.json';

export default function Page() {
  return (
    <div className="site-shell">
      <SiteHeader active="about" />
      <main id="main" className="page home-page">
        <div className="page-heading">
          <h1 className="page-title">{profile.name}</h1>
          <p className="page-description">{home.intro} <span className="university">{home.university}</span></p>
        </div>
        <div className="home-content">
          <div className="home-experience">
            <dl className="experience" aria-label="Selected experience">
              {home.experience.map((item) => (
                <div className="experience-row" key={item.organization}>
                  <dt>{item.organization}</dt>
                  <dd>
                    <span>{item.role}</span>
                    {item.description && <span className="experience-detail">{item.description}</span>}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="hero-actions">
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn">
                Resume <span aria-hidden="true">↗</span>
              </a>
              <a href="https://bookings.riokuchlyan.com" target="_blank" rel="noopener noreferrer" className="text-link">
                Book a Meeting <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="LinkedIn" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
              </a>
              <a href={`mailto:${profile.email}`} className="icon-link" aria-label="Email" title="Email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label="GitHub" title="GitHub">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.005-.404c1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait">
              <Image
                src="/assets/headshot.jpeg"
                alt={profile.name}
                className="hero-photo"
                width={5760}
                height={3840}
                sizes="(max-width: 700px) 202px, (max-width: 860px) 220px, (max-width: 1000px) 240px, 260px"
                priority
              />
            </div>
            <Link href="/photography" className="photography-preview">
              <div className="preview-photo">
                <Image
                  src="/assets/photos/philadelphia.jpeg"
                  alt="A sunlit street seen through a stone arch in Philadelphia"
                  fill
                  sizes="(max-width: 700px) 33vw, 76px"
                />
              </div>
              <div className="preview-copy">
                <span className="eyebrow">Beyond the desk</span>
                <span className="preview-title">Photography <span aria-hidden="true">↗</span></span>
                <span className="preview-caption">{home.personal}</span>
              </div>
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
