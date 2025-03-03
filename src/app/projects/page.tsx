'use client';

import React from 'react';
import '../animations.css'; 
import Image from "next/image";
import Link from "next/link";
import { useKeyboardNavigation } from '../../components/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";

export default function Projects() {
    useKeyboardNavigation({ key: 'h', href: '/' });
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

      <div className="flex flex-col row-start-2 items-center text-center max-w-[70%]">
          <h1>PROJECTS</h1>
          <p>Here are some of my projects:</p>
              <br></br>
              <br></br>
              <div className="flex flex-wrap">
                  
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
              </div>
              <br/>
              <br/>
              <br/>
      </div>
      
  </div>
);
}