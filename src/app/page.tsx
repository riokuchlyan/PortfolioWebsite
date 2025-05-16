'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from 'react';
import './/animations.css'; 
import { useKeyboardNavigation } from '../hooks/KeyPressNavigation';
import ThemeSwitcher from "../components/ThemeSwitcher";
import { validateTheme } from "@/utils/validateTheme";

export default function Home() {
  useKeyboardNavigation({ key: '1', href: '/about-me' });
  useKeyboardNavigation({ key: '2', href: '/projects' });
  useKeyboardNavigation({ key: '3', href: '/experience' });
  useKeyboardNavigation({ key: '4', href: '/beyond-work' });

  useEffect(() => {
    validateTheme();
  }, []);
  
  return (
    <div className="fade-in grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <ThemeSwitcher/>

      <div className="flex flex-col gap-4 row-start-2 items-center text-center max-w-[70%]">
        <Image
          id='bird'
          className="animate-bounce"
          src="/bird.svg"
          alt="bird"
          width={50}
          height={50}
        />

        <div className="flex flex-col gap-2 items-center">
          <h1 className="mb-0 pb-0">RIO KUCHLYAN</h1>
          <h2 className="mt-0 pt-0 text-gray-500">&#128205; New York City Metropolitan Area & Chapel Hill, NC</h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 justify-center w-full mt-5 row-start-3 items-center">
          <Link href="/about-me"><code>[1] About Me</code></Link>
          <Link href="/projects"><code>[2] Projects</code></Link>
          <Link href="/experience"><code>[3] Experience</code></Link>
          <Link href="/beyond-work"><code>[4] Beyond Work</code></Link>
        </div>
        
      </div>
      
    </div>
  );
}
