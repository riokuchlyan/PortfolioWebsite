'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
import './/animations.css'; 
import { useKeyboardNavigation } from '../hooks/KeyPressNavigation';
import { validateTheme } from "@/utils/validateTheme";
import NavBar from "../components/NavBar";

export default function Home() {
  useKeyboardNavigation({ key: '1', href: '/about-me' });
  useKeyboardNavigation({ key: '2', href: '/projects' });
  useKeyboardNavigation({ key: '3', href: '/experience' });
  useKeyboardNavigation({ key: '4', href: '/beyond-work' });

  useEffect(() => {
    validateTheme();
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rio Kuchlyan",
    "jobTitle": "Computer Science Student & Backend Developer",
    "description": "Computer Science student at UNC Chapel Hill specializing in technology and finance. Backend developer with experience in trading software, VR development, and financial modeling.",
    "url": "https://www.riokuchlyan.com",
    "image": "https://www.riokuchlyan.com/profile.png",
    "sameAs": [
      "https://www.linkedin.com/in/riokuchlyan",
      "https://github.com/riokuchlyan",
      "https://www.instagram.com/rio.kuchlyan/"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of North Carolina at Chapel Hill",
      "url": "https://www.unc.edu"
    },
    "knowsAbout": [
      "Computer Science",
      "Backend Development",
      "Trading Software",
      "VR Development",
      "Financial Technology",
      "React",
      "Python",
      "JavaScript",
      "FastAPI",
      "Next.js"
    ],
    "email": "rio.kuchlyan@unc.edu",
    "telephone": "609-651-5164"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="fade-in min-h-screen flex flex-col font-sans relative">
        <NavBar/>

        <main className="flex-1 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-6 sm:px-8 lg:px-20 pt-32 md:pt-48 pb-32">
          <div className="fade-in-delayed flex flex-col items-center space-y-10 mb-12">
            <div className="cursor-pointer relative">
              <div className="absolute inset-0"></div>
                  <Image className="rounded-[32%] aspect-square transition-all duration-500 relative z-10 shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-accent/20"
                  style={{ 
                    backgroundColor: 'var(--image-bg)',
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                  src="/headshot.png"
                  alt="Rio Kuchlyan"
                  width={140}
                  height={140}
                  priority
                />
            </div>

            <div className="space-y-6">
              <h1 className="tracking-tight text-foreground font-bold">RIO KUCHLYAN</h1>
              <h2 className="text-muted flex items-center justify-center gap-3 max-w-lg mx-auto font-medium">
                <span className="leading-relaxed">Computer Science & Business Student at UNC-Chapel Hill</span>
              </h2>
            </div>
          </div>

          <nav className="fade-in-delayed-2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center items-center max-w-4xl mx-auto">
              <Link 
                href="/about-me" 
                className="group inline-block slide-in-left"
                style={{ animationDelay: '0.1s' }}
              >
                <code className="inline-block w-full px-6 py-4 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 hover:scale-105 text-center font-mono text-sm font-semibold shadow-lg hover:shadow-2xl hover:shadow-accent/25">
                  [1] About Me
                </code>
              </Link>
              
              <Link 
                href="/projects" 
                className="group inline-block slide-in-left"
                style={{ animationDelay: '0.2s' }}
              >
                <code className="inline-block w-full px-6 py-4 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 hover:scale-105 text-center font-mono text-sm font-semibold shadow-lg hover:shadow-2xl hover:shadow-accent/25">
                  [2] Projects
                </code>
              </Link>
              
              <Link 
                href="/experience" 
                className="group inline-block slide-in-right"
                style={{ animationDelay: '0.3s' }}
              >
                <code className="inline-block w-full px-6 py-4 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 hover:scale-105 text-center font-mono text-sm font-semibold shadow-lg hover:shadow-2xl hover:shadow-accent/25">
                  [3] Experience
                </code>
              </Link>
              
              <Link 
                href="/beyond-work" 
                className="group inline-block slide-in-right"
                style={{ animationDelay: '0.4s' }}
              >
                <code className="inline-block w-full px-6 py-4 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 hover:scale-105 text-center font-mono text-sm font-semibold shadow-lg hover:shadow-2xl hover:shadow-accent/25">
                  [4] Beyond Work
                </code>
              </Link>
            </div>
          </nav>
        </main>

        <div className="fade-in-delayed-2 pb-12 px-6 sm:px-8 lg:px-20 flex justify-center">
        </div>
      </div>
    </>
  );
}
