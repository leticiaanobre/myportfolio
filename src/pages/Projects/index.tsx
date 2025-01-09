import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'T.IA.GO - LEGAL DATA ASSISTANT',
    description:
    'A solution that uses technology to streamline legal processes. For the design, Figma was used. As for the front-end, I utilized Next.js, TypeScript, and Tailwind CSS to speed up the landing page\'s development with functional and intuitive interfaces. The application integrates communication with a generative AI for legal data analysis.',
    designType: 'Website Design',
    imageUrl: '/Mockup.png',
    link: 'https://mftiago.com.br/',
  },
  {
    title: 'COMMUNITY',
    description:
      'This is a real-time chat application built with a modern tech stack. The frontend is developed using ReactJS, Zustand for state management, Axios for API requests, and Socket.IO for real-time updates. The backend utilizes Node.js with Express.js, MongoDB for database storage, JWT for authentication, and Socket.IO for WebSocket communication.',
    designType: 'Website Design',
    imageUrl: '/Communityy.png',
    link: 'https://github.com/leticiaanobre/chatapp-front',
  },
  {
    title: 'NEARBY APP',
    description:
    'Nearby is a mobile app made with React Native that helps users find restaurants nearby and easily access exclusive deals. Users can explore available options directly on a map. The app shows how many coupons each restaurant offers, and users can redeem them seamlessly using a QR code. The backend is built with Node.js, ensuring smooth data handling and efficient communication between the app and the server.',
    designType: 'Mobile Design',
    imageUrl: '/Nearbyapp.jpg',
    link: 'https://github.com/leticiaanobre/nearby-front-mobile',
  },
  {
    title: 'NUTRILIFE',
    description:
      'Nutrilife is an informational app designed to assist beginners in adopting a more active and healthy lifestyle. It was developed using React Native, Expo CLI, and JavaScript for the front-end. Firebase was used for authentication and data flow on the back-end.',
    designType: 'Mobile Design',
    imageUrl: '/Nutrilifeimg.jpg',
    link: 'https://github.com/leticiaanobre/nutriLife-front-mobile',
  },
];

const processDescription = (description: string) => {
  // Substituindo <strong> por <span class="text-indigo-500 font-semibold">
  return description.replace(/<strong>(.*?)<\/strong>/g, (match, p1) => {
    return `<span class="text-primary font-semibold">${p1}</span>`;
  });
};

export default function Projects() {
  return (
    <section className="w-full min-h-screen px-6 md:px-16 py-16 gap-10 flex flex-col" id="projects">
      <p className="font-extralight text-lg md:text-2xl text-center md:text-left">
        Selected <strong className="font-semibold ">Projects</strong>
      </p>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={{
            ...project,
            description: processDescription(project.description) // Processando a descrição
          }}
          isReversed={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
