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
                View resume <span aria-hidden="true">↗</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href={`mailto:${profile.email}`} className="text-link">
                Email <span aria-hidden="true">↗</span>
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
