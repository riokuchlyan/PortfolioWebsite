'use client';
import React, { useEffect } from 'react';
import Link from "next/link";
import '../animations.css'; 
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import HomeButton from '../../components/HomeButton';
import { validateTheme } from '../../utils/validateTheme';

export default function Experience() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    useKeyboardNavigation({ key: '1', href: '/about-me' });
    useKeyboardNavigation({ key: '2', href: '/projects' });
    useKeyboardNavigation({ key: '3', href: '/experience' });
    useKeyboardNavigation({ key: '4', href: '/beyond-work' });

    useEffect(() => {
        validateTheme();
    }, []);

    const timelineItems = [
        {
            id: 1,
            date: "Apr. 2025 - Present",
            title: "Backend Developer - Equities/Capital Markets Intern",
            organization: "Swing Phi",
            type: "work"
        },
        {
            id: 2,
            date: "Apr. 2025 - Present",
            title: "Private Equity Intern",
            organization: "Star Course Holdings",
            type: "work"
        },
        {
            id: 3,
            date: "Feb. 2025 - Present",
            title: "Extended Reality Developer",
            organization: "Carolina AR/VR",
            type: "academic"
        },
        {
            id: 4,
            date: "Aug. 2024 - Present",
            title: "Instructor",
            organization: "Prep Expert",
            type: "work"
        },
        {
            id: 5,
            date: "Aug. 2024 - May 2028",
            title: "Bachelor of Science in Computer Science",
            organization: "University of North Carolina at Chapel Hill",
            type: "education"
        }
    ];

    return (
        <div className="fade-in min-h-screen p-8 sm:p-20 font-sans">
            <ThemeSwitcher/>
            <HomeButton/>

            <main className="max-w-6xl mx-auto pt-24">
                <header className="text-center mb-16 fade-in-delayed">
                    <h1 className="mb-4 mt-32">EXPERIENCE</h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
                        My journey through education, work, and academic experiences
                    </p>
                    <Link 
                        className="bg-accent text-white py-2 px-4 rounded-md hover:bg-accent/90 transition-colors inline-block" 
                        target="_blank" 
                        href="/rio_kuchlyan_resume.pdf"
                    >
                        View My Resume
                    </Link>
                </header>

                <div className="relative fade-in-delayed-2 max-w-2xl mx-auto">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-border h-full"></div>
                    
                    {timelineItems.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`relative flex items-center mb-8 ${
                                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                <div className="w-2 h-2 rounded-full bg-muted border-2 border-background"></div>
                            </div>
                            
                            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                                <div className="py-2">
                                    <h3 className="text-sm font-medium mb-1 text-foreground">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-muted mb-1">{item.organization}</p>
                                    <p className="text-xs text-muted font-mono">{item.date}</p>
                                </div>
                            </div>
                            
                            <div className="w-5/12"></div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}