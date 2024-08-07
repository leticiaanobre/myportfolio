import { ChevronDown } from "lucide-react";
import Navbar from "../../components/Navbar";

export default function Initial() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col gap-4 items-center justify-evenly">
        <div className="flex flex-col gap-4 items-center justify-center">
            <p className='font-extralight text-4xl leading-relaxed'>I'm a Frontend Developer specialising in</p>
            <p className='font-extralight text-4xl leading-relaxed'><strong>UX/UI</strong> and <strong>Interaction Design</strong></p>
        </div>
        <button>
        <ChevronDown />
        </button>
      </div>
    </section>
  );
}
