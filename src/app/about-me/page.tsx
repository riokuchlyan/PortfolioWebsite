'use client';
import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import '../animations.css'; 
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import HomeButton from '../../components/HomeButton';
import { validateTheme } from '../../utils/validateTheme';

export default function AboutMe() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    useKeyboardNavigation({ key: '1', href: '/about-me' });
    useKeyboardNavigation({ key: '2', href: '/projects' });
    useKeyboardNavigation({ key: '3', href: '/experience' });
    useKeyboardNavigation({ key: '4', href: '/beyond-work' });

    useEffect(() => {
        validateTheme();
    }, []);

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/riokuchlyan",
            icon: "/linkedin_logo.svg",
            alt: "LinkedIn",
            label: "LinkedIn"
        },
        {
            href: "mailto:rio.kuchlyan@unc.edu",
            icon: "/mail_logo.png",
            alt: "Email",
            label: "Email"
        },
        {
            href: "https://www.instagram.com/rio.kuchlyan/",
            icon: "/instagram_logo.png",
            alt: "Instagram",
            label: "Instagram"
        }
    ];

    const photos = [
        {
            src: "/family_photo.jpeg",
            alt: "Family moments",
            caption: "Family"
        },
        {
            src: "/greece-photo.png",
            alt: "Greece travel",
            caption: "Greece"
        },
        {
            src: "/tower-photo.png",
            alt: "Tower visit",
            caption: "Architecture"
        },
        {
            src: "/stadium-photo.jpeg",
            alt: "Stadium experience",
            caption: "Sports"
        }
    ];

    return (
        <div className="fade-in min-h-screen p-6 sm:p-8 lg:p-20 font-sans bg-gradient-to-br from-background via-background to-card/20">
            <ThemeSwitcher/> 
            <HomeButton/>

            <main className="max-w-6xl mx-auto pt-20 sm:pt-24">
                <header className="text-center mb-16 sm:mb-20 fade-in-delayed">
                    <h1 className="mb-4 sm:mb-6 mt-24 sm:mt-32">ABOUT ME</h1>
                </header>

                <div className="space-y-16 sm:space-y-20">

                    <section className="fade-in-delayed">
                        <div className="bg-card/80 border border-border rounded-3xl p-6 sm:p-8 md:p-10 card-hover backdrop-blur-sm">
                            <p className="text-base sm:text-lg leading-relaxed text-card-foreground mb-4 sm:mb-6">
                                Hello! My name is <span className="text-accent font-semibold">Rio Kuchlyan</span> and I am a developer focusing on the technology and finance industries.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed text-card-foreground mb-4 sm:mb-6">
                                I am a student at the <span className="text-accent font-semibold">University of North Carolina at Chapel Hill</span> pursuing a double major in computer science and business.
                            </p>
                            <p className="text-base sm:text-lg leading-relaxed text-card-foreground">
                                Feel free to connect with me through any of the platforms below!
                            </p>
                        </div>
                    </section>

                    <section className="fade-in-delayed">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Let&apos;s Connect</h2>
                            <p className="text-muted text-lg leading-relaxed">
                                Reach out to me on any of these platforms
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                            {socialLinks.map((social, index) => (
                                <Link 
                                    key={social.label}
                                    href={social.href} 
                                    target="_blank"
                                    className="group bg-card/80 border border-border rounded-2xl p-5 sm:p-6 hover:border-accent transition-all duration-300 card-hover backdrop-blur-sm hover:bg-card/90 min-w-[120px]"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-background/50 group-hover:bg-accent/10 transition-colors duration-300">
                                            <Image
                                                src={social.icon}
                                                alt={social.alt}
                                                width={24}
                                                height={24}
                                                className="group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <span className="text-sm font-medium text-muted group-hover:text-accent transition-colors text-center">
                                            {social.label}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="fade-in-delayed-2">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl font-semibold mb-4 text-foreground">Life Moments</h2>
                            <p className="text-muted text-lg leading-relaxed">
                                A glimpse into my world beyond code
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-6 left-6 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        {photo.caption}
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