'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import './/animations.css'; 
import { useKeyboardNavigation } from '../hooks/KeyPressNavigation';
import ThemeSwitcher from "../components/ThemeSwitcher";
import { validateTheme } from "@/utils/validateTheme";
import ChatBot from '../components/ChatBot';

export default function Home() {
  useKeyboardNavigation({ key: '1', href: '/about-me' });
  useKeyboardNavigation({ key: '2', href: '/projects' });
  useKeyboardNavigation({ key: '3', href: '/experience' });
  useKeyboardNavigation({ key: '4', href: '/beyond-work' });

  useEffect(() => {
    validateTheme();
  }, []);
  
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fade-in min-h-screen flex flex-col font-sans relative">
      
      <ThemeSwitcher/>

      <main className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-8 pt-32 pb-8">
        <div className="fade-in-delayed flex flex-col items-center space-y-8 mb-8">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="hover-lift cursor-pointer"
          >
            <Image
              id='memoji'
              className={`rounded-full transition-all duration-500 ${hovered ? 'scale-110 shadow-2xl' : 'shadow-lg'}`}
              src={hovered ? "/headshot.jpg" : "/memoji.png"}
              alt="picture of me"
              width={120}
              height={120}
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="tracking-tight text-foreground">RIO KUCHLYAN</h1>
            <h2 className="text-muted flex items-center justify-center gap-2">
              <span className="text-lg">📍</span>
              New York City Metropolitan Area & Chapel Hill, NC
            </h2>
          </div>
        </div>

        <nav className="fade-in-delayed-2 w-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center max-w-4xl mx-auto">
            <Link 
              href="/about-me" 
              className="group inline-block w-full md:w-auto text-center"
            >
              <code className="inline-block px-4 py-2 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 hover:scale-105">
                [1] About Me
              </code>
            </Link>
            
            <Link 
              href="/projects" 
              className="group inline-block w-full md:w-auto text-center"
            >
              <code className="inline-block px-4 py-2 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 hover:scale-105">
                [2] Projects
              </code>
            </Link>
            
            <Link 
              href="/experience" 
              className="group inline-block w-full md:w-auto text-center"
            >
              <code className="inline-block px-4 py-2 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 hover:scale-105">
                [3] Experience
              </code>
            </Link>
            
            <Link 
              href="/beyond-work" 
              className="group inline-block w-full md:w-auto text-center"
            >
              <code className="inline-block px-4 py-2 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 hover:scale-105">
                [4] Beyond Work
              </code>
            </Link>
          </div>
        </nav>
      </main>

      <div className="fade-in-delayed-2 pb-8 px-8 flex justify-center">
        <ChatBot/>
      </div>
    </div>
  );
}
