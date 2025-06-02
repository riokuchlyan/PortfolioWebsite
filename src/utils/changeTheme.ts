import { getColorScheme, setColorScheme, getEffectiveTheme } from '../utils/theme';

export function changeTheme() {
    const currentTheme = getColorScheme();
    let nextTheme: 'dark' | 'light' | 'system';
    
    switch (currentTheme) {
        case 'system':
            nextTheme = 'light';
            break;
        case 'light':
            nextTheme = 'dark';
            break;
        case 'dark':
            nextTheme = 'system';
            break;
        default:
            nextTheme = 'system';
    }
    
    setColorScheme(nextTheme);
    applyTheme();
}

export function applyTheme() {
    if (typeof window === 'undefined') return;
    
    const effectiveTheme = getEffectiveTheme();
    const root = document.documentElement;
    
    if (effectiveTheme === 'light') {
        // Light theme colors
        root.style.setProperty('--background', '#ffffff');
        root.style.setProperty('--foreground', '#0f172a');
        root.style.setProperty('--muted', '#64748b');
        root.style.setProperty('--border', '#e2e8f0');
        root.style.setProperty('--accent', '#3b82f6');
        root.style.setProperty('--card', '#f8fafc');
        root.style.setProperty('--card-foreground', '#1e293b');
        
        // Light theme shadows
        root.style.setProperty('--shadow-light', '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)');
        root.style.setProperty('--shadow-medium', '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)');
        root.style.setProperty('--shadow-large', '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)');
        root.style.setProperty('--shadow-xl', '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)');
        
        // Update icon filters for light theme
        const sun = document.getElementById('sun');
        if (sun) {
            sun.style.filter = "brightness(0%) sepia(100%) saturate(0%) hue-rotate(0deg)";
        }
    } else {
        // Dark theme colors
        root.style.setProperty('--background', '#0a0a0a');
        root.style.setProperty('--foreground', '#ededed');
        root.style.setProperty('--muted', '#9ca3af');
        root.style.setProperty('--border', '#262626');
        root.style.setProperty('--accent', '#3b82f6');
        root.style.setProperty('--card', '#111111');
        root.style.setProperty('--card-foreground', '#ededed');
        
        // Dark theme shadows
        root.style.setProperty('--shadow-light', '0 1px 3px 0 rgb(0 0 0 / 0.3), 0 1px 2px -1px rgb(0 0 0 / 0.3)');
        root.style.setProperty('--shadow-medium', '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)');
        root.style.setProperty('--shadow-large', '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)');
        root.style.setProperty('--shadow-xl', '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)');
        
        // Update icon filters for dark theme
        const sun = document.getElementById('sun');
        if (sun) {
            sun.style.filter = "brightness(100%)";
        }
    }
}