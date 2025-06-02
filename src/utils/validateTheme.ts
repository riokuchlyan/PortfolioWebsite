import { applyTheme } from './changeTheme';

export function validateTheme() {

    applyTheme();
    
    if (typeof window !== 'undefined') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            const currentTheme = localStorage.getItem('theme');
            if (!currentTheme || currentTheme === 'system') {
                applyTheme();
            }
        };
        
        mediaQuery.addEventListener('change', handleChange);
        
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }
}