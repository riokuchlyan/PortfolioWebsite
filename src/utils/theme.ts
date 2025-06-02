export type Theme = "dark" | "light" | "system";

export function getColorScheme(): Theme {
  if (typeof window === 'undefined') return 'dark'; // SSR fallback
  
  const stored = localStorage.getItem('theme') as Theme;
  if (stored && ['dark', 'light', 'system'].includes(stored)) {
    return stored;
  }
  
  // Default to system preference
  return 'system';
}

export function setColorScheme(theme: Theme) {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('theme', theme);
}

export function getEffectiveTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  
  const theme = getColorScheme();
  
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  return theme as 'dark' | 'light';
}