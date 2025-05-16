import React from 'react';
import Image from "next/image";
import { getColorScheme, setColorScheme } from '../utils/theme';
import { validateTheme } from "@/utils/validateTheme";

const ThemeSwitcher: React.FC = () => {
  const changeTheme = () => {
    if (getColorScheme() == "dark") {
        setColorScheme("light");
        const root = document.documentElement;
        root.style.setProperty('--background', 'rgb(199, 199, 199)');
        root.style.setProperty('--foreground', '#1a1a1a');
        const sun = document.getElementById('sun');
        if (sun) {
          sun.style.filter = "brightness(0%)";
        }
        const house = document.getElementById('house');
        if (house) {
          house.style.filter = "brightness(0%)";
        }
        const bird = document.getElementById('bird');
        if (bird) {
          bird.style.filter = "brightness(0%)";
        }
    }
    else {
        setColorScheme("dark");
        const root = document.documentElement;
        root.style.setProperty('--background', '#111111');
        root.style.setProperty('--foreground', 'rgb(199, 199, 199)');
        const sun = document.getElementById('sun');
        if (sun) {
          sun.style.filter = "brightness(100%)";
        }
        const house = document.getElementById('house');
        if (house) {
          house.style.filter = "brightness(100%)";
        }
        const bird = document.getElementById('bird');
        if (bird) {
          bird.style.filter = "brightness(100%)";
        }
    }
  };

  return (
    <div className="flex gap-2 fixed top-10 right-10">
          <button onClick={changeTheme}>
              <Image 
              id='sun'
              src="/sun.max.png"
              alt="Sun"
              width={20}
              height={20}
          />
          </button>
        </div>
  );
};

export default ThemeSwitcher; 