import { ChevronDown } from "lucide-react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Initial() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col md:flex-row gap-4 items-center justify-evenly p-10">
        {/* Image Section */}
        <div className=" flex items-center justify-center">
          <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-96 md:h-96 rounded-full overflow-hidden">
            <Image
              src="/profileSmile.jpeg"
              alt="Image of myself"
              width={488}
              height={488}
              className="object-cover"
            />
          </div>
        </div>
        {/* Text Section */}
        <div className="flex flex-col gap-4 items-center justify-center md:items-start md:justify-start">
          <p className="text-center md:text-start font-semibold text-lg md:text-xl leading-relaxed">Hi, there!</p>
          <p className="text-center md:text-start font-extralight text-2xl md:text-4xl leading-relaxed">
            I&apos;m a <strong className="text-gradient font-semibold">Software Developer</strong> with a passion
          </p>
          <p className="text-center md:text-start font-extralight text-2xl md:text-4xl leading-relaxed">
            for building efficient <strong className="text-gradient font-semibold">web applications</strong>
          </p>
          <a href="#about">
            <button className="flex gap-2 bg-blue-600 items-center py-2 px-4 hover:bg-blue-700 rounded-lg">
              See more
              <ChevronDown />
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}
