import Image from 'next/image';
import profile from '@/data/profile.json';
import experience from '@/data/experience.json';
import type { ExperienceItem } from '@/types';
import SectionMast from '../SectionMast';

const EXPERIENCE = experience as ExperienceItem[];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <SectionMast n="02" title="Experience" action={{ label: 'Resume', href: profile.resume }} />
        <ol className="exp-list">
          {EXPERIENCE.map((e, i) => (
            <li key={i} className="exp-card">
              <div className="exp-card-rail">
                <div className="exp-logo">
                  <Image
                    src={e.logo}
                    alt={e.org}
                    width={104}
                    height={104}
                    sizes="(max-width: 720px) 40px, 52px"
                  />
                </div>
              </div>
              <div className="exp-card-body">
                <div className="exp-card-meta mono caps tiny">
                  <span className="exp-period">{e.period}</span>
                  <span className="dim">·</span>
                  <span className="dim">{e.kind}</span>
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
