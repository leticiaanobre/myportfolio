import { ChevronDown } from "lucide-react";
import Navbar from "../../components/Navbar";

export default function Initial() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col gap-4 items-center justify-evenly p-10">
        <div className="flex flex-col gap-4 items-center justify-center">
            <p className='text-center font-extralight text-2xl md:text-4xl leading-relaxed'>I&apos;m a Frontend Developer specialising in</p>
            <p className='text-center font-extralight text-2xl md:text-4xl leading-relaxed'><strong>UX/UI</strong> and <strong>Interaction Design</strong></p>
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
