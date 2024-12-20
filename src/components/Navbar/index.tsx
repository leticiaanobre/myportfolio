import { useState } from 'react';
import { Inter } from 'next/font/google';
import ThemeToggleButton from '@/components/ThemeButton';
import { Menu, X } from 'lucide-react';
import { useColorMode } from '../../hook/useColorMode';

const inter = Inter({ subsets: ['latin'] });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-16 flex flex-row py-4 px-6 md:px-20 items-center justify-between">
      <h1 className="text-gradient font-extrabold text-2xl">DEVELOPER</h1>
      <div className='flex flex-grow justify-end gap-2'>
        <div className="flex flex-row gap-2">
          {/* <ThemeToggleButton/> */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6 text-color" /> : <Menu className="h-6 w-6 text-color" />}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a href="#home" className={`py-2 px-3 rounded-xl transition duration-300 ${
            colorMode === 'light' ? 'hover:text-blue-300 transition-colors' : 'hover:text-blue-300 transition-colors'
          }`}>Home</a>
          <a href="#about" className={`py-2 px-3 rounded-xl transition duration-300 ${
            colorMode === 'light' ? 'hover:text-blue-300 transition-colors' : 'hover:text-blue-300 transition-colors'
          }`}>About</a>
          <a href="#skills" className={`py-2 px-3 rounded-xl transition duration-300 ${
            colorMode === 'light' ? 'hover:text-blue-300 transition-colors' : 'hover:text-blue-300 transition-colors'
          }`}>Skills</a>
          <a href="#projects" className={`py-2 px-3 rounded-xl transition duration-300 ${
            colorMode === 'light' ? 'hover:text-blue-300 transition-colors' : 'hover:text-blue-300 transition-colors'
          }`}>Projects</a>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background bg-color shadow-lg md:hidden">
            <div className="flex flex-col items-center py-4">
              <a href="#home" className={`py-3 w-full text-center ${
                colorMode === 'light' ? 'hover:text-blue-300 transition-colors' : 'hover:text-blue-300 transition-colors'
              }`}>Home</a>
              <a href="#about" className={`py-3 w-full text-center ${
                colorMode === 'light' ? 'hover:text-blue-300 transition-colors' : 'hover:text-blue-300 transition-colors'
              }`}>About</a>
              <a href="#skills" className={`py-3 w-full text-center ${
                colorMode === 'light' ? 'hover:text-blue-300 transition-colors' : 'hover:text-blue-300 transition-colors'
              }`}>Skills</a>
              <a href="#projects" className={`py-3 w-full text-center ${
                colorMode === 'light' ? 'hover:text-blue-300 transition-colors' : 'hover:text-blue-300 transition-colors'
              }`}>Projects</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

