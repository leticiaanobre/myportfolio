import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  return (
    <section className="w-full min-h-screen px-24 py-16 gap-10 flex flex-col">
      <p className="font-thin text-2xl">
        Selected <strong>Projects</strong>
      </p>
      <div className="flex flex-row gap-14 mt-8">
        <div className="relative w-[700px] h-[350px]">
          <Image
            src="/assets/Project1.svg"
            alt="Project one"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-start">
          <h1 className="text-1xl">REAL ESTATE TEMPLATE</h1>
          <p className="font-thin text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur{' '}
            <strong>adipiscing elit. Ultrices lorem non feugiat egestas amet.</strong>
          </p>
          <p className="font-thin">Website Design</p>
          <button className="flex flex-row text-sm items-center border py-1 px-6 rounded-full">VIEW WORK <ChevronRight className="ml-2"/></button>
        </div>
      </div>
      <div className="flex flex-row gap-14 mt-8">
        <div className="flex flex-col gap-4 justify-end items-start">
          <h1 className="text-1xl">REAL ESTATE TEMPLATE</h1>
          <p className="font-thin text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur{' '}
            <strong>adipiscing elit. Ultrices lorem non feugiat egestas amet.</strong>
          </p>
          <p className="font-thin">Website Design</p>
          <button className="flex flex-row text-sm items-center border py-1 px-6 rounded-full">VIEW WORK <ChevronRight className="ml-2"/></button>
        </div>
        <div className="relative w-[700px] h-[350px]">
          <Image
            src="/assets/Project1.svg"
            alt="Project one"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-row gap-14 mt-8">
        <div className="relative w-[700px] h-[350px]">
          <Image
            src="/assets/Project1.svg"
            alt="Project one"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-start">
          <h1 className="text-1xl">REAL ESTATE TEMPLATE</h1>
          <p className="font-thin text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur{' '}
            <strong>adipiscing elit. Ultrices lorem non feugiat egestas amet.</strong>
          </p>
          <p className="font-thin">Website Design</p>
          <button className="flex flex-row text-sm items-center border py-1 px-6 rounded-full">VIEW WORK <ChevronRight className="ml-2"/></button>
        </div>
      </div>
    </section>
  );
}
