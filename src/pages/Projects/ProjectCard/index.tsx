import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import useIntersectionObserver from '@/hook/intersectionObserver';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    designType: string;
    imageUrl: string;
    link: string;
    bgColor?: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { isVisible, ref } = useIntersectionObserver<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col gap-4 transition-all duration-1000 ease-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
    >
      {/* Container da Imagem com Aspect Ratio */}
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`relative aspect-[16/10] w-full overflow-hidden rounded-3xl ${project.bgColor || 'bg-gray-800'}`}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay de Hover (Opcional) */}
        {/* <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <div className="bg-white text-black p-4 rounded-full">
                <ArrowUpRight size={24} />
             </div>
        </div> */}
      </a>

      {/* Textos do Card */}
      <div className="flex flex-col gap-2 px-2 mt-2">
        <div className="flex justify-between items-start">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
                {project.designType}
            </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
            {project.title}
        </h3>
        
        <p className="text-gray-400 font-extralight text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3">
            {project.description}
        </p>

        <a 
            href={project.link}
            className="flex items-center gap-2 text-sm font-semibold mt-2 hover:underline underline-offset-4"
        >
            VIEW CASE STUDY <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;