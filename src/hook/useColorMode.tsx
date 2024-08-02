import { useState, useEffect } from 'react';

export function useColorMode() {
  const [colorMode, setColorMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = window.localStorage.getItem('color-mode') || root.style.getPropertyValue('--initial-color-mode');
    if (initialColorValue) {
      setColorMode(initialColorValue as 'light' | 'dark');
    }
  }, []);

  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
    window.localStorage.setItem('color-mode', newColorMode);
    const root = window.document.documentElement;
    root.setAttribute('data-theme', newColorMode);
  };

  return { colorMode, toggleColorMode };
}
