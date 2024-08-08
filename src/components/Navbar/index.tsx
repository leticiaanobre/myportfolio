import { useState } from 'react';
import { Inter } from 'next/font/google';
import ThemeToggleButton from '@/components/ThemeButton';
import { Menu, X } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-16 flex flex-row py-4 px-6 md:px-20 items-center justify-between">
      <h1 className="text-gradient font-extrabold text-2xl">DEVELOPER</h1>
      <div className="flex flex-row gap-2 md:hidden">
        <ThemeToggleButton />
        <button onClick={toggleMenu} className="text-gray-800 dark:text-gray-200">
          {isMenuOpen ? <X className="h-6 w-6 text-color" /> : <Menu className="h-6 w-6 text-color" />}
        </button>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <button>Home</button>
        <button>About</button>
        <button>Projects</button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background bg-color shadow-lg md:hidden">
          <div className="flex flex-col items-center py-4">
            <button className="py-2">Home</button>
            <button className="py-2">About</button>
            <button className="py-2">Projects</button>
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </header>
  );
}
