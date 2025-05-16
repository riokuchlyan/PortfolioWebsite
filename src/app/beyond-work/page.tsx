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

    return (
        <div className="fade-in grid items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

        <ThemeSwitcher/>

        <HomeButton/>

        <div className="flex flex-col gap-4 row-start-2 items-center text-center max-w-[70%] mb-8">
            <h1 className='mt-64'>BEYOND WORK</h1>
            <h2 className='text-2xl'>Countries Visited</h2>
            <video controls preload="auto">
                <source src="/visited_places.mp4" type="video/mp4"/>
            </video>

            <h2 className='text-2xl mt-10'>Photos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-[90%] mt-5 row-start-3 items-center">
            
            <Image
                className="rounded-lg"
                src="/beyond_work1.jpeg"
                alt="Beyond Work"
                width={400}
                height={300}
            />
            <Image
                className="rounded-lg"
                src="/beyond_work2.jpeg"
                alt="Beyond Work"
                width={400}
                height={300}
            />
            <Image
                className="rounded-lg"
                src="/beyond_work3.jpeg"
                alt="Beyond Work"
                width={400}
                height={300}
            />
            <Image
                className="rounded-lg"
                src="/beyond_work4.jpeg"
                alt="Beyond Work"
                width={400}
                height={300}
            />
        </div>
        </div>
        
    </div>
);
}