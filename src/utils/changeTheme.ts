import { getColorScheme, setColorScheme } from '../utils/theme';

export function changeTheme() {
    if (getColorScheme() == "dark") {
        setColorScheme("light");
        const root = document.documentElement;
        root.style.setProperty('--background', '#f5f5f5');
        root.style.setProperty('--foreground', '#1a1a1a');
        const sun = document.getElementById('sun');
        if (sun) {
          sun.style.filter = "brightness(0%)";
        }
        const house = document.getElementById('house');
        if (house) {
          house.style.filter = "brightness(0%)";
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
    }
}