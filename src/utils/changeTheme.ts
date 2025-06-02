import { getColorScheme, setColorScheme, getEffectiveTheme } from '../utils/theme';

export function changeTheme() {
    const currentTheme = getColorScheme();
    let nextTheme: 'dark' | 'light';
    
    if (currentTheme === 'light') {
        nextTheme = 'dark';
    } else {
        nextTheme = 'light';
    }
    
    setColorScheme(nextTheme);
    applyTheme();
}

export function applyTheme() {
    if (typeof window === 'undefined') return;
    
    const effectiveTheme = getEffectiveTheme();
    const root = document.documentElement;
    
    root.removeAttribute('data-theme');
    
    if (effectiveTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
    }
    
}