import { ChevronDown } from "lucide-react";
import Navbar from "../../components/Navbar";

export default function Initial() {
  return (
    <section className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col gap-4 items-center justify-evenly">
        <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className='text-4xl font-sans'>I'm a Frontend Developer specialising in</h1>
            <h1 className='text-4xl font-sans'><strong>UX/UI</strong> and <strong>Interaction Design</strong></h1>
        </div>
        <button>
        <ChevronDown />
        </button>
      </div>
    </section>
  );
}
