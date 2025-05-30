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
            <Link className="bg-accent text-white py-2 px-4 rounded-md mb-8 hover:bg-accent/90 transition-colors" target="_blank" href="/rio_kuchlyan_resume.pdf">
                View My Resume
            </Link>

            <div className="w-full mb-4 text-left">
              <h2 className="text-2xl font-bold mb-2 text-foreground">Education</h2>
              <div className="bg-card border border-border rounded-lg p-4 mb-4">
                <p className="font-semibold text-card-foreground">University of North Carolina at Chapel Hill</p>
                <p className="text-card-foreground">Bachelor of Science in Computer Science, Pre-Business Studies</p>
                <p className="text-card-foreground">Major GPA: 4.0</p>
                <p className="text-sm text-muted">Visual Computing and AI Lab, Scholars of Finance, TechX</p>
                <p className="text-sm text-muted">Chapel Hill, NC | Aug. 2024 – May 2028</p>
              </div>
            </div>

            <div className="w-full mb-4 text-left">
              <h2 className="text-2xl font-bold mb-2 text-foreground">Work Experience</h2>

              <div className="bg-card border border-border rounded-lg p-4 mb-4">
                <p className="font-semibold text-card-foreground">Backend Developer - Equities/Capital Markets Intern</p>
                <p className="text-sm text-muted">Swing Phi (Remote) | Apr. 2025 – Present</p>
                <ul className="list-disc ml-6 text-left">
                  <li className="text-card-foreground">Building trading infrastructure leveraging proprietary algorithms for real-time equity analysis and execution</li>
                  <li className="text-card-foreground">Engineering equities data backend with scalable models using modern frameworks and data storage systems</li>
                  <li className="text-card-foreground">Designing APIs for real-time ingestion and transformation of equities market data for internal systems</li>
                  <li className="text-card-foreground">Optimizing trading data services by refining performance, reliability, and modular backend architecture</li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-4 mb-4">
                <p className="font-semibold text-card-foreground">Instructor</p>
                <p className="text-sm text-muted">Prep Expert (Remote) | Aug. 2024 – Present</p>
                <ul className="list-disc ml-6 text-left">
                  <li className="text-card-foreground">Top 1% SAT tutor specializing in coaching students for the SAT and multiple AP exams including AP Physics C</li>
                  <li className="text-card-foreground">Providing individual and class tutoring to groups of 15-50 high school students throughout the United States</li>
                  <li className="text-card-foreground">Advising on tutoring operations and strategy at a Shark Tank-funded edtech firm backed by Mark Cuban</li>
                </ul>
              </div>
              
            </div>

            <div className="w-full mb-4 text-left">
              <h2 className="text-2xl font-bold mb-2 text-foreground">Academic Experience</h2>

              <div className="bg-card border border-border rounded-lg p-4 mb-4">
                <p className="font-semibold text-card-foreground">Extended Reality Developer</p>
                <p className="text-sm text-muted">Carolina AR/VR, Chapel Hill, NC | Feb. 2025 – Present</p>
                <ul className="list-disc ml-6 text-left">
                  <li className="text-card-foreground">Building a VR music collaboration tool enabling interactive audio feedback in shared spatial environments</li>
                  <li className="text-card-foreground">Streamlining UI components and code execution in Unity to enhance immersion and reduce visual latency</li>
                  <li className="text-card-foreground">Implemented music import features in VR apps using Unity, MIDI Toolkit, and Koreographer</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-4 mb-4">
                <p className="font-semibold text-card-foreground">Representative</p>
                <p className="text-sm text-muted">Hillsborough Township Board of Education (BOE), Hillsborough, NJ | Aug. 2023 – Aug. 2024</p>
                <ul className="list-disc ml-6 text-left">
                  <li className="text-card-foreground">Acted as liaison between student councils and Board to communicate and resolve key student concerns</li>
                  <li className="text-card-foreground">Delivered concerns regarding student welfare, contributing to the BOE voting on 10+ policies bi-weekly</li>
                  <li className="text-card-foreground">Consulted the BOE on questions regarding funding for alarms compared to faculty for bathroom monitoring</li>
                  <li className="text-card-foreground">Facilitated the implementation of alarm systems and computer sign-ins to reduce bathroom vandalism by over 20%</li>
                </ul>
              </div>

            </div>

        </div>
        
    </div>
);
}