import { 
  SiJavascript, SiTypescript, SiReact, SiPostgresql, SiPython, SiScikitlearn, 
  SiTailwindcss, SiStyledcomponents, SiFigma, SiJira, SiMongodb, SiFirebase, 
  SiGooglesheets, SiReactrouter, SiDocker, SiChakraui, SiNodedotjs,
  SiMicrosoftexcel,
  SiShadcnui
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDatabase, FaChartBar } from "react-icons/fa";

interface Skill {
  icon: React.ReactNode;
  title: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "FRONT-END",
      description: "Building responsive and interactive user interfaces with modern web technologies.",
      skills: [
        { icon: <SiJavascript />, title: "JavaScript" },
        { icon: <SiTypescript />, title: "TypeScript" },
        { icon: <SiReact />, title: "ReactJS" },
        { icon: <FaHtml5 />, title: "HTML5" },
        { icon: <FaCss3Alt />, title: "CSS3" },
        { icon: <SiTailwindcss />, title: "Tailwind CSS" },
        { icon: <SiStyledcomponents />, title: "Styled Components" },
        { icon: <SiShadcnui />, title: "Shadcn Ui" },
        { icon: <SiChakraui />, title: "Chakra UI" },
      ]
    },
    {
      title: "BACK-END",
      description: "Developing robust server-side applications and managing databases for scalable solutions.",
      skills: [
        { icon: <SiNodedotjs />, title: "Node.js" },
        { icon: <SiPostgresql />, title: "PostgreSQL" },
        { icon: <SiMongodb />, title: "MongoDB" },
        { icon: <SiFirebase />, title: "Firebase" },
        { icon: <SiDocker />, title: "Docker" },
      ]
    },
    {
      title: "MOBILE",
      description: "Creating cross-platform mobile applications with a focus on performance and user experience.",
      skills: [
        { icon: <SiReactrouter />, title: "React Native" },
        { icon: <SiJavascript />, title: "JavaScript" },
        { icon: <SiTypescript />, title: "TypeScript" },
      ]
    },
    {
      title: "OTHERS",
      description: "Utilizing various tools and technologies to enhance productivity and deliver solutions.",
      skills: [
        { icon: <SiFigma />, title: "Figma" },
        { icon: <FaGitAlt />, title: "Git" },
        { icon: <FaGithub />, title: "GitHub" },
        { icon: <SiJira />, title: "Jira" },
        { icon: <FaChartBar />, title: "Power BI" },
        { icon: <SiMicrosoftexcel />, title: "Excel" },
        { icon: <SiGooglesheets />, title: "Google Sheets" },
        { icon: <FaDatabase />, title: "Data Analysis" },
        { icon: <SiScikitlearn />, title: "Scikit-learn" },
      ]
    }
  ];

  return (
    <section className="min-h-screen px-6 md:px-24 py-16 gap-10 flex flex-col bg-[#1a1a24] mx-6 md:mx-16 rounded-2xl" id="skills">
      <h2 className="font-extralight text-2xl text-center md:text-left">My <strong className="font-semibold">Skills</strong></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2 text-gradient">{category.title}</h3>
              <p className="font-extralight text-base md:text-xl">{category.description}</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <SkillCard key={skill.title} icon={skill.icon} title={skill.title} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center group hover:bg-white dark:hover:bg-gray-800 p-3 rounded-lg transition-colors shadow-sm hover:shadow-md">
      <div className="text-3xl md:text-4xl text-violet-400 mb-2 group-hover:scale-110 transition-transform">{icon}</div>
      <p className="text-sm md:text-base font-light text-center text-gray-700 dark:text-gray-300">{title}</p>
    </div>
  );
}

