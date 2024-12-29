import ButtonComponent from '@/components/Button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  return (
    <section className="w-full min-h-screen px-6 md:px-24 py-16 gap-10 flex flex-col" id="projects">
      <p className="font-extralight text-2xl text-center md:text-left">
        Selected <strong>Projects</strong>
      </p>
      
      {/* Project 1 */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-14 mt-8 items-center md:items-start">
        <div className="relative w-full h-96 md:w-[900px] md:h-[350px]">
          <Image
            src="/Mockup.png"
            alt="Project one"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-center md:items-start text-center md:text-left md:max-w-xl">
          <h1 className="text-1xl font-bold text-gradient">T.IA.GO - LEGAL DATA ASSISTANT</h1>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
            A solution that uses technology to streamline legal processes.{' '}
          </p>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
            For the design, <strong>Figma</strong> was used. As for the front-end, I utilized
            <strong> Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS </strong> 
            to speed up the landing page&apos;s development with functional and intuitive interfaces.{' '}
            The application integrates communication with a generative AI for legal data analysis.
          </p>
          <p className="font-extralight">Website Design</p>
          <ButtonComponent text="VIEW WORK" icon={ChevronRight} link="https://mftiago.com.br/" />
        </div>
      </div>
      
      {/* Project 2 */}
      <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-14 mt-8 items-center md:items-start">
        <div className="relative w-full h-60 md:w-[900px] md:h-[350px]">
          <Image
            src="/Nutrilifeimg.jpg"
            alt="Project two"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-center md:items-start text-center  md:text-left md:max-w-xl">
          <h1 className="text-1xl font-bold text-gradient">NUTRILIFE</h1>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
          Nutrilife is an informational app designed to assist beginners in adopting a more active and healthy lifestyle. It was developed using <strong>React Native</strong>, <strong>Expo CLI</strong>, and <strong>JavaScript</strong> for the front-end. <strong>Firebase</strong> was used for authentication and data flow on the back-end.
          </p>
          <p className="font-extralight">Mobile Design</p>
          <ButtonComponent text="VIEW WORK" icon={ChevronRight} link="https://github.com/leticiaanobre/nutriLife-front-mobile"/>
        </div>
      </div>
      
      {/* Project 3 */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-14 mt-8 items-center md:items-start">
        <div className="relative w-full h-60 md:w-[900px] md:h-[350px]">
          <Image
            src="/Nearbyapp.jpg"
            alt="Project three"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-center md:items-start text-center md:text-left md:max-w-xl">
          <h1 className="text-1xl font-bold text-gradient">NEARBY APP</h1>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
          Nearby is a mobile app made with <strong>React Native</strong> that helps users find restaurants nearby and easily access exclusive deals. Users can explore avaliable options directly on a map. The app shows how many coupons each restaurant offers, and users can redeem them seamlessly using a QR code. The backend is built with <strong>Node.js</strong>, ensuring smooth data handling and efficient communication between the app and the server. This project combines geolocation, QR code functionality, and a clean interface for discovering and using restaurant deals.
          </p>
          <p className="font-extralight">Mobile Design</p>
          <ButtonComponent text="VIEW WORK" icon={ChevronRight} link="https://github.com/leticiaanobre/nearby-front-mobile" />
        </div>
      </div>

        {/* Project 4 */}
        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-14 mt-8 items-center md:items-start">
        <div className="relative w-full h-60 md:w-[900px] md:h-[350px]">
          <Image
            src="/Communityy.png"
            alt="Project two"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-4 justify-end items-center md:items-start text-center  md:text-left md:max-w-xl">
          <h1 className="text-1xl font-bold text-gradient">COMMUNITY</h1>
          <p className="font-extralight text-base md:text-2xl leading-relaxed">
          This is a real-time chat application built with a modern tech stack. The frontend is developed using <strong>ReactJS</strong>, <strong>Zustand</strong> for state management, <strong>Axios</strong> for API requests, and <strong>Socket.IO</strong> for real-time updates. The backend utilizes <strong>Node.js</strong> with <strong>Express.js</strong>, <strong>MongoDB</strong> for database storage, <strong>JWT</strong> for authentication, and <strong>Socket.IO</strong> for WebSocket communication. The app includes CORS and cookie-based authentication to ensure secure and seamless user interactions.
          </p>
          <p className="font-extralight">Website Design</p>
          <ButtonComponent text="VIEW WORK" icon={ChevronRight} link="https://github.com/leticiaanobre/chatapp-front"/>
        </div>
      </div>
    </section>
  );
}
