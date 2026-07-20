import Image from 'next/image';
import projects from '@/data/selected-work.json';
import type { Project } from '@/types';

const PROJECTS = projects as Project[];

export default function Work() {
  return (
    <ol className="work-list">
      {PROJECTS.map((p) => (
        <li key={p.title} className="work-row">
          <a href={p.href} target="_blank" rel="noreferrer" className="work-row-link">
            <div className="work-row-body">
              <div className="work-card-meta tiny dim">
                {p.type} / {p.year}
              </div>
              <h3 className="work-card-title">{p.title}</h3>
              <p className="work-card-blurb">{p.blurb}</p>
            </div>
            <div className="work-row-thumb">
              <Image
                src={p.image}
                alt={p.title}
                width={1200}
                height={900}
                sizes="(max-width: 720px) 88px, 104px"
              />
            </div>
          </a>
        </li>
      ))}
    </ol>
  );
}
