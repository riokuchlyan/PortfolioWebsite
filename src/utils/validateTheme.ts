export const validateTheme = () => {
  if (typeof window === 'undefined') return;
  
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme || 'light';
  
  document.documentElement.setAttribute('data-theme', theme);
  
  if (!savedTheme) {
    localStorage.setItem('theme', theme);
  }
};
