'use client';
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import './/animations.css'; 
import { useKeyboardNavigation } from '../components/KeyPressNavigation';
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Home() {
  useKeyboardNavigation({ key: '1', href: '/about-me' });
  useKeyboardNavigation({ key: '2', href: '/projects' });
  useKeyboardNavigation({ key: '3', href: '/experience' });
  useKeyboardNavigation({ key: '4', href: '/beyond-work' });
  return (
    <div className="fade-in grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <ThemeSwitcher/>

      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          src="/bird.svg"
          alt="bird"
          width={50}
          height={50}
        />
        <h1>RIO KUCHLYAN</h1>
      </main>
      
      <div className="flex flex-col sm:flex-row gap-8 justify-center w-full row-start-3 items-center mb-96 mt-24">
          <Link href="/about-me"><code>[1] About Me</code></Link>
          <Link href="/projects"><code>[2] Projects</code></Link>
          <Link href="/experience"><code>[3] Experience</code></Link>
          <Link href="/beyond-work"><code>[4] Beyond Work</code></Link>
      </div>

    </div>
  );
}
