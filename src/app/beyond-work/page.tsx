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
        <div className="fade-in min-h-screen p-6 sm:p-8 lg:p-20 font-sans bg-gradient-to-br from-background via-background to-card/20">
            <ThemeSwitcher/>
            <HomeButton/>

            <main className="max-w-6xl mx-auto pt-20 sm:pt-24">
                <header className="text-center mb-16 sm:mb-20 fade-in-delayed">
                    <h1 className="mb-4 sm:mb-6 mt-24 sm:mt-32">BEYOND WORK</h1>
                </header>

                <section className="fade-in-delayed-2">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">Photos</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                        {photos.map((photo, index) => (
                            <div 
                                key={index}
                                className="group relative overflow-hidden rounded-3xl bg-card/80 border border-border card-hover backdrop-blur-sm"
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
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-20 mb-20 sm:mb-24 fade-in-delayed">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground">Countries Visited</h2>
                    </div>
                    
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-card/80 border border-border rounded-3xl overflow-hidden card-hover backdrop-blur-sm hover:bg-card/90 transition-all duration-300 p-2">
                            <video 
                                controls 
                                preload="auto"
                                className="w-full h-auto rounded-2xl"
                                style={{ maxHeight: '500px' }}
                            >
                                <source src="/visited_places.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}