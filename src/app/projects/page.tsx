'use client';

import React from 'react';
import '../animations.css'; 
import Image from "next/image";
import Link from "next/link";
import { useKeyboardNavigation } from '../keyPressNavigation';

export default function Projects() {
    useKeyboardNavigation({ key: 'h', href: '/' });
    return (
      <div className="fade-in grid items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="flex gap-2 fixed top-10 right-10">
          <Link href="/about-me">
              <Image
              src="/sun.max.png"
              alt="Sun"
              width={20}
              height={20}
          />
          </Link>
          <Link className="hidden" href="/about-me">
              <Image
              src="/moon.png"
              alt="Moon"
              width={20}
              height={20}
          />
          </Link>
          <p>[A]</p>
      </div>

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
                  
                    <Link href={`/project/}`} className="w-24 h-24 bg-gray-400 m-2 flex items-center justify-center">
                      Project {1}
                    </Link>
                    <Link href={`/project/}`} className="w-24 h-24 bg-gray-400 m-2 flex items-center justify-center">
                      Project {1}
                    </Link>
                    <Link href={`/project/}`} className="w-24 h-24 bg-gray-400 m-2 flex items-center justify-center">
                      Project {1}
                    </Link>
                    <Link href={`/project/}`} className="w-24 h-24 bg-gray-400 m-2 flex items-center justify-center">
                      Project {1}
                    </Link>
                    <Link href={`/project/}`} className="w-24 h-24 bg-gray-400 m-2 flex items-center justify-center">
                      Project {1}
                    </Link>
                    <Link href={`/project/}`} className="w-24 h-24 bg-gray-400 m-2 flex items-center justify-center">
                      Project {1}
                    </Link>
                    <Link href={`/project/}`} className="w-24 h-24 bg-gray-400 m-2 flex items-center justify-center">
                      Project {1}
                    </Link>
                    <Link href={`/project/}`} className="w-24 h-24 bg-gray-400 m-2 flex items-center justify-center">
                      Project {1}
                    </Link>
                    
              </div>
      </div>
  </div>
);
}