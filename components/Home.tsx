import profile from '@/data/profile.json';

export default function Home() {
  return (
    <div className="home-inner">
      <div className="home-mark" aria-hidden="true">
        RK
      </div>
      <footer className="home-foot">
        <span className="mono tiny dim home-coords">{profile.location}</span>
        <div className="home-foot-links mono tiny">
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
      </footer>
    </div>
  );
}
