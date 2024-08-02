import { Inter } from 'next/font/google';
import ThemeToggleButton from '@/components/ThemeButton';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between font-sans ${inter.className}`}>
      <Navbar/>
    </main>
  );
}
