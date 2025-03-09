'use client';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import '../animations.css'; 
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";

export default function Experience() {
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
            <h1>EXPERIENCE</h1>
            <Link className="bg-gray-800 text-white py-2 px-4 rounded-md" target="_blank" href="/rio_kuchlyan_resume.pdf">
                View My Resume
            </Link>
            <br></br>
            <strong>University of North Carolina at Chapel Hill</strong>
            <p>Freshman majoring in Computer Science and Business.</p>

            <strong>CARVR - AR/VR Development Team</strong>
            <p>Working on the development of a VR meditation app and a VR music band app.</p>

            <strong>Scholars of Finance - Leadership Development Program</strong>
            <p>Learning technical finance skills and leadership principles to develop strong ethical finance leaders.</p>

            <strong>Educational Consulting - Hillsborough Township Board of Education</strong>
            <p>Represented 7,200 students and advised on funding allocations, including security improvements in schools.</p>
        </div>
        
    </div>
);
}