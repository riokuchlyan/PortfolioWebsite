'use client';
import React, { useEffect } from 'react';
import '../animations.css'; 
import Image from 'next/image';
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import HomeButton from '../../components/HomeButton';
import { validateTheme } from '../../utils/validateTheme';

export default function BeyondWork() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    useKeyboardNavigation({ key: '1', href: '/about-me' });
    useKeyboardNavigation({ key: '2', href: '/projects' });
    useKeyboardNavigation({ key: '3', href: '/experience' });
    useKeyboardNavigation({ key: '4', href: '/beyond-work' });

    useEffect(() => {
        validateTheme();
    }, []);

    const photos = [
        {
            src: "/beyond_work1.jpeg",
            alt: "Travel memory 1"
        },
        {
            src: "/beyond_work2.jpeg",
            alt: "Travel memory 2"
        },
        {
            src: "/beyond_work3.jpeg",
            alt: "Travel memory 3"
        },
        {
            src: "/beyond_work4.jpeg",
            alt: "Travel memory 4"
        }
    ];

    return (
        <div className="fade-in min-h-screen p-8 sm:p-20 font-sans">
            <ThemeSwitcher/>
            <HomeButton/>

            <main className="max-w-6xl mx-auto pt-24">
                <header className="text-center mb-16 fade-in-delayed">
                    <h1 className="mb-4 mt-32">BEYOND WORK</h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Exploring the world and capturing moments that inspire me
                    </p>
                </header>

                <section className="mb-20 fade-in-delayed">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">Countries Visited</h2>
                        <p className="text-muted max-w-xl mx-auto">
                            A visual journey through the places I&apos;ve been fortunate to explore
                        </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card border border-border rounded-2xl overflow-hidden card-hover">
                            <video 
                                controls 
                                preload="auto"
                                className="w-full h-auto"
                                style={{ maxHeight: '500px' }}
                            >
                                <source src="/visited_places.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>

                <section className="fade-in-delayed-2">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-semibold mb-4 text-foreground">Moments</h2>
                        <p className="text-muted max-w-xl mx-auto">
                            A collection of memories from my travels and experiences
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {photos.map((photo, index) => (
                            <div 
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-card border border-border card-hover"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="aspect-[4/3] relative">
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}