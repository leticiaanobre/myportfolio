import Image from "next/image";

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col" id="about">
      <div className="flex-grow flex flex-col md:flex-row gap-4 items-center justify-center p-10">
        {/* Texto */}
        <div className="w-full md:w-2/5 flex flex-col gap-4">
          <h1 className="text-1xl font-bold text-gradient">A BIT ABOUT ME</h1>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
          I am currently a Computer Science student. I work as a <strong>software developer</strong> with a focus on <strong>web</strong> and <strong>mobile development</strong>, utilizing technologies like Node.js, ReactJS, and React Native. My journey in the tech world has been driven by curiosity and a passion for building efficient and user-centered applications.
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
    </section>
  );
}
