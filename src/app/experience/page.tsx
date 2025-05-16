'use client';
import React, { useEffect } from 'react';
import Link from "next/link";
import '../animations.css'; 
import { useKeyboardNavigation } from '../../hooks/KeyPressNavigation';
import ThemeSwitcher from "../../components/ThemeSwitcher";
import HomeButton from '../../components/HomeButton';
import { validateTheme } from '../../utils/validateTheme';

export default function Experience() {
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

        <div className="flex flex-col gap-4 row-start-2 items-center text-center max-w-[70%]">
            <h1 className='mt-64'>EXPERIENCE</h1>
            <Link className="bg-gray-800 text-white py-2 px-4 rounded-md mb-8" target="_blank" href="/rio_kuchlyan_resume.pdf">
                View My Resume
            </Link>

            <div className="w-full mb-4 text-left">
              <h2 className="text-2xl font-bold mb-2">Education</h2>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p id="pConstantColor" className="font-semibold">University of North Carolina at Chapel Hill</p>
                <p id="pConstantColor" >Bachelor of Science in Computer Science, Pre-Business Studies</p>
                <p id="pConstantColor">Major GPA: 4.0</p>
                <p id="pConstantColor" className="text-sm text-gray-500">Visual Computing and AI Lab, Scholars of Finance, TechX</p>
                <p id="pConstantColor" className="text-sm text-gray-500">Chapel Hill, NC | Aug. 2024 – May 2028</p>
              </div>
            </div>

            <div className="w-full mb-4 text-left">
              <h2 className="text-2xl font-bold mb-2">Work Experience</h2>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p id="pConstantColor" className="font-semibold">Backend Developer - Equities/Capital Markets Intern</p>
                <p id="pConstantColor" className="text-sm text-gray-500">Swing Phi (Remote) | Apr. 2025 – Present</p>
                <ul className="list-disc ml-6 text-left">
                  <li>Building trading infrastructure leveraging proprietary algorithms for real-time equity analysis and execution</li>
                  <li>Engineering equities data backend with scalable models using modern frameworks and data storage systems</li>
                  <li>Designing APIs for real-time ingestion and transformation of equities market data for internal systems</li>
                  <li>Optimizing trading data services by refining performance, reliability, and modular backend architecture</li>
                </ul>
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p id="pConstantColor" className="font-semibold">Instructor</p>
                <p id="pConstantColor" className="text-sm text-gray-500">Prep Expert (Remote) | Aug. 2024 – Present</p>
                <ul className="list-disc ml-6 text-left">
                  <li>Top 1% SAT tutor specializing in coaching students for the SAT and multiple AP exams including AP Physics C</li>
                  <li>Providing individual and class tutoring to groups of 15-50 high school students throughout the United States</li>
                  <li>Advising on tutoring operations and strategy at a Shark Tank-funded edtech firm backed by Mark Cuban</li>
                </ul>
              </div>
              
            </div>

            <div className="w-full mb-4 text-left">
              <h2 className="text-2xl font-bold mb-2">Academic Experience</h2>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p id="pConstantColor" className="font-semibold">Extended Reality Developer</p>
                <p id="pConstantColor" className="text-sm text-gray-500">Carolina AR/VR, Chapel Hill, NC | Feb. 2025 – Present</p>
                <ul className="list-disc ml-6 text-left">
                  <li>Building a VR music collaboration tool enabling interactive audio feedback in shared spatial environments</li>
                  <li>Streamlining UI components and code execution in Unity to enhance immersion and reduce visual latency</li>
                  <li>Implemented music import features in VR apps using Unity, MIDI Toolkit, and Koreographer</li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p id="pConstantColor" className="font-semibold">Representative</p>
                <p id="pConstantColor" className="text-sm text-gray-500">Hillsborough Township Board of Education (BOE), Hillsborough, NJ | Aug. 2023 – Aug. 2024</p>
                <ul className="list-disc ml-6 text-left">
                  <li>Acted as liaison between student councils and Board to communicate and resolve key student concerns</li>
                  <li>Delivered concerns regarding student welfare, contributing to the BOE voting on 10+ policies bi-weekly</li>
                  <li>Consulted the BOE on questions regarding funding for alarms compared to faculty for bathroom monitoring</li>
                  <li>Facilitated the implementation of alarm systems and computer sign-ins to reduce bathroom vandalism by over 20%</li>
                </ul>
              </div>

            </div>

        </div>
        
    </div>
);
}