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
    <div className="flex gap-2 fixed top-10 right-10">
      <p>[S]</p>
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