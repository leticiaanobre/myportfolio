import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <section className="w-full h-64 flex flex-col">
      <footer className="flex-grow flex flex-col gap-2 items-center justify-evenly">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="font-extralight text-4xl leading-relaxed">
            Get <strong>in touch</strong>
          </p>
          <p className="font-extralight text-1xl leading-relaxed">
            So then we can talk more about
          </p>
        </div>
        <div className="flex flex-row gap-10">
          <a href="mailto:leticiavidal2910@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://github.com/leticiaanobre" target="_blank" rel="noopener noreferrer">
            <Github className="cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/leticia-nobre-2716a4241/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a
            href="https://wa.me/5585986431647" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="cursor-pointer hover:text-blue-500 transition-colors duration-300" />
          </a>
        </div>
        <p className="font-thin text-1xl leading-relaxed">
          Developed by <strong>Leticia Nobre</strong>
        </p>
      </footer>
    </section>
  );
}
