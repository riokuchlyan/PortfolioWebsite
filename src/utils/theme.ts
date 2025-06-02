export type Theme = "dark" | "light";

export function getColorScheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  
  const stored = localStorage.getItem('theme') as Theme;
  if (stored && ['dark', 'light'].includes(stored)) {
    return stored;
  }
  
  return 'dark';
}

export function setColorScheme(theme: Theme) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('theme', theme);
}

export function getEffectiveTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  
  const theme = getColorScheme();
  return theme;
}