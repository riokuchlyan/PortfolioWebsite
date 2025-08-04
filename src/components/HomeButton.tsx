import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useKeyboardNavigation } from '../hooks/KeyPressNavigation';

const HomeButton: React.FC = () => {
  const pathname = usePathname();
  useKeyboardNavigation({ key: 'h', href: '/' });

  if (pathname === '/') {
    return null;
  }

  return (
    <div className="fixed top-6 left-6 z-[9999] scale-75 sm:scale-100 origin-top-left">
      <Link 
        href="/" 
        className="flex items-center gap-3 bg-card/90 border border-border rounded-2xl px-4 py-3 shadow-lg backdrop-blur-md hover:shadow-xl transition-all duration-300 hover:scale-105 group hover:bg-card"
      >
        <span className="text-sm font-mono text-muted/80 font-medium tracking-wide group-hover:text-accent transition-colors">[H]</span>
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-background/50 border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95 hover:bg-accent/10 group-hover:border-accent">
          <svg 
            className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-all duration-300 text-muted group-hover:text-accent" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default HomeButton;