import Image from 'next/image';
import projects from '@/data/selected-work.json';
import type { Project } from '@/types';
import SectionMast from '../SectionMast';

const PROJECTS = projects as Project[];

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="section-inner">
        <SectionMast n="03" title="Projects" />
        <ol className="work-list">
          {PROJECTS.map((p) => (
            <li key={p.n} className="work-card">
              <a href={p.href} target="_blank" rel="noreferrer" className="work-card-link">
                <div className="work-card-thumb">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={1200}
                    height={900}
                    sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>
                <div className="work-card-body">
                  <div className="work-card-eyebrow mono caps tiny dim">
                    <span>{p.n}</span>
                    <span>·</span>
                    <span>{p.type}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="work-card-title">{p.title}</h3>
                  <p className="work-card-blurb">{p.blurb}</p>
                </div>
                <div className="work-card-arrow" aria-hidden="true">
                  ↗
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
