import Image from 'next/image';
import profile from '@/data/profile.json';

export default function Hero() {
  return (
    <section id="index" className="section section-hero hero-split">
      <div className="hero-inner">
        <div className="hero-compact">
          <div className="hero-compact-eyebrow mono caps tiny dim">
            <span>§ 01 · Index</span>
          </div>

          <h1 className="hero-compact-name">
            <span className="hero-compact-portrait" aria-hidden="true">
              <Image
                src="/assets/headshot.png"
                alt=""
                width={208}
                height={208}
                priority
                sizes="(max-width: 720px) 72px, 104px"
              />
            </span>
            <span className="hero-compact-name-text">Rio&nbsp;Kuchlyan</span>
            <span className="period">.</span>
          </h1>

          <p className="hero-compact-tag">
            {profile.role} at <em>{profile.taglineSchool}</em>{profile.taglineSuffix}
          </p>

          <div className="hero-compact-foot mono caps tiny dim">
            <span>{profile.location}</span>
          </div>
          <span className="hero-scroll-cue" aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  );
}
