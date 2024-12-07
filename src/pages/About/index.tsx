export default function About() {
    return (
      <section className="w-full min-h-screen flex flex-col" id="about">
        <div className="flex-grow flex flex-col md:flex-row gap-4 items-center justify-center p-10">
          {/* Texto */}
          <div className="w-full md:w-2/5 flex flex-col gap-4">
            <h1 className="text-1xl font-medium">A BIT ABOUT ME</h1>
            <p className="font-extralight text-base md:text-2xl leading-relaxed">
              I am currently a Computer Science student. I work as a{" "}
              <strong>front-end developer</strong> and I am also deeply passionate
              about <strong>data science</strong> and <strong>AI algorithms</strong>. My
              journey in the tech world has been driven by a strong curiosity and
              a desire to explore the limitless possibilities within these fields.
            </p>
          </div>
  
          {/* Imagens */}
          <div className="w-full md:w-2/5 flex flex-col gap-4">
            <div className="flex gap-4">
              {/* Imagem principal (maior) */}
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="/LETICIALIGHT1.jpg"
                  alt="Main Image"
                  className="rounded-lg object-cover w-full max-h-auto"
                />
              </div>
              {/* Imagens empilhadas */}
              <div className="flex flex-col gap-4">
                <img
                  src="/LETICIALIGHT2.jpg"
                  alt="Second Image"
                  className="rounded-lg object-cover w-full max-h-64"
                />
                <img
                  src="/LETICIALIGHT3.jpg"
                  alt="Third Image"
                  className="rounded-lg object-cover w-full max-h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  