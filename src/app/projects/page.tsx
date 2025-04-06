'use client';
import React from 'react';
import '../animations.css'; 
import Link from "next/link";
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import HomeButton from '../../components/HomeButton';

export default function Projects() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    useKeyboardNavigation({ key: '1', href: '/about-me' });
    useKeyboardNavigation({ key: '2', href: '/projects' });
    useKeyboardNavigation({ key: '3', href: '/experience' });
    useKeyboardNavigation({ key: '4', href: '/beyond-work' });
    return (
      <div className="fade-in grid items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <ThemeSwitcher/>

      <HomeButton/>

      <div className="flex flex-col row-start-2 items-center text-center max-w-[70%]">
          <h1>PROJECTS</h1>
          <p className="mb-8">Here are some of my projects:</p>
              
              <div className="flex flex-wrap mb-12">
                  
                    <Link href={`https://visualize-navy.vercel.app`} target="_blank" className="w-24 h-24 bg-gray-500 m-2 flex items-center justify-center">
                      VisuAlize
                      </Link>
                    <Link href={`https://github.com/riokuchlyan/passwordManager`} target="_blank" className="w-24 h-24 bg-gray-500 m-2 flex items-center justify-center">
                      Password Manager
                    </Link>
                    <Link href={`https://github.com/riokuchlyan/rios-portfolio`} target="_blank" className="w-24 h-24 bg-gray-500 m-2 flex items-center justify-center">
                      My Portfolio
                    </Link>
                    <Link href={`https://replit.com/@riokuchlyan/Battleship`} target="_blank" className="w-24 h-24 bg-gray-500 m-2 flex items-center justify-center">
                      Battleship
                    </Link>
                    <Link href={`https://github.com/riokuchlyan/clipboardManager`} target="_blank" className="w-24 h-24 bg-gray-500 m-2 flex items-center justify-center">
                      Clipboard Manager
                    </Link>
                    <Link href={`https://github.com/riokuchlyan/dog-adoption`} target="_blank" className="w-24 h-24 bg-gray-500 m-2 flex items-center justify-center">
                      Dog Adoption Website
                    </Link>
              </div>

      </div>
      
  </div>
);
}