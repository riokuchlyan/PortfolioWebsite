import Image from 'next/image';
import Link from 'next/link';
import home from '@/data/home.json';
import profile from '@/data/profile.json';

// renders "text with *highlighted* words" — asterisked spans become <em>
function emphasize(line: string) {
  return line
    .split(/\*([^*]+)\*/g)
    .map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part));
}

export default function Page() {
  return (
    <main className="hero">
      <div className="hero-text">
        <h1 className="hero-title">{profile.name}</h1>

        <p className="hero-intro">{home.intro}</p>

        <ul className="hero-feed">
          {home.recently.map((line) => (
            <li key={line}>{emphasize(line)}</li>
          ))}
        </ul>

        <p className="hero-now">{emphasize(home.closing)}</p>

        <div className="hero-actions">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-solid"
          >
            LinkedIn
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn">
            Resume
          </a>
          <Link href="/photography" className="btn">
            Photography
          </Link>
        </div>
      </div>

      <Image
        src="/assets/headshot.jpeg"
        alt={profile.name}
        className="hero-photo"
        width={480}
        height={600}
        priority
      />
    </main>
  );
}
