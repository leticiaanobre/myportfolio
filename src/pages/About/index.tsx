import Image from "next/image";
import useIntersectionObserver from "@/hook/intersectionObserver";
import InfiniteScroll from "./components/infinite-scroll";

export default function About() {
  const { isVisible, ref } = useIntersectionObserver<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className={`w-full min-h-screen flex flex-col ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} 
        transform transition-all duration-700 ease-in-out`}
      id="about"
    >
      <div className="flex-grow flex flex-col md:flex-row gap-4 items-center justify-center p-10 bg-radial">
        {/* Texto */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          <h1 className="text-lg md:text-2xl font-bold">A BIT ABOUT ME</h1>
          <p className="font-extralight text-base md:text-xl leading-relaxed ">
            I am currently a Computer Science student. I work as a <strong className="text-primary font-semibold">software developer</strong> with a focus on{" "}
            <strong className="text-primary font-semibold">web</strong> and <strong className="text-primary font-semibold">mobile development</strong>, utilizing technologies like ReactJS, Next.js, Node.js, Typescript and JavaScript. I have worked on diverse projects that span both <strong className="text-primary font-semibold">front-end and back-end development</strong>. My journey in the tech world has been driven by curiosity and a passion for building efficient and user-centered applications.
          </p>
        </div>

        {/* Imagens */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          <div className="flex gap-4">
            {/* Imagem principal (maior) */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src="/LETICIALIGHT1.jpg"
                alt="Main Image"
                className="rounded-lg object-cover w-full max-h-auto"
                width={500}
                height={500}
              />
            </div>
            {/* Imagens empilhadas */}
            <div className="flex flex-col gap-4">
              <Image
                src="/LETICIALIGHT2.jpg"
                alt="Second Image"
                className="rounded-lg object-cover w-full max-h-64"
                width={200}
                height={200}
              />
              <Image
                src="/LETICIALIGHT3.jpg"
                alt="Third Image"
                className="rounded-lg object-cover w-full max-h-64"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div> 
      </div>
      
      <InfiniteScroll />
    </section>
  );
}
