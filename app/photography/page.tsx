import type { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Photography — Rio Kuchlyan',
  description: 'Photographs from around the world by Rio Kuchlyan.',
};

export default function PhotographyPage() {
  return (
    <main className="page">
      <Link href="/" className="page-back">
        &larr; Rio Kuchlyan
      </Link>
      <h1 className="page-title">Photography</h1>
      <Gallery />
    </main>
  );
}
