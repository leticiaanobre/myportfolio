import ButtonComponent from '@/components/Button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  return (
    <section className="w-full min-h-screen px-6 md:px-24 py-16 gap-10 flex flex-col" id="projects">
      <p className="font-extralight text-2xl text-center md:text-left">
        Selected <strong>Projects</strong>
      </p>
      
      {/* Project 1 */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-14 mt-8 items-center md:items-start">
        <div className="relative w-full h-96 md:w-[900px] md:h-[350px]">
          <Image
            src="/Mockup.png"
            alt="Project one"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-center md:items-start text-center md:text-left md:max-w-xl">
          <h1 className="text-1xl font-bold text-gradient">T.IA.GO - LEGAL DATA ASSISTANT</h1>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
            A solution that uses technology to streamline legal processes.{' '}
          </p>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
            For the design, <strong>Figma</strong> was used. As for the front-end, I utilized
            <strong> Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS </strong> 
            to speed up the landing page&apos;s development with functional and intuitive interfaces.{' '}
            The application integrates communication with a generative AI for legal data analysis.
          </p>
          <p className="font-extralight">Website Design</p>
          <ButtonComponent text="VIEW WORK" icon={ChevronRight} link="https://mftiago.com.br/" />
        </div>
      </div>
      
      {/* Project 2 */}
      <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-14 mt-8 items-center md:items-start">
        <div className="relative w-full h-60 md:w-[900px] md:h-[350px]">
          <Image
            src="/Nutrilifeimg.jpg"
            alt="Project two"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-center md:items-start text-center  md:text-left md:max-w-xl">
          <h1 className="text-1xl font-bold text-gradient">NUTRILIFE</h1>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
          Nutrilife is an informational app designed to assist beginners in adopting a more active and healthy lifestyle. It was developed using <strong>React Native</strong>, <strong>Expo CLI</strong>, and <strong>JavaScript</strong> for the front-end. <strong>Firebase</strong> was used for authentication and data flow on the back-end.
          </p>
          <p className="font-extralight">Website Design</p>
          <ButtonComponent text="VIEW WORK" icon={ChevronRight} link="https://github.com/leticiaanobre/nutriLife-front-mobile"/>
        </div>
      </div>
      
      {/* Project 3 */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-14 mt-8 items-center md:items-start">
        <div className="relative w-full h-60 md:w-[700px] md:h-[350px]">
          <Image
            src="/assets/Project1.svg"
            alt="Project three"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-center md:items-start text-center md:text-left">
          <h1 className="text-1xl font-bold text-gradient">REAL ESTATE TEMPLATE</h1>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur{' '}
            <strong>adipiscing elit. Ultrices lorem non feugiat egestas amet.</strong>
          </p>
          <p className="font-extralight">Website Design</p>
          <ButtonComponent text="VIEW WORK" icon={ChevronRight} />
        </div>
      </div>
    </section>
  );
}
