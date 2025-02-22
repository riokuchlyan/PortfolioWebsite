'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import '../animations.css'; 
import { useKeyboardNavigation } from '../../components/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";

export default function AboutMe() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    return (
        <div className="fade-in grid items-center justify-items-center min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <ThemeSwitcher/>

            <div className="flex gap-2 fixed top-10 left-10">
                <Link href="/">
                    <Image
                    src="/house.svg"
                    alt="Home"
                    width={20}
                    height={20}
                    />
                </Link>
                <p>[H]</p>
            </div>

            <div className="flex flex-col gap-4 row-start-2 items-center text-center max-w-[70%]">
                <h1>ABOUT ME</h1>
                <p>Hello! My name is Rio Kuchlyan and I am an aspiring developer who intends to work in the technology and banking industries. I am a student at the University of North Carolina at Chapel Hill pursuing a double major in computer science and business. Feel free to contact me through any of my socials in this page!</p>
                    <br></br>
                    <br></br>
                    <div className="flex gap-4">
                        <Link href="https://www.linkedin.com/in/riokuchlyan">
                            <Image
                            src="/linkedin_logo.png"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                            />
                        </Link>
                        <Link href="mailto:rio.kuchlyan@unc.edu">
                            <Image
                            src="/mail_logo.png"
                            alt="Email"
                            width={40}
                            height={40}
                            />
                        </Link>
                        <Link href="https://www.instagram.com/rio.kuchlyan/">
                            <Image
                            src="/instagram_logo.png"
                            alt="Instagram"
                            width={40}
                            height={40}
                            />
                        </Link>
                    </div>
            </div>
            
        </div>
);
}