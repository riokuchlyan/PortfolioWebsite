export const validateTheme = () => {
  if (typeof window === 'undefined') return;
  
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', theme);
  
  if (!savedTheme) {
    localStorage.setItem('theme', theme);
  }
};
