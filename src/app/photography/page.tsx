'use client';
import React, { useEffect } from 'react';
import '../animations.css'; 
import Image from 'next/image';
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import NavBar from '../../components/NavBar';
import HomeButton from '../../components/HomeButton';
import { validateTheme } from '../../utils/validateTheme';

export default function Photography() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    useKeyboardNavigation({ key: '1', href: '/about-me' });
    useKeyboardNavigation({ key: '2', href: '/projects' });
    useKeyboardNavigation({ key: '3', href: '/experience' });
    useKeyboardNavigation({ key: '4', href: '/photography' });

    useEffect(() => {
        validateTheme();
    }, []);

    const photos = [
        {
            src: "/photography/colosseum.jpeg",
            alt: "Colosseum"
        },
        {
            src: "/photography/philly.jpeg",
            alt: "Philadelphia"
        },
        {
            src: "/photography/paris.jpeg",
            alt: "Paris"
        },
        {
            src: "/photography/acropolis.jpeg",
            alt: "Acropolis"
        },
        {
            src: "/photography/greece.jpeg",
            alt: "Greece"
        },
        {
            src: "/photography/vatican.jpeg",
            alt: "Vatican"
        },
        {
            src: "/photography/unc.jpeg",
            alt: "UNC"
        },
        {
            src: "/photography/scotland.jpeg",
            alt: "Scotland"
        },
        {
            src: "/photography/london.jpeg",
            alt: "London"
        }
    ];

    return (
        <div className="fade-in min-h-screen p-6 sm:p-8 lg:p-20 font-sans bg-gradient-to-br from-background via-background to-card/20">
            <NavBar/>
            <HomeButton/>

            <main className="max-w-6xl mx-auto pt-20 sm:pt-24">
                <header className="text-center mb-16 sm:mb-20 fade-in-delayed">
                    <h1 className="mb-4 sm:mb-6 mt-24 sm:mt-32 font-bold">PHOTOGRAPHY</h1>
                </header>

                {/* Photo Portfolio Section */}
                <section className="fade-in-delayed-2 px-2 sm:px-4 lg:px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {photos.map((photo, index) => (
                                <div 
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl bg-card/80 border border-border card-hover backdrop-blur-sm aspect-[4/3]"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Image
                                        src={photo.src}
                                        alt={photo.alt}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        priority={index < 3}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        <p className="text-sm font-medium">{photo.alt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Section */}
                <section className="mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 fade-in-delayed-3">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-2">Countries Visited</h2>
                            <p className="text-muted">A visual journey through the places I&apos;ve explored</p>
                        </div>
                        
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