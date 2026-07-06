import profile from '@/data/profile.json';

export default function Contact() {
  return (
    <div className="contact">
      <a className="contact-mail" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <div className="contact-links">
        <a className="u-link" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <span className="dim">|</span>
        <a className="u-link" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span className="dim">|</span>
        <a className="u-link" href={profile.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
      <p className="contact-foot dim">
        {profile.name} · Last updated {profile.lastUpdated}
      </p>
    </div>
  );
}
