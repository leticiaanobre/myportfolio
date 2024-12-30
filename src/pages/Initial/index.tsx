import Image from "next/image"
import Navbar from "@/components/Navbar"
import { ChevronDown } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <section className="container min-h-screen grid lg:grid-cols-2 gap-8 items-center pt-16">
        <div className="relative aspect-square w-full max-w-2xl mx-auto">
          <Image
            src="/LETICIADARK1.JPG"
            alt="Portrait photo"
            fill
            className="object-cover rounded-sm"
            priority
          />
        </div>
        <div className="space-y-6 px-8">
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
          <p className="text-base md:text-xl font-extralight max-w-2xl">
            I&apos;m passionate about building efficient web applications.
          </p>
          <a href="#about">
          <button className="animate-bounce mt-4">
            <ChevronDown />
          </button>
        </a>
        </div>
      </section>
    </div>
  )
}

