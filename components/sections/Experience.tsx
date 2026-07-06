import Image from 'next/image';
import profile from '@/data/profile.json';
import experience from '@/data/experience.json';
import type { ExperienceItem } from '@/types';

const EXPERIENCE = experience as ExperienceItem[];
const WORK = EXPERIENCE.filter((e) => e.kind === 'WORK');
const EDUCATION = EXPERIENCE.filter((e) => e.kind === 'EDUCATION');

function ExpRows({ items }: { items: ExperienceItem[] }) {
  return (
    <ol className="exp-list">
      {items.map((e, i) => (
        <li key={i} className="exp-row">
          <div className="exp-logo">
            <Image
              src={e.logo}
              alt={e.org}
              width={104}
              height={104}
              sizes="(max-width: 720px) 36px, 44px"
            />
          </div>
          <div className="exp-main">
            <h3 className="exp-role">{e.role}</h3>
            <div className="exp-org dim">{e.org}</div>
          </div>
          <div className="exp-period mono tiny dim">{e.period}</div>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <div className="experience">
      <a
        className="resume-button mono tiny"
        href={profile.resume}
        target="_blank"
        rel="noreferrer"
      >
        View Resume <span aria-hidden="true">↗</span>
      </a>
      <div className="exp-group-label mono tiny dim">Work</div>
      <ExpRows items={WORK} />
      <div className="exp-group-label mono tiny dim">Education</div>
      <ExpRows items={EDUCATION} />
    </div>
  );
}
