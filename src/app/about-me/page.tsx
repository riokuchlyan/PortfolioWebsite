'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import '../animations.css'; 
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import HomeButton from '../../components/HomeButton';

export default function AboutMe() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    useKeyboardNavigation({ key: '1', href: '/about-me' });
    useKeyboardNavigation({ key: '2', href: '/projects' });
    useKeyboardNavigation({ key: '3', href: '/experience' });
    useKeyboardNavigation({ key: '4', href: '/beyond-work' });
    return (
        <div className="fade-in grid items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <ThemeSwitcher/> 

        <HomeButton/>

            <div className="flex flex-col gap-4 row-start-2 items-center text-center max-w-[70%]">
                <h1 className='mt-64'>ABOUT ME</h1>
                <p className="mb-8">Hello! My name is Rio Kuchlyan and I am an aspiring developer who intends to work in the technology and banking industries. I am a student at the University of North Carolina at Chapel Hill pursuing a double major in computer science and business. Feel free to contact me through any of my socials in this page!</p>
                    
                    <div className="flex gap-4 mb-8">
                        <Link href="https://www.linkedin.com/in/riokuchlyan" target="_blank">
                            <Image
                            src="/linkedin_logo.png"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                            />
                        </Link>
                        <Link href="mailto:rio.kuchlyan@unc.edu" target="_blank">
                            <Image
                            src="/mail_logo.png"
                            alt="Email"
                            width={40}
                            height={40}
                            />
                        </Link>
                        <Link href="https://www.instagram.com/rio.kuchlyan/" target="_blank">
                            <Image
                            src="/instagram_logo.png"
                            alt="Instagram"
                            width={40}
                            height={40}
                            />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-[90%] mt-5 row-start-3 items-center">
                        <Image
                            className="rounded-lg"
                            src="/family_photo.jpeg"
                            alt="Family"
                            width={400}
                            height={300}
                        />
                        <Image
                            className="rounded-lg"
                            src="/greece-photo.png"
                            alt="Greece"
                            width={400}
                            height={300}
                        />
                        <Image
                            className="rounded-lg"
                            src="/tower-photo.png"
                            alt="Tower"
                            width={400}
                            height={300}
                        />
                        <Image
                            className="rounded-lg"
                            src="/stadium-photo.jpeg"
                            alt="Stadium"
                            width={400}
                            height={300}
                        />
                    </div>
                    
            </div>
            
        </div>
);
}