export type Theme = "dark" | "light";

export function getColorScheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  
  const stored = localStorage.getItem('theme') as Theme;
  if (stored && ['dark', 'light'].includes(stored)) {
    return stored;
  }
  
  return 'light';
}

export function setColorScheme(theme: Theme) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('theme', theme);
}

export function getEffectiveTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'light';
  
  const theme = getColorScheme();
  return theme;
}