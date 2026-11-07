import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import SiteHeader from '@/components/SiteHeader';
import photography from '@/data/photography.json';
import profile from '@/data/profile.json';

export const metadata: Metadata = {
  title: `${photography.title} — ${profile.name}`,
  description: photography.seoDescription,
};

export default function PhotographyPage() {
  return (
    <div className="site-shell">
      <SiteHeader active="photography" />
      <main id="main" className="page">
        <div className="page-heading">
          <h1 className="page-title">{photography.title}</h1>
          <p className="page-description">{photography.description}</p>
        </div>
        <Gallery />
      </main>
    </div>
  );
}
