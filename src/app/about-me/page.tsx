'use client';
import React, { useEffect } from 'react';
import Image from "next/image";
import '../animations.css'; 
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import HomeButton from '../../components/HomeButton';
import { validateTheme } from '../../utils/validateTheme';
import NavBar from '../../components/NavBar';

export default function AboutMe() {
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
            src: "/family_photo.jpeg",
            alt: "Family moments"
        },
        {
            src: "/greece-photo.png",
            alt: "Greece travel"
        }
    ];

    return (
        <div className="fade-in min-h-screen p-6 sm:p-8 lg:p-20 font-sans bg-gradient-to-br from-background via-background to-card/20">
            <NavBar/> 
            <HomeButton/>

            <main className="max-w-6xl mx-auto pt-20 sm:pt-24">
                <header className="text-center mb-16 sm:mb-20 fade-in-delayed">
                    <h1 className="mb-4 sm:mb-6 mt-24 sm:mt-32 font-bold">ABOUT ME</h1>
                </header>

                <div className="space-y-16 sm:space-y-20">

                    <section className="fade-in-delayed">
                        <div className="bg-card/80 border border-border rounded-3xl p-6 sm:p-8 md:p-10 card-hover backdrop-blur-sm">
                            <p className="text-lg sm:text-xl leading-relaxed text-card-foreground mb-4 sm:mb-6 font-normal">
                                Hello! My name is <span className="text-accent font-semibold">Rio Kuchlyan</span> and I am a developer focusing on the technology and finance industries.
                            </p>
                            <p className="text-lg sm:text-xl leading-relaxed text-card-foreground mb-4 sm:mb-6 font-normal">
                                I am a student at the <span className="text-accent font-semibold">University of North Carolina at Chapel Hill</span> pursuing a double major in computer science and business.
                            </p>
                            <p className="text-lg sm:text-xl leading-relaxed text-card-foreground font-normal">
                                Feel free to connect with me!
                            </p>
                        </div>
                    </section>

                    <section className="fade-in-delayed-2">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
                            {photos.map((photo, index) => (
                                <div 
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl bg-card/80 border border-border card-hover backdrop-blur-sm"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}