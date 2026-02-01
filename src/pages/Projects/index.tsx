import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'T.IA.GO - Ligal Data Assistant',
    description: 'A solution that uses technology to streamline legal processes. Developed with Next.js, TypeScript, and Tailwind CSS, integrating with generative AI for legal data analysis.',
    designType: 'Website Design',
    imageUrl: '/Mockup.png',
    link: 'https://mftiago.com.br/',
    bgColor: 'bg-indigo-900/20'
  },
  {
    title: 'Community',
    description: 'Real-time chat application built with ReactJS, Zustand, Socket.IO, and Node.js with MongoDB for database storage.',
    designType: 'Website Design',
    imageUrl: '/Communityy.png',
    link: 'https://github.com/leticiaanobre/chatapp-front',
    bgColor: 'bg-emerald-900/20'
  },
  {
    title: 'Nearby App',
    description: 'Mobile app made with React Native to find restaurants and redeem coupons via QR Code. Backend built with Node.js.',
    designType: 'Mobile Design',
    imageUrl: '/Nearbyapp.jpg',
    link: 'https://github.com/leticiaanobre/nearby-front-mobile',
    bgColor: 'bg-amber-900/20'
  },
  {
    title: 'NutriLife',
    description: 'Informational app for healthy lifestyle beginners, developed with React Native, Expo, and Firebase.',
    designType: 'Mobile Design',
    imageUrl: '/Nutrilifeimg.jpg',
    link: 'https://github.com/leticiaanobre/nutriLife-front-mobile',
    bgColor: 'bg-rose-900/20'
  },
];

export default function Projects() {
  return (
    <section className="w-full min-h-screen px-6 md:px-16 py-20 flex flex-col gap-12" id="projects">
      <div className="space-y-2">
        <h2 className="font-extralight text-lg md:text-2xl text-center md:text-left">
          Selected <strong className="font-semibold text-white">Projects</strong>
        </h2>
        <p className="text-gray-500 text-sm md:text-base text-center md:text-left">
          Perfect solutions for digital experiences.
        </p>
      </div>

      {/* Grid Responsiva: 1 coluna mobile, 2 colunas desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}