'use client';
import React, { useEffect } from 'react';
import '../animations.css'; 
import Link from "next/link";
import Image from "next/image";
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import HomeButton from '../../components/HomeButton';
import { validateTheme } from '../../utils/validateTheme';

export default function Projects() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    useKeyboardNavigation({ key: '1', href: '/about-me' });
    useKeyboardNavigation({ key: '2', href: '/projects' });
    useKeyboardNavigation({ key: '3', href: '/experience' });
    useKeyboardNavigation({ key: '4', href: '/beyond-work' });

    useEffect(() => {
        validateTheme();
    }, []);
    
    const projects = [
        {
            title: "VisuAlize",
            description: "React, FastAPI, Supabase",
            image: "/visualize.png",
            link: "https://visualize-navy.vercel.app",
            type: "external"
        },
        {
            title: "Password Manager",
            description: "React, FastAPI, Supabase",
            image: "/password_manager.png",
            link: "https://github.com/riokuchlyan/passwordManager",
            type: "external"
        },
        {
            title: "Portfolio",
            description: "Next.js, TypeScript, Tailwind CSS",
            image: "/portfolio.png",
            link: "https://github.com/riokuchlyan/rios-portfolio",
            type: "external"
        },
        {
            title: "Battleship",
            description: "Python Game Implementation",
            image: "/battleship.png",
            link: "https://replit.com/@riokuchlyan/Battleship",
            type: "external"
        },
        {
            title: "Clipboard Manager",
            description: "Desktop Utility Application",
            image: "/clipboard_manager.png",
            link: "https://github.com/riokuchlyan/clipboardManager",
            type: "external"
        },
        {
            title: "Dog Adoption Website",
            description: "React, Node.js, Database Integration",
            image: "/dog-adoption.png",
            link: "https://github.com/riokuchlyan/dog-adoption",
            type: "external"
        }
    ];
    
    return (
        <div className="fade-in min-h-screen p-6 sm:p-8 lg:p-20 font-sans bg-gradient-to-br from-background via-background to-card/20">
            <ThemeSwitcher/>
            <HomeButton/>

            <main className="max-w-6xl mx-auto pt-20 sm:pt-24">
                <header className="text-center mb-16 sm:mb-20 fade-in-delayed">
                    <h1 className="mb-4 sm:mb-6 mt-24 sm:mt-32 font-bold">PROJECTS</h1>
                    <p className="text-foreground/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
                        A collection of projects I've built, ranging from web applications to mobile apps and utilities
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 fade-in-delayed-2">
                    {projects.map((project, index) => (
                        <Link
                            key={project.title}
                            href={project.link}
                            target={project.type === 'external' ? '_blank' : '_self'}
                            rel={project.type === 'external' ? 'noopener noreferrer' : ''}
                            className="group block"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <article className="bg-card/90 border border-border rounded-2xl overflow-hidden card-hover glow-on-hover h-full flex flex-col backdrop-blur-sm hover:bg-card transition-all duration-300">
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} project screenshot`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-accent transition-colors leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-foreground/70 text-sm sm:text-base flex-1 leading-relaxed mb-3 sm:mb-4 font-normal">
                                        {project.description}
                                    </p>
                                    <div className="flex items-center text-accent text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                        <span>View Project</span>
                                        <svg 
                                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
}