import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import profile from '@/data/profile.json';

const sans = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sans',
});

const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-serif',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-mono',
});

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
    title: `${profile.name} — Portfolio`,
    description: profile.seoDescription,
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: `${profile.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — Portfolio`,
    description: profile.seoDescription,
    images: ['/assets/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F5F1' },
    { media: '(prefers-color-scheme: dark)', color: '#07090E' },
  ],
};

const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');document.documentElement.dataset.theme=s==='dark'?'dark':'light';}catch(e){document.documentElement.dataset.theme='light';}})();`;

const PERSON_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: 'https://riokuchlyan.com/',
  email: `mailto:${profile.email}`,
  image: 'https://riokuchlyan.com/assets/headshot.png',
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSONLD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
