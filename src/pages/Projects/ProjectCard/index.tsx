import Image from 'next/image';
import ButtonComponent from '@/components/Button';
import { ChevronRight } from 'lucide-react';

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
    if (!project || !project.imageUrl || !project.title || !project.description) {
      return <div>Invalid project data</div>; // Mensagem genérica em caso de dados ausentes
    }
  
    return (
      <div
        className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} 
        gap-6 md:gap-14 items-center md:items-start bg-[#100C21] rounded-2xl w-full p-6 md:p-16`}
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
          <h1 className="text-1xl font-bold text-gradient">{project.title}</h1>
          <p
            className="font-extralight text-base md:text-2xl leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          <p className="font-extralight">{project.designType}</p>
          <ButtonComponent text="VIEW WORK" icon={ChevronRight} link={project.link} />
        </div>
      </div>
    );
  };
  

export default ProjectCard;
