import React from 'react';
import Image from "next/image";

let color_scheme = "dark";
const ThemeSwitcher: React.FC = () => {
  const changeTheme = () => {
    if (color_scheme == "dark") {
        color_scheme = "light";
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
        color_scheme = "dark";
        const root = document.documentElement;
        root.style.setProperty('--background', '#1a1a1a');
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