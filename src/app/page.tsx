'use client';
import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { validateTheme } from "@/utils/validateTheme";
import DarkModeToggle from "@/components/DarkModeToggle";
import projectsData from './data/projects/projects.json';
import experienceData from './data/experience.json';
import photographyData from './data/photography/photography.json';

type Section = 'home' | 'projects' | 'experience' | 'photography';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isHeadshotModalOpen, setIsHeadshotModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    validateTheme();
  }, []);


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rio Kuchlyan",
    "jobTitle": "Computer Science & Business Student at UNC Chapel Hill",
    "description": "Computer Science and Business student at UNC Chapel Hill specializing in technology and finance.",
    "url": "https://www.riokuchlyan.com",
    "image": "https://www.riokuchlyan.com/",
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
    "email": "rio_kuchlyan@kenan-flagler.unc.edu",
    "telephone": "609-651-5164"
  };

  const renderContent = useCallback(() => {
    switch(activeSection) {
      case 'projects':
        return (
          <div className="max-w-3xl w-full pt-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-6">{projectsData.title}</h2>
            <div className="space-y-6 mt-8">
              {projectsData.projects.map((project, idx) => (
                <div key={project.title} className="stagger-item border-l border-border pl-6 pb-2 relative">
                  <div className={`absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full border-2 ${idx === 0 ? 'bg-accent border-accent' : 'bg-background border-muted'}`}></div>
                  <Link
                    href={project.link}
                    target={project.type === 'external' ? '_blank' : '_self'}
                    rel={project.type === 'external' ? 'noopener noreferrer' : ''}
                    className="group block rounded-lg -mx-3 px-3 py-3 transition-all duration-300 hover:bg-card/60 border border-transparent hover:border-border"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-md border border-border overflow-hidden bg-card">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex-1 space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-display text-base font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all duration-300"
                          >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                          </svg>
                        </div>
                        <p className="text-sm text-foreground leading-snug">{project.description}</p>
                        <p className="text-xs text-muted font-mono">{project.technologies}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="max-w-3xl w-full pt-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-6">{experienceData.title}</h2>
            <Link
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-foreground hover:bg-card rounded-lg transition-all duration-200 mb-8 group"
              target="_blank"
              href="/rio_kuchlyan_resume.pdf"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              <span>View Resume</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </Link>
            <div className="space-y-6 mt-8">
              {experienceData.timelineItems.map((item, idx) => (
                <div key={item.id} className="stagger-item border-l border-border pl-6 pb-2 relative group">
                  <div className={`absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full border-2 transition-colors ${idx === 0 ? 'bg-accent border-accent' : 'bg-background border-muted group-hover:border-foreground'}`}></div>
                  <div className="flex gap-4 rounded-lg -mx-3 px-3 py-2 transition-colors duration-300 group-hover:bg-card/60">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-md border border-border overflow-hidden bg-card">
                      <Image
                        src={item.logo}
                        alt={item.organization}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1 space-y-1.5 min-w-0">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <h3 className="font-display text-base font-semibold">{item.title}</h3>
                        <span className="text-xs text-muted font-mono whitespace-nowrap">{item.date}</span>
                      </div>
                      <p className="text-sm text-foreground">{item.organization}</p>
                      <span className="inline-block text-[10px] text-muted uppercase tracking-widest font-medium">{item.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'photography':
        return (
          <div className="max-w-3xl w-full pt-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-6">{photographyData.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {photographyData.photos.map((photo, index) => (
                <div
                  key={index}
                  className="stagger-item group cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="relative aspect-square overflow-hidden bg-card border border-border rounded-md">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, 33vw"
                      priority={index < 6}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-x-0 bottom-0 p-2.5 translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-[11px] font-medium text-white tracking-wide">{photo.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full">
            {/* Desktop: full viewport centered layout */}
            <div className="hidden lg:flex lg:min-h-screen lg:flex-col lg:items-center lg:justify-center relative">
              <div className="max-w-3xl px-4 space-y-6">
                <h2 className="stagger-item font-display text-2xl lg:text-3xl font-semibold tracking-tight text-foreground leading-tight">
                  Building at the intersection of <span className="text-accent">technology</span> and <span className="text-accent">finance</span>.
                </h2>
                <p className="stagger-item text-base lg:text-lg leading-relaxed text-foreground/90">
                  Hello! I&apos;m Rio Kuchlyan, a Computer Science and Business double major at UNC-Chapel Hill&apos;s Kenan-Flagler Business School. I have experience as a Private Equity Intern at Star Course Holdings and a researcher at the Visual Computing and Augmented Intelligence Lab. Currently, I am preparing to join Capital One as a Business Analyst Intern for Summer 2026, where I will focus on business analytics and strategy. In my free time, I enjoy world travel, new experiences, and photography.
                </p>
              </div>
            </div>

            {/* Mobile: simple stacked layout */}
            <div className="lg:hidden space-y-5">
              <h2 className="font-display text-xl font-semibold tracking-tight text-foreground leading-tight">
                Building at the intersection of <span className="text-accent">technology</span> and <span className="text-accent">finance</span>.
              </h2>
              <p className="text-base leading-relaxed text-foreground/90">
                Hello! I&apos;m Rio Kuchlyan, a Computer Science and Business double major at UNC-Chapel Hill&apos;s Kenan-Flagler Business School. I have experience as a Private Equity Intern at Star Course Holdings and a researcher at the Visual Computing and Augmented Intelligence Lab. Currently, I am preparing to join Capital One as a Business Analyst Intern for Summer 2026, where I will focus on business analytics and strategy. In my free time, I enjoy world travel, new experiences, and photography.
              </p>
            </div>
          </div>
        );
    }
  }, [activeSection]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen flex relative">
        {/* Headshot Modal */}
        {isHeadshotModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsHeadshotModalOpen(false)}
          >
            <div className="relative max-w-2xl max-h-[90vh] p-4">
              <button
                onClick={() => setIsHeadshotModalOpen(false)}
                className="absolute top-2 right-2 text-white hover:text-muted transition-colors bg-black/50 rounded-full p-2"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <Image 
                src="/headshot.png" 
                alt="Rio Kuchlyan" 
                width={600} 
                height={600} 
                className="rounded-full"
                priority
              />
            </div>
          </div>
        )}

        {/* Photography Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-muted transition-colors bg-black/50 rounded-full p-2"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <div className="relative w-full h-[80vh]">
                <Image 
                  src={selectedPhoto.src} 
                  alt={selectedPhoto.alt} 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-white text-center mt-4 text-lg">{selectedPhoto.alt}</p>
            </div>
          </div>
        )}

        {/* Top Right Corner Buttons */}
        <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2">
          <Link 
            href="/rio_kuchlyan_resume.pdf" 
            target="_blank"
            className="group flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium font-sans text-foreground bg-background/60 backdrop-blur-md border border-border rounded-lg hover:border-foreground/40 hover:bg-card transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[22px] sm:h-[22px]">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            <span>Resume</span>
          </Link>
          <DarkModeToggle />
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden w-full relative z-10">
          <div className="p-6">
            {/* Mobile Header */}
            <div className="mb-8">
              <div className="flex items-start mb-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0 group cursor-pointer" onClick={() => setIsHeadshotModalOpen(true)}>
                      <Image
                        src="/headshot.png"
                        alt="Rio Kuchlyan"
                        width={80}
                        height={80}
                        className="rounded-full ring-1 ring-border group-hover:ring-accent/40 transition-all duration-300"
                        priority
                      />
                    </div>
                    <div>
                      <h1 className="font-display text-3xl font-semibold text-foreground mb-1">Rio</h1>
                      <h1 className="font-display text-3xl font-semibold text-foreground">Kuchlyan</h1>
                    </div>
                  </div>
                  <div className="ml-0">
                    <p className="text-sm text-muted leading-relaxed">Computer Science &amp; Business</p>
                    <p className="text-sm text-muted leading-relaxed">at UNC-Chapel Hill</p>
                  </div>
                </div>
              </div>

              {/* Mobile Nav */}
              <nav className="flex flex-col gap-1 mb-6">
                {(['home', 'projects', 'experience', 'photography'] as const).map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`group relative flex items-center gap-3 text-2xl text-left transition-all duration-300 cursor-pointer py-1.5 font-display ${
                      activeSection === section
                        ? 'text-foreground font-semibold'
                        : 'text-muted hover:text-foreground'
                    }`}
                  >
                    <span
                      className={`block h-px transition-all duration-300 ${
                        activeSection === section ? 'w-6 bg-accent' : 'w-3 bg-muted group-hover:w-5 group-hover:bg-foreground'
                      }`}
                    ></span>
                    <span className="capitalize">{section}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Mobile Content */}
            <div className="mb-12 content-transition">
              {renderContent()}
            </div>

            {/* Mobile Social Links */}
            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <Link href="https://www.linkedin.com/in/riokuchlyan" target="_blank" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </Link>
              <Link href="https://github.com/riokuchlyan" target="_blank" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Link>
              <Link href="mailto:rio_kuchlyan@kenan-flagler.unc.edu" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                Email
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Left Sidebar */}
        <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 p-8 flex-col justify-between z-10">
          <div>
            <div className="mb-16">
              <div className="flex items-start mb-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4 stagger-item">
                    <div className="relative flex-shrink-0 group cursor-pointer" onClick={() => setIsHeadshotModalOpen(true)}>
                      <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <Image
                        src="/headshot.png"
                        alt="Rio Kuchlyan"
                        width={100}
                        height={100}
                        className="relative rounded-full ring-1 ring-border group-hover:ring-accent/40 transition-all duration-300"
                        priority
                      />
                    </div>
                    <div>
                      <h1 className="font-display text-4xl font-semibold text-foreground mb-1">Rio</h1>
                      <h1 className="font-display text-4xl font-semibold text-foreground">Kuchlyan</h1>
                    </div>
                  </div>
                  <div className="ml-0 stagger-item">
                    <p className="text-sm text-muted leading-relaxed">Computer Science &amp; Business</p>
                    <p className="text-sm text-muted leading-relaxed">at UNC-Chapel Hill</p>
                  </div>
                </div>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {(['home', 'projects', 'experience', 'photography'] as const).map((section, idx) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  style={{ animationDelay: `${0.15 + idx * 0.05}s` }}
                  className={`stagger-item group relative flex items-center gap-3 text-xl text-left transition-all duration-300 cursor-pointer py-1.5 ${
                    activeSection === section
                      ? 'text-foreground font-semibold font-display'
                      : 'text-muted hover:text-foreground font-display'
                  }`}
                >
                  <span
                    className={`block h-px transition-all duration-300 ${
                      activeSection === section ? 'w-6 bg-accent' : 'w-3 bg-muted group-hover:w-5 group-hover:bg-foreground'
                    }`}
                  ></span>
                  <span className="capitalize">{section}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Desktop Footer Links */}
          <div className="flex flex-col gap-3">
            <Link href="https://www.linkedin.com/in/riokuchlyan" target="_blank" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </Link>
            <Link href="https://github.com/riokuchlyan" target="_blank" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </Link>
            <Link href="mailto:rio_kuchlyan@kenan-flagler.unc.edu" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
              </svg>
              Email
            </Link>
          </div>
        </aside>

        {/* Desktop Content */}
        <main className={`hidden lg:flex flex-1 ml-64 p-12 ${activeSection === 'home' ? 'items-start' : 'items-center'} justify-center relative z-10 overflow-y-auto content-transition min-h-screen`}>
          {renderContent()}
        </main>
      </div>
    </>
  );
}
