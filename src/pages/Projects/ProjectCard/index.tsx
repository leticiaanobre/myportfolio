import Image from 'next/image';
import ButtonComponent from '@/components/Button';
import { ChevronRight } from 'lucide-react';
import useIntersectionObserver from '@/hook/intersectionObserver'; // Importando o hook

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    designType: string;
    imageUrl: string;
    link: string;
  };
  isReversed: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isReversed }) => {
  // Garantir que o hook é chamado independentemente de condições
  const { isVisible, ref } = useIntersectionObserver<HTMLDivElement>();

  // Verifique as condições depois de chamar o hook
  if (!project || !project.imageUrl || !project.title || !project.description) {
    return <div>Invalid project data</div>; // Mensagem genérica em caso de dados ausentes
  }

  return (
    <div
      ref={ref} // Vincula a referência do hook
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
      gap-6 md:gap-14 items-center md:items-start bg-[#0E1131] rounded-2xl w-full p-6 md:p-16
      transform transition-all duration-700 ease-in-out 
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
    >
      <div className="relative w-full h-60 md:w-[900px] md:h-[350px]">
        <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-4 justify-end items-center md:items-start text-center md:text-left md:max-w-lg">
        <h1 className="text-lg md:text-2xl font-bold ">{project.title}</h1>
        <h1 className="text-base md:text-lg font-semibold text-primary">About the project</h1>
        <p
          className="font-extralight text-base md:text-xl leading-relaxed"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <p className="font-extralight">{project.designType}</p>
        <ButtonComponent text="VIEW WORK" icon={ChevronRight} link={project.link} />
      </div>
    </div>
  );
};

export default ProjectCard;
