'use client';
import React, { useEffect } from 'react';
import '../animations.css'; 
import Link from "next/link";
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import HomeButton from '../../components/HomeButton';
import { validateTheme } from '../../utils/validateTheme';
import {Card, CardHeader, CardBody, Image} from "@heroui/react";

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

      <div className="flex flex-col row-start-2 items-center text-center max-w-[70%] mt-64">
          <h1>PROJECTS</h1>

              <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12 mt-8">

              <div className='bg-gray-800 rounded-lg p-4 mb-4'>
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Link id="pConstantColor" href="https://visualize-navy.vercel.app" target="_blank" className="text-tiny font-bold"> 
                  VisuAlize
                </Link>
                    <small id="pConstantColor" className="text-default-500">React, FastAPI, Supabase</small>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="visualize.png"
                      width={270}
                      height={177}
                    />
                  </CardBody>
                </Card>
                </div>

                <div className='bg-gray-800 rounded-lg p-4 mb-4'>
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Link id="pConstantColor" href="https://github.com/riokuchlyan/passwordManager" target="_blank" className="text-tiny font-bold"> 
                  Password Manager
                </Link>
                    <small id="pConstantColor" className="text-default-500">React, FastAPI, Supabase</small>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="password_manager.png"
                      width={270}
                      height={177}
                    />
                  </CardBody>
                </Card>
                </div>

                <div className='bg-gray-800 rounded-lg p-4 mb-4'>
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Link id="pConstantColor" href="https://github.com/riokuchlyan/rios-portfolio" target="_blank" className="text-tiny font-bold"> 
                  Portfolio
                </Link>
                    <small id="pConstantColor" className="text-default-500">React, FastAPI, Supabase</small>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="portfolio.png"
                      width={270}
                      height={177}
                    />
                  </CardBody>
                </Card>
                </div>

                <div className='bg-gray-800 rounded-lg p-4 mb-4'>
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Link id="pConstantColor" href="https://replit.com/@riokuchlyan/Battleship" target="_blank" className="text-tiny font-bold"> 
                  Battleship
                </Link>
                    <small id="pConstantColor" className="text-default-500">React, FastAPI, Supabase</small>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="battleship.png"
                      width={270}
                      height={177}
                    />
                  </CardBody>
                </Card>
                </div>

                <div className='bg-gray-800 rounded-lg p-4 mb-4'>
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Link id="pConstantColor" href="https://github.com/riokuchlyan/clipboardManager" target="_blank" className="text-tiny font-bold"> 
                  Clipboard Manager
                </Link>
                    <small id="pConstantColor" className="text-default-500">React, FastAPI, Supabase</small>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="clipboard_manager.png"
                      width={270}
                      height={177}
                    />
                  </CardBody>
                </Card>
                </div>

                <div className='bg-gray-800 rounded-lg p-4 mb-4'>
                <Card className="py-4">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Link id="pConstantColor" href="https://github.com/riokuchlyan/dog-adoption" target="_blank" className="text-tiny font-bold"> 
                  Dog Adoption Website
                </Link>
                    <small id="pConstantColor" className="text-default-500">React, FastAPI, Supabase</small>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl"
                      src="dog-adoption.png"
                      width={270}
                      height={177}
                    />
                  </CardBody>
                </Card>
                </div>
              </div>
              
      </div>
      
  </div>
);
}