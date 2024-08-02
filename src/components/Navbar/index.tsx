import { Inter } from 'next/font/google';
import ThemeToggleButton from '@/components/ThemeButton';
const inter = Inter({ subsets: ['latin'] });

export default function Navbar() {
  return (
      <header className='w-full h-16 flex flex-row py-4 px-20 items-center justify-between'>
        <h1 className="text-gradient font-extrabold text-2xl">DEVELOPER</h1>
        <div className='flex flex-row justify-between items-center gap-6'>
          <ThemeToggleButton />
          <button>Home</button>
          <button>About</button>
          <button>Projects</button>
        </div>
      </header>
  );
}
