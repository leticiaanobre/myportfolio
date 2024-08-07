import { Inter } from 'next/font/google';
import Initial from '@/pages/Initial';
import About from '@/pages/About';
import Projects from './Projects';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between font-sans ${inter.className}`}>
      <Initial/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  );
}
