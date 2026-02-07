'use client';
import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from "next/link";
import { validateTheme } from "@/utils/validateTheme";
import DarkModeToggle from "@/components/DarkModeToggle";
import projectsData from './data/projects/projects.json';
import experienceData from './data/experience.json';
import photographyData from './data/photography/photography.json';
import blogData from './data/blog.json';

type Section = 'home' | 'projects' | 'experience' | 'photography';

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isHeadshotModalOpen, setIsHeadshotModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    validateTheme();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isTyping = target.tagName === 'INPUT' || 
                      target.tagName === 'TEXTAREA' || 
                      target.isContentEditable;
      
      if (isTyping) return;

      switch(e.key.toLowerCase()) {
        case 'h': setActiveSection('home'); break;
        case '1': setActiveSection('projects'); break;
        case '2': setActiveSection('experience'); break;
        case '3': setActiveSection('photography'); break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rio Kuchlyan",
    "jobTitle": "Computer Science & Business Student at UNC Chapel Hill",
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

  const renderContent = useCallback(() => {
    switch(activeSection) {
      case 'projects':
        return (
          <div className="max-w-3xl w-full pt-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">{projectsData.title}</h2>
            <p className="text-muted mb-6">{projectsData.description}</p>
            <div className="space-y-8 mt-8">
              {projectsData.projects.map((project) => (
                <div key={project.title} className="border-l-2 border-border pl-6 pb-2">
                  <div className="relative">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-foreground border-2 border-background"></div>
                    <Link
                      href={project.link}
                      target={project.type === 'external' ? '_blank' : '_self'}
                      rel={project.type === 'external' ? 'noopener noreferrer' : ''}
                      className="group block"
                    >
                      <div className="flex gap-4 mb-2">
                        <div className="relative w-16 h-16 flex-shrink-0 rounded border border-border overflow-hidden bg-card">
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className="object-cover group-hover:opacity-80 transition-opacity" 
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h3 className="text-base font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
                          <p className="text-sm text-foreground">{project.description}</p>
                          <p className="text-xs text-muted">{project.technologies}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="max-w-3xl w-full pt-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">{experienceData.title}</h2>
            <p className="text-muted mb-6">{experienceData.description}</p>
            <Link 
              className="inline-flex items-center gap-2 border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-foreground rounded-lg transition-all duration-200 mb-8" 
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
            </Link>
            <div className="space-y-8 mt-8">
              {experienceData.timelineItems.map((item) => (
                <div key={item.id} className="border-l-2 border-border pl-6 pb-2">
                  <div className="relative">
                    <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-foreground border-2 border-background"></div>
                    <div className="flex gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded border border-border overflow-hidden bg-card">
                        <Image 
                          src={item.logo} 
                          alt={item.organization} 
                          fill 
                          className="object-contain p-2" 
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <h3 className="text-base font-semibold">{item.title}</h3>
                          <span className="text-xs text-muted font-mono whitespace-nowrap">{item.date}</span>
                        </div>
                        <p className="text-sm text-foreground">{item.organization}</p>
                        <span className="inline-block text-xs text-muted uppercase tracking-wide">{item.type}</span>
                      </div>
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
            <h2 className="text-3xl font-bold text-foreground mb-2">{photographyData.title}</h2>
            <p className="text-muted mb-6">Capturing moments from my travels around the world</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {photographyData.photos.map((photo, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => setSelectedPhoto(photo)}>
                  <div className="relative aspect-square overflow-hidden bg-card border border-border rounded">
                    <Image 
                      src={photo.src} 
                      alt={photo.alt} 
                      fill 
                      className="object-cover group-hover:opacity-80 transition-opacity" 
                      sizes="(max-width: 640px) 50vw, 33vw" 
                      priority={index < 6} 
                    />
                  </div>
                  <p className="text-xs text-muted mt-1.5">{photo.alt}</p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full">
            {/* Intro Section - Full viewport, paragraph centered, arrow at bottom */}
            <div className="min-h-[calc(100vh-28rem)] lg:min-h-screen flex flex-col lg:items-center lg:justify-center relative">
              <div className="max-w-3xl mx-auto px-4">
                <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-foreground">
                  Hello! I&apos;m Rio Kuchlyan, a Computer Science and Business double major at UNC-Chapel Hill&apos;s Kenan-Flagler Business School. I leverage technical skills to solve financial problems. With experience as a Private Equity Analyst at Star Course Holdings and a researcher at the Visual Computing Lab, I build scalable, data-driven solutions. Currently, I am preparing to join Capital One as a Business Analyst Intern for Summer 2026, where I continue to focus on building scalable, data-driven solutions for the financial sector.
                </p>
              </div>
              
              {/* Scroll Indicator - Centered on full viewport on desktop, pushed to bottom on mobile */}
              <div className="flex flex-col items-center mt-auto pb-6 lg:mt-0 lg:pb-0 lg:absolute lg:bottom-16 lg:left-[calc(50vw-19rem)] lg:-translate-x-1/2 animate-bounce">
                <span className="text-sm text-muted mb-2">My Thoughts</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <polyline points="19 12 12 19 5 12"/>
                </svg>
              </div>
            </div>

            {/* Blog Section */}
            <div className="max-w-5xl mx-auto pb-20 mt-[20vh] lg:mt-0">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-center">{blogData.title}</h2>
              <p className="text-muted text-center mb-16">{blogData.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {blogData.posts.map((post, index) => (
                  <div 
                    key={post.id}
                    className="sticky-note group cursor-pointer"
                    style={{
                      backgroundColor: post.color,
                      transform: `rotate(${index % 2 === 0 ? '2deg' : '-2deg'})`,
                    }}
                  >
                    {/* Pin */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 pt-8">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 font-medium">{post.date}</span>
                        <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">Read →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
        {/* Grid Background */}
        <div className="fixed inset-0 grid-background"></div>

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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
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
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
          <Link 
            href="/rio_kuchlyan_resume.pdf" 
            target="_blank"
            className="group flex items-center gap-2 px-4 py-2.5 text-base font-semibold text-foreground hover:text-foreground bg-background/60 backdrop-blur-md border border-border/50 rounded-lg hover:border-foreground/30 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    <Image 
                      src="/headshot.png" 
                      alt="Rio Kuchlyan" 
                      width={80} 
                      height={80} 
                      className="rounded-full flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                      priority
                      onClick={() => setIsHeadshotModalOpen(true)}
                    />
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-1">Rio</h1>
                      <h1 className="text-3xl font-bold text-foreground">Kuchlyan</h1>
                    </div>
                  </div>
                  <div className="ml-0">
                    <p className="text-base text-foreground">Computer Science & Business</p>
                    <p className="text-base text-foreground">at UNC-Chapel Hill</p>
                  </div>
                </div>
              </div>

              {/* Mobile Nav */}
              <nav className="flex flex-col gap-3 mb-12">
                <button 
                  onClick={() => setActiveSection('home')} 
                  className={`text-2xl text-left transition-colors ${activeSection === 'home' ? 'text-accent font-semibold' : 'text-foreground'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => setActiveSection('projects')} 
                  className={`text-2xl text-left transition-colors ${activeSection === 'projects' ? 'text-accent font-semibold' : 'text-foreground'}`}
                >
                  Projects
                </button>
                <button 
                  onClick={() => setActiveSection('experience')} 
                  className={`text-2xl text-left transition-colors ${activeSection === 'experience' ? 'text-accent font-semibold' : 'text-foreground'}`}
                >
                  Experience
                </button>
                <button 
                  onClick={() => setActiveSection('photography')} 
                  className={`text-2xl text-left transition-colors ${activeSection === 'photography' ? 'text-accent font-semibold' : 'text-foreground'}`}
                >
                  Photography
                </button>
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
              <Link href="mailto:rio.kuchlyan@unc.edu" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm">
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
                  <div className="flex items-start gap-4">
                    <Image 
                      src="/headshot.png" 
                      alt="Rio Kuchlyan" 
                      width={100} 
                      height={100} 
                      className="rounded-full flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
                      priority
                      onClick={() => setIsHeadshotModalOpen(true)}
                    />
                    <div>
                      <h1 className="text-4xl font-bold text-foreground mb-1">Rio</h1>
                      <h1 className="text-4xl font-bold text-foreground">Kuchlyan</h1>
                    </div>
                  </div>
                  <div className="ml-0">
                    <p className="text-lg text-foreground">Computer Science & Business</p>
                    <p className="text-lg text-foreground">at UNC-Chapel Hill</p>
                  </div>
                </div>
              </div>
            </div>

            <nav className="flex flex-col gap-3">
              <button onClick={() => setActiveSection('home')} className={`flex items-center gap-3 text-xl transition-colors group text-left ${activeSection === 'home' ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
                <span className="text-xs font-mono text-muted group-hover:text-accent px-2 py-1 border border-border rounded">[H]</span>
                <span>Home</span>
              </button>
              <button onClick={() => setActiveSection('projects')} className={`flex items-center gap-3 text-xl transition-colors group text-left ${activeSection === 'projects' ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
                <span className="text-xs font-mono text-muted group-hover:text-accent px-2 py-1 border border-border rounded">[1]</span>
                <span>Projects</span>
              </button>
              <button onClick={() => setActiveSection('experience')} className={`flex items-center gap-3 text-xl transition-colors group text-left ${activeSection === 'experience' ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
                <span className="text-xs font-mono text-muted group-hover:text-accent px-2 py-1 border border-border rounded">[2]</span>
                <span>Experience</span>
              </button>
              <button onClick={() => setActiveSection('photography')} className={`flex items-center gap-3 text-xl transition-colors group text-left ${activeSection === 'photography' ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
                <span className="text-xs font-mono text-muted group-hover:text-accent px-2 py-1 border border-border rounded">[3]</span>
                <span>Photography</span>
              </button>
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
            <Link href="mailto:rio.kuchlyan@unc.edu" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors text-sm">
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
