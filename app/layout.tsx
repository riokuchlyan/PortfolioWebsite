import type { Metadata, Viewport } from 'next';
import './globals.css';
import profile from '@/data/profile.json';

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: profile.name,
  description: profile.seoDescription,
  authors: [{ name: profile.name }],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/assets/favicon-32.png?v=serif', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon-192.png?v=serif', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/assets/favicon-512.png?v=serif', sizes: '512x512', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    url: profile.website,
    siteName: profile.name,
    title: profile.name,
    description: profile.seoDescription,
    images: [
      {
        url: profile.socialImage,
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
    images: [profile.socialImage],
  },
};

export const viewport: Viewport = {
  themeColor: '#FBFAF7',
};

const PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: profile.website,
  email: `mailto:${profile.email}`,
  image: new URL(profile.portrait.src, profile.website).href,
  jobTitle: profile.jobTitle,
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: profile.affiliation,
  },
  knowsLanguage: profile.languages,
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
