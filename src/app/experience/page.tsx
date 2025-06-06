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
            title: "Software Engineer",
            organization: "Swing Phi",
            type: "work",
            icon: "💼"
        },
        {
            id: 2,
            date: "Apr. 2025 - Present",
            title: "Private Equity Intern",
            organization: "Star Course Holdings",
            type: "work",
            icon: "💼"
        },
        {
            id: 3,
            date: "Feb. 2025 - Present",
            title: "Extended Reality Developer",
            organization: "Carolina AR/VR",
            type: "academic",
            icon: "🔬"
        },
        {
            id: 4,
            date: "Aug. 2024 - Present",
            title: "Instructor",
            organization: "Prep Expert",
            type: "work",
            icon: "📚"
        },
        {
            id: 5,
            date: "Aug. 2024 - May 2028",
            title: "Bachelor of Science in Computer Science",
            organization: "University of North Carolina at Chapel Hill",
            type: "education",
            icon: "🎓"
        },
        {
            id: 6,
            date: "Aug. 2023 - Aug. 2024",
            title: "Student Representative",
            organization: "Hillsborough Township Board of Education",
            type: "academic",
            icon: "🏛️"
        }
    ];

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'work': return 'bg-blue-500';
            case 'academic': return 'bg-purple-500';
            case 'education': return 'bg-green-500';
            default: return 'bg-accent';
        }
    };

    return (
        <div className="fade-in min-h-screen p-6 sm:p-8 lg:p-20 font-sans bg-black">
            <ThemeSwitcher/>
            <HomeButton/>

            <main className="max-w-6xl mx-auto pt-20 sm:pt-24">
                <header className="text-center mb-16 sm:mb-20 fade-in-delayed">
                    <h1 className="mb-4 sm:mb-6 mt-24 sm:mt-32">EXPERIENCE</h1>
                    <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                        My journey through education, work, and academic experiences
                    </p>
                    <Link 
                        className="bg-accent text-white py-3 px-6 rounded-xl hover:bg-accent/90 transition-all duration-300 inline-block font-medium hover:scale-105 shadow-md hover:shadow-lg" 
                        target="_blank" 
                        href="/rio_kuchlyan_resume.pdf"
                    >
                        View My Resume
                    </Link>
                </header>

                <div className="relative fade-in-delayed-2 max-w-4xl mx-auto">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-border via-muted/50 to-border rounded-full h-full shadow-lg"></div>
                    
                    {timelineItems.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`relative flex items-center mb-4 sm:mb-6 ${
                                index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                            }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                <div className={`w-6 h-6 rounded-full ${getTypeColor(item.type)} border-4 border-background shadow-xl flex items-center justify-center ring-2 ring-border/50`}>
                                    <span className="text-sm font-bold">{item.icon}</span>
                                </div>
                            </div>
                            
                            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-6 sm:pr-8' : 'pl-6 sm:pl-8'}`}>
                                <div className={`bg-card border-2 border-accent/20 rounded-2xl p-5 sm:p-7 card-hover backdrop-blur-sm hover:bg-card hover:border-accent/40 hover:shadow-xl transition-all duration-300 shadow-lg ${
                                    index % 2 === 0 ? 'text-right' : 'text-left'
                                }`}>
                                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`w-3 h-3 rounded-full ${getTypeColor(item.type)} ${index % 2 === 0 ? 'order-2' : 'order-1'} shadow-md`}></div>
                                        <span className={`text-xs font-bold font-mono text-accent uppercase tracking-wide ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-base text-accent font-semibold mb-2">{item.organization}</p>
                                    <p className="text-sm sm:text-base text-muted font-mono font-medium">{item.date}</p>
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