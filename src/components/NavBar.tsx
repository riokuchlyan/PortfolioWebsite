'use client';
import React from 'react';
import ResumeButton from './ResumeButton';
import ThemeSwitcher from './ThemeSwitcher';
import SocialsButton from './SocialsButton';

const NavBar: React.FC = () => {
  return (
    <nav className="fixed top-6 right-6 z-[9999] flex items-center gap-3 sm:gap-3 gap-2 scale-75 sm:scale-100 origin-top-right">
      <SocialsButton />
      <ResumeButton />
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
