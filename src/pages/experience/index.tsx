import useIntersectionObserver from "@/hook/intersectionObserver";

export default function Experience() {
  const { isVisible, ref } = useIntersectionObserver<HTMLDivElement>();

  const experiences = [
    {
      company: "Kumulus",
      period: "Mar 2025 - Current",
      role: "Data Scientist",
      desc: [
        "Development and support of Artificial Intelligence projects focused on business-driven solutions.",
        "Collaboration on the integration of AI applications with cloud services using Microsoft Azure.",
        "Support in training, testing, and validation of AI models and Large Language Models (LLMs).",
        "Contribution to the development and maintenance of data pipelines for monitoring, automation, and process optimization.",
        "Hands-on experience with Azure Resources, Databricks, agents, LLMs, chatbots, and voicebots.",
        "Participation in AI model training and fine-tuning for diverse use cases."
      ],
    },
    {
      company: "Meireles e Freitas Digital Law",
      period: "Oct 2023 - Apr 2025",
      role: "Software Developer",
      desc: [
        "Developed modern and responsive interfaces using React.js, Next.js, TypeScript, and Chakra UI.",
        "Implemented routes and integrations between Node.js back-end and front-end, focused on PostgreSQL databases.",
        "Designed intuitive systems in Figma, creating solutions tailored to specific business requirements.",
        "Built the frontend for a Generative AI solution for legal analysis using Next.js and Tailwind CSS.",
        "Automated administrative processes with Python and created analytical reports using Power BI."
      ],
    }
  ];

  return (
    <section
      ref={ref}
      className={`w-full min-h-screen bg-radialsecondary py-20 px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      id="experience"
    >
      <div className="max-w-4xl mx-auto ">
        <h2 className="font-extralight mb-12 text-lg md:text-2xl text-center md:text-left tracking-widest">
          My <strong className="font-semibold text-white">Experience</strong>
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div key={index} className="flex">
              {/* Timeline Track */}
              <div className="flex flex-col items-center mr-6 md:mr-10">
                <div className="w-4 h-4 rounded-full bg-button-dark shadow-[0_0_10px_rgba(65,122,255,0.8)] border-2 border-[#070920] z-10" />
                {index !== experiences.length - 1 && (
                  <div className="w-px h-full bg-gray-600/40" />
                )}
              </div>

              {/* Content Card */}
              <div className="pb-12 flex-grow">
                <div className="rounded-lg  p-6 backdrop-blur-sm hover:border-button-dark transition-all group bg-[#0E1131]">
                  <span className="text-primary font-bold text-sm block mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold  mb-1 text-white">
                    {exp.role}
                  </h3>
                  <span className="text-gray-500 text-xs uppercase mb-4 block font-medium tracking-wider">
                    {exp.company}
                  </span>

                  {/* Verificação: Se for array, renderiza lista. Se for string, renderiza texto. */}
                  {Array.isArray(exp.desc) ? (
                    <ul className="list-none space-y-2">
                      {exp.desc.map((item, idx) => (
                        <li key={idx} className="text-gray-400 font-extralight text-sm md:text-base flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 font-extralight text-sm md:text-base leading-relaxed">
                      {exp.desc}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}