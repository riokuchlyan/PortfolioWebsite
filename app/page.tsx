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
