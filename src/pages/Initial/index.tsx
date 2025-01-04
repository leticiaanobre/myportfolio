import Image from "next/image"
import Navbar from "@/components/Navbar"
import { ChevronDown } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen relative w-full">
      <div className="absolute inset-0">
        <div className="grid grid-cols-[1fr_2fr] h-full">
          <div className="bg-black" />
          <div className="bg-black md:bg-[#1a1a24]" />
        </div>
      </div>

      <div className="relative">
        <Navbar />
        <section className="container min-h-screen grid lg:grid-cols-2 items-center pt-10 animate-fade-in">
          <div className="relative aspect-square w-full max-w-2xl mx-auto lg:mx-0 md:border md:border-gray-800">
            <Image
              src="/LETICIADARK1.JPG"
              alt="Portrait photo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6 p-8 lg:-ml-24 relative z-10 bg-[#1a1a24] md:bg-transparent animate-fade-in animate-delay-200">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-5xl font-medium text-white">
                I&apos;m Leticia Nobre.
                <br />
                A <strong className="font-bold text-gradient">Software Developer</strong>
              </h1>
              <p className="text-4xl sm:text-5xl md:text-5xl font-medium">
                based in Brazil.
              </p>
            </div>
            <p className="text-base md:text-xl font-extralight max-w-2xl text-gray-300">
              I&apos;m passionate about building efficient web applications that deliver great user experiences.
              I love solving complex problems with clean and maintainable code.
              My goal is to create impactful solutions that meet user needs and exceed expectations.
            </p>
            <a href="#about" className="flex justify-center">
              <button className="animate-bounce mt-4 text-white">
                <ChevronDown />
              </button>
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}