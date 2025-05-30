import React, { useEffect } from 'react';
import Image from "next/image";
import { changeTheme } from '@/utils/changeTheme';

const ThemeSwitcher: React.FC = () => {
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 's') changeTheme();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
  
  return (
    <div className="fixed top-8 right-8 z-50 flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm">
      <span className="text-sm font-mono text-muted">[S]</span>
      <button 
        onClick={changeTheme}
        className="flex items-center justify-center w-8 h-8 rounded-lg bg-background border border-border hover:border-accent transition-all duration-200 hover:scale-110 hover:shadow-md"
        aria-label="Toggle theme"
      >
        <Image 
          id='sun'
          src="/sun.max.png"
          alt="Toggle theme"
          width={16}
          height={16}
          className="opacity-70 hover:opacity-100 transition-opacity"
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher; 