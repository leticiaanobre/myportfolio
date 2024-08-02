import React from 'react';
import { useColorMode } from '../../hook/useColorMode';
import { SunIcon, MoonIcon } from 'lucide-react';

export default function ThemeToggleButton() {
    const { colorMode, toggleColorMode } = useColorMode();
  
    return (
      <button
        onClick={toggleColorMode}
        className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-300 bg-transparent ${
          colorMode === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700'
        }`}
      >
        {colorMode === 'light' ? (
          <MoonIcon className="h-6 w-6 text-black" />
        ) : (
          <SunIcon className="h-6 w-6 text-white" />
        )}
      </button>
    );
  }