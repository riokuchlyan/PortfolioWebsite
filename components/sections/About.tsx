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
          sizes="(max-width: 720px) 88px, 112px"
        />
      </div>
      <div className="about-body">
        {profile.about.map((paragraph, i) => (
          <p key={i} className="about-tag">
            {paragraph}
          </p>
        ))}
        <p className="about-loc mono tiny dim">{profile.location}</p>
      </div>
    </div>
  );
}
