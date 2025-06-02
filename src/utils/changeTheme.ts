import { getColorScheme, setColorScheme } from '../utils/theme';

export function changeTheme() {
    if (getColorScheme() == "dark") {
        setColorScheme("light");
        const root = document.documentElement;
        
        // Light theme colors
        root.style.setProperty('--background', '#ffffff');
        root.style.setProperty('--foreground', '#0f172a');
        root.style.setProperty('--muted', '#64748b');
        root.style.setProperty('--border', '#e2e8f0');
        root.style.setProperty('--accent', '#3b82f6');
        root.style.setProperty('--card', '#f8fafc');
        root.style.setProperty('--card-foreground', '#1e293b');
        
        // Update icon filters for light theme
        const sun = document.getElementById('sun');
        if (sun) {
          sun.style.filter = "brightness(0%) sepia(100%) saturate(0%) hue-rotate(0deg)";
        }
        const house = document.getElementById('house');
        if (house) {
          house.style.filter = "brightness(0%) sepia(100%) saturate(0%) hue-rotate(0deg)";
        }
    }
    else {
        setColorScheme("dark");
        const root = document.documentElement;
        
        // Dark theme colors
        root.style.setProperty('--background', '#0a0a0a');
        root.style.setProperty('--foreground', '#ededed');
        root.style.setProperty('--muted', '#9ca3af');
        root.style.setProperty('--border', '#262626');
        root.style.setProperty('--accent', '#3b82f6');
        root.style.setProperty('--card', '#111111');
        root.style.setProperty('--card-foreground', '#ededed');
        
        // Update icon filters for dark theme
        const sun = document.getElementById('sun');
        if (sun) {
          sun.style.filter = "brightness(100%)";
        }
        const house = document.getElementById('house');
        if (house) {
          house.style.filter = "brightness(100%)";
        }
    }
}