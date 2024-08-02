import { Inter } from 'next/font/google';
import Initial from '@/components/Initial';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between font-sans ${inter.className}`}>
      <Initial/>
      <About/>
    </main>
  );
}
