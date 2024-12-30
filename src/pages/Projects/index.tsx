import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'T.IA.GO - LEGAL DATA ASSISTANT',
    description:
      'A solution that uses technology to streamline legal processes. For the design, <strong>Figma</strong> was used. As for the front-end, I utilized <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong> to speed up the landing page\'s development with functional and intuitive interfaces. The application integrates communication with a generative AI for legal data analysis.',
    designType: 'Website Design',
    imageUrl: '/Mockup.png',
    link: 'https://mftiago.com.br/',
  },
  {
    title: 'NUTRILIFE',
    description:
      'Nutrilife is an informational app designed to assist beginners in adopting a more active and healthy lifestyle. It was developed using <strong>React Native</strong>, <strong>Expo CLI</strong>, and <strong>JavaScript</strong> for the front-end. <strong>Firebase</strong> was used for authentication and data flow on the back-end.',
    designType: 'Mobile Design',
    imageUrl: '/Nutrilifeimg.jpg',
    link: 'https://github.com/leticiaanobre/nutriLife-front-mobile',
  },
  {
    title: 'NEARBY APP',
    description:
      'Nearby is a mobile app made with <strong>React Native</strong> that helps users find restaurants nearby and easily access exclusive deals. Users can explore available options directly on a map. The app shows how many coupons each restaurant offers, and users can redeem them seamlessly using a QR code. The backend is built with <strong>Node.js</strong>, ensuring smooth data handling and efficient communication between the app and the server.',
    designType: 'Mobile Design',
    imageUrl: '/Nearbyapp.jpg',
    link: 'https://github.com/leticiaanobre/nearby-front-mobile',
  },
  {
    title: 'COMMUNITY',
    description:
      'This is a real-time chat application built with a modern tech stack. The frontend is developed using <strong>ReactJS</strong>, <strong>Zustand</strong> for state management, <strong>Axios</strong> for API requests, and <strong>Socket.IO</strong> for real-time updates. The backend utilizes <strong>Node.js</strong> with <strong>Express.js</strong>, <strong>MongoDB</strong> for database storage, <strong>JWT</strong> for authentication, and <strong>Socket.IO</strong> for WebSocket communication.',
    designType: 'Website Design',
    imageUrl: '/Communityy.png',
    link: 'https://github.com/leticiaanobre/chatapp-front',
  },
];

export default function Projects() {
  return (
    <section className="w-full min-h-screen px-6 md:px-16 py-16 gap-10 flex flex-col" id="projects">
      <p className="font-extralight text-2xl text-center md:text-left">
        Selected <strong>Projects</strong>
      </p>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} isReversed={index % 2 !== 0} />
      ))}
    </section>
  );
}
