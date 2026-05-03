import projects from '@/data/selected-work.json';
import type { Project } from '@/types';
import SectionMast from '../SectionMast';

const PROJECTS = projects as Project[];

export default function Work() {
  return (
    <section id="work" className="section" data-screen-label="03 Projects">
      <div className="section-inner">
        <SectionMast n="03" title="Projects" />
        <ol className="work-list">
          {PROJECTS.map((p) => (
            <li key={p.n} className="work-card">
              <a href={p.href} target="_blank" rel="noreferrer" className="work-card-link">
                <div className="work-card-thumb">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} loading="lazy" />
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
