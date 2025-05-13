'use client';
import React, { useEffect } from 'react';
import '../animations.css'; 
import Link from "next/link";
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import HomeButton from '../../components/HomeButton';
import { validateTheme } from '../../utils/validateTheme';

export default function Projects() {
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

      <div className="flex flex-col row-start-2 items-center text-center max-w-[70%] mt-48">
          <h1>PROJECTS</h1>
          <p className="mb-8">Here are some of my projects:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Link href="https://visualize-navy.vercel.app" target="_blank" className="w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                  VisuAlize
                </Link>
                <Link href="https://github.com/riokuchlyan/passwordManager" target="_blank" className="w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                  Password Manager
                </Link>
                <Link href="https://github.com/riokuchlyan/rios-portfolio" target="_blank" className="w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                  My Portfolio
                </Link>
                <Link href="https://replit.com/@riokuchlyan/Battleship" target="_blank" className="w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                  Battleship
                </Link>
                <Link href="https://github.com/riokuchlyan/clipboardManager" target="_blank" className="w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                  Clipboard Manager
                </Link>
                <Link href="https://github.com/riokuchlyan/dog-adoption" target="_blank" className="w-full h-32 bg-gray-200 dark:bg-gray-600 rounded-lg shadow-md flex items-center justify-center text-lg font-semibold hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-500 transition">
                  Dog Adoption Website
                </Link>
              </div>

      </div>
      
  </div>
);
}