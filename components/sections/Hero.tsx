import profile from '@/data/profile.json';

export default function Hero() {
  return (
    <section id="index" className="section section-hero hero-split" data-screen-label="01 Index">
      <div className="hero-inner">
        <div className="hero-compact">
          <div className="hero-compact-eyebrow mono caps tiny dim">
            <span>§ 01 · Index</span>
          </div>

          <h1 className="hero-compact-name">
            <span className="hero-compact-portrait" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/headshot.png" alt="" />
            </span>
            <span className="hero-compact-name-text">Rio&nbsp;Kuchlyan</span>
            <span className="period">.</span>
          </h1>

          <p className="hero-compact-tag">
            {profile.role} at <em>{profile.taglineSchool}</em>{profile.taglineSuffix}
          </p>

          <div className="hero-compact-foot mono caps tiny dim">
            <span>{profile.location}</span>
            <span className="hero-compact-foot-sep">/</span>
            <span>Scroll to begin ↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
