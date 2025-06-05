import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import ParticleWrapper from "@/components/ParticleWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rio Kuchlyan",
    template: "%s | Rio Kuchlyan"
  },
  description: "Rio Kuchlyan is a Computer Science student at UNC Chapel Hill specializing in technology and finance. Backend developer with experience in trading software, VR development, and financial modeling.",
  keywords: [
    "Rio Kuchlyan",
    "Computer Science",
    "UNC Chapel Hill",
    "Backend Developer",
    "Trading Software",
    "VR Developer",
    "Financial Technology",
    "React",
    "Python",
    "JavaScript",
    "Portfolio"
  ],
  authors: [{ name: "Rio Kuchlyan" }],
  creator: "Rio Kuchlyan",
  publisher: "Rio Kuchlyan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.riokuchlyan.com",
    siteName: "Rio Kuchlyan Portfolio",
    title: "Rio Kuchlyan",
    description: "Rio Kuchlyan is a Computer Science student at UNC Chapel Hill specializing in technology and finance. Backend developer with experience in trading software, VR development, and financial modeling.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rio Kuchlyan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rio Kuchlyan - Computer Science Student & Developer",
    description: "Rio Kuchlyan is a Computer Science student at UNC Chapel Hill specializing in technology and finance. Backend developer with experience in trading software, VR development, and financial modeling.",
    images: ["/opengraph-image"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.riokuchlyan.com",
  },
  icons: {
    icon: "/bird.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.riokuchlyan.com" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ParticleWrapper />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}