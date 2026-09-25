import type { Metadata } from 'next';
import Gallery from '@/components/Gallery';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Photography — Rio Kuchlyan',
  description: 'Photographs from around the world by Rio Kuchlyan.',
};

export default function PhotographyPage() {
  return (
    <div className="site-shell">
      <SiteHeader active="photography" />
      <main id="main" className="page">
        <div className="page-heading">
          <h1 className="page-title">Photography</h1>
          <p className="page-description">Learning Photography.<br />One country at a time.</p>
        </div>
        <Gallery />
      </main>
      <SiteFooter />
    </div>
  );
}
