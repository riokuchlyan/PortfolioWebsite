import profile from '@/data/profile.json';
import experience from '@/data/experience.json';
import type { ExperienceItem } from '@/types';
import SectionMast from '../SectionMast';

const EXPERIENCE = experience as ExperienceItem[];

export default function Experience() {
  return (
    <section id="experience" className="section" data-screen-label="02 Experience">
      <div className="section-inner">
        <SectionMast
          n="02"
          title="Experience"
          action={{ label: 'Resume', href: profile.resume }}
        />
        <ol className="exp-list">
          {EXPERIENCE.map((e, i) => (
            <li key={i} className={`exp-card ${e.current ? 'is-current' : ''}`}>
              <div className="exp-card-rail">
                <div className="exp-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.logo} alt={e.org} loading="lazy" />
                </div>
              </div>
              <div className="exp-card-body">
                <div className="exp-card-meta mono caps tiny">
                  <span className="exp-period">{e.period}</span>
                  <span className="dim">·</span>
                  <span className="dim">{e.kind}</span>
                  {e.incoming && <span className="exp-tag">Incoming</span>}
                </div>
                <h3 className="exp-role-title">{e.role}</h3>
                <div className="exp-org">{e.org}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
