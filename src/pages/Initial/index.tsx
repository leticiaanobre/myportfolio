import { ChevronDown } from "lucide-react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Initial() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col gap-4 items-center justify-evenly p-10">
        {/* Image Section */}
        <div className="relative flex items-center justify-center">
          <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden">
            <Image
              src="/LETICIADARK1.jpg" 
              alt="Image of myself"
              width={288} 
              height={288}
              className="object-cover"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-center font-extralight text-2xl md:text-4xl leading-relaxed">
            I&apos;m a <strong>Software Developer</strong> with a passion
          </p>
          <p className="text-center font-extralight text-2xl md:text-4xl leading-relaxed">
          for building efficient <strong>web applications</strong>
          </p>
        </div>
        <a href="#about">
          <button>
            <ChevronDown />
          </button>
        </a>
      </div>
    </section>
  );
}
