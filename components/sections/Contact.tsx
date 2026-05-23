import profile from '@/data/profile.json';
import MetaRow from '../MetaRow';
import SectionMast from '../SectionMast';

export default function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="section-inner">
        <SectionMast n="05" title="Contact" />
        <div className="contact-grid">
          <div className="contact-main">
            <a className="contact-mail" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <aside className="contact-meta">
            <MetaRow
              label="LinkedIn"
              value={
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  /in/riokuchlyan
                </a>
              }
            />
            <MetaRow
              label="GitHub"
              value={
                <a href={profile.github} target="_blank" rel="noreferrer">
                  @riokuchlyan
                </a>
              }
            />
            <MetaRow
              label="Resume"
              value={
                <a href={profile.resume} target="_blank" rel="noreferrer">
                  View PDF
                </a>
              }
            />
          </aside>
        </div>
        <footer className="footer">
          <span className="mono caps tiny dim">{profile.name} · Last updated {profile.lastUpdated}</span>
        </footer>
      </div>
    </section>
  );
}
