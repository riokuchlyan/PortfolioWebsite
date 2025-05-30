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
        <div className="fade-in min-h-screen p-8 sm:p-20 font-sans">
            <ThemeSwitcher/> 
            <HomeButton/>

            <main className="max-w-4xl mx-auto pt-24">
                <header className="text-center mb-16 fade-in-delayed">
                    <h1 className="mb-6 mt-32">ABOUT ME</h1>
                </header>

                <div className="space-y-16">

                    <section className="fade-in-delayed">
                        <div className="bg-card border border-border rounded-2xl p-8 card-hover">
                            <p className="text-lg leading-relaxed text-card-foreground mb-6">
                                Hello! My name is <span className="text-accent font-medium">Rio Kuchlyan</span> and I am a developer focusing on the technology and finance industries.
                            </p>
                            <p className="text-lg leading-relaxed text-card-foreground mb-6">
                                I am a student at the <span className="text-accent font-medium">University of North Carolina at Chapel Hill</span> pursuing a double major in computer science and business.
                            </p>
                            <p className="text-lg leading-relaxed text-card-foreground">
                                Feel free to connect with me through any of the platforms below!
                            </p>
                        </div>
                    </section>

                    <section className="fade-in-delayed">
                        <div className="text-center mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-foreground">Let&apos;s Connect</h2>
                            <p className="text-muted">
                                Reach out to me on any of these platforms
                            </p>
                        </div>
                        
                        <div className="flex justify-center gap-6">
                            {socialLinks.map((social, index) => (
                                <Link 
                                    key={social.label}
                                    href={social.href} 
                                    target="_blank"
                                    className="group bg-card border border-border rounded-xl p-4 hover:border-accent transition-all duration-200 card-hover"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <Image
                                            src={social.icon}
                                            alt={social.alt}
                                            width={32}
                                            height={32}
                                            className="group-hover:scale-110 transition-transform duration-200"
                                        />
                                        <span className="text-xs text-muted group-hover:text-accent transition-colors">
                                            {social.label}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    <section className="fade-in-delayed-2">
                        <div className="text-center mb-12">
                            <h2 className="text-xl font-semibold mb-4 text-foreground">Life Moments</h2>
                            <p className="text-muted">
                                A glimpse into my world beyond code
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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