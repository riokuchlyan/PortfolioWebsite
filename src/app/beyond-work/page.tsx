'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import '../animations.css'; 
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";

export default function BeyondWork() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    useKeyboardNavigation({ key: '1', href: '/about-me' });
    useKeyboardNavigation({ key: '2', href: '/projects' });
    useKeyboardNavigation({ key: '3', href: '/experience' });
    useKeyboardNavigation({ key: '4', href: '/beyond-work' });
    return (
        <div className="fade-in grid items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

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
            <h1>BEYOND WORK</h1>
            <p>Here are some of the places I have visited in the past few years.</p>
            <video controls preload="auto">
                <source src="/visited_places.mp4" type="video/mp4"/>
            </video>
        </div>
 
    </div>
);
}