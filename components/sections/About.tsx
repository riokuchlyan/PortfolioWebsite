import Image from 'next/image';
import profile from '@/data/profile.json';

export default function About() {
  return (
    <div className="about">
      <div className="about-portrait">
        <Image
          src="/assets/headshot.png"
          alt={profile.name}
          width={208}
          height={208}
          sizes="(max-width: 720px) 76px, 112px"
        />
      </div>
      <div className="about-body">
        {profile.about.map((paragraph, i) => (
          <p key={i} className="about-tag">
            {paragraph}
          </p>
        ))}
        <p className="about-loc mono tiny dim">{profile.location}</p>
        <div className="about-links mono tiny">
          <a className="u-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="u-link" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="u-link" href={profile.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
