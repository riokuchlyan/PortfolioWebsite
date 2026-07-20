import type { Metadata, Viewport } from 'next';
import './globals.css';
import profile from '@/data/profile.json';

export const metadata: Metadata = {
  metadataBase: new URL('https://riokuchlyan.com'),
  title: profile.name,
  description: profile.seoDescription,
  authors: [{ name: profile.name }],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/assets/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/assets/favicon-512.png', sizes: '512x512', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    url: 'https://riokuchlyan.com/',
    siteName: profile.name,
    title: profile.name,
    description: profile.seoDescription,
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.name,
    description: profile.seoDescription,
    images: ['/assets/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#FBFAF7',
};

const PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: 'https://riokuchlyan.com/',
  email: `mailto:${profile.email}`,
  image: 'https://riokuchlyan.com/assets/headshot.jpeg',
  jobTitle: 'Student',
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'University of North Carolina at Chapel Hill — Kenan-Flagler Business School',
  },
  knowsLanguage: ['English', 'Hindi', 'Bengali', 'French'],
  sameAs: [profile.linkedin, profile.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
