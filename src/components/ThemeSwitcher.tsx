import React, { useEffect, useState } from 'react';
import { changeTheme } from '@/utils/changeTheme';
import { getColorScheme } from '@/utils/theme';

const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  
  useEffect(() => {
    const updateTheme = () => {
      setCurrentTheme(getColorScheme());
    };
    
    updateTheme();
    
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isTyping = target.tagName === 'INPUT' || 
                      target.tagName === 'TEXTAREA' || 
                      target.isContentEditable ||
                      target.closest('input') ||
                      target.closest('textarea');
      
      if (e.key.toLowerCase() === 's' && !isTyping) {
        changeTheme();
        updateTheme();
      }
    };
    
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);
  
  const handleThemeChange = () => {
    changeTheme();
    setCurrentTheme(getColorScheme());
  };

  const getThemeLabel = () => {
    return currentTheme === 'light' ? 'Light' : 'Dark';
  };
  
  return (
    <div>
      <div className="flex items-center gap-3 bg-card/90 border border-border rounded-2xl px-4 py-3 shadow-lg backdrop-blur-md hover:shadow-xl transition-all duration-300 hover:scale-105 group hover:bg-card">
        <button 
          onClick={handleThemeChange}
          className="flex items-center justify-center w-8 h-8 rounded-xl bg-background/50 border border-border hover:border-accent transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95 hover:bg-accent/10 group-hover:border-accent"
          aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} theme`}
          title={`Current: ${getThemeLabel()} • Click to switch`}
        >
          <span className="text-base group-hover:scale-110 transition-transform duration-300">
            [S]
          </span>
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher; 