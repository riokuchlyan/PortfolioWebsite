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
        <div className="fade-in min-h-screen p-8 sm:p-20 font-sans">
            <ThemeSwitcher/>
            <HomeButton/>

            <main className="max-w-5xl mx-auto pt-24">
                <header className="text-center mb-16 fade-in-delayed">
                    <h1 className="mb-4 mt-32">PROJECTS</h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        A collection of projects I&apos;ve built, ranging from web applications to mobile apps and utilities
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-delayed-2">
                    {projects.map((project, index) => (
                        <Link
                            key={project.title}
                            href={project.link}
                            target={project.type === 'external' ? '_blank' : '_self'}
                            rel={project.type === 'external' ? 'noopener noreferrer' : ''}
                            className="group block"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <article className="bg-card border border-border rounded-2xl overflow-hidden card-hover glow-on-hover h-full flex flex-col">
                                <div className="aspect-video relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} project screenshot`}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted text-sm flex-1">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 flex items-center text-accent text-sm font-medium">
                                        View Project
                                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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