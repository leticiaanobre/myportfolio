import { SiJavascript, SiTypescript, SiReact, SiPostgresql, SiPython, SiScikitlearn, SiTailwindcss, SiStyledcomponents, SiFigma, SiJira, SiMongodb, SiFirebase, SiPowerbi, SiGooglesheets } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDatabase, FaFileExcel } from "react-icons/fa";

export default function Skills() {
  return (
    <section className="w-full min-h-screen px-6 md:px-24 py-16 gap-10 flex flex-col" id="skills">
      <p className="font-extralight text-2xl text-center md:text-left">My <strong>skills</strong></p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <SkillCard icon={<SiJavascript />} title="JavaScript" />
        <SkillCard icon={<SiTypescript />} title="TypeScript" />
        <SkillCard icon={<SiReact />} title="ReactJS" />
        <SkillCard icon={<SiPostgresql />} title="PostgreSQL" />
        <SkillCard icon={<SiPython />} title="Python" />
        <SkillCard icon={<SiScikitlearn />} title="Scikit-learn" />
        <SkillCard icon={<FaHtml5 />} title="HTML5" />
        <SkillCard icon={<FaCss3Alt />} title="CSS3" />
        <SkillCard icon={<SiTailwindcss />} title="Tailwind CSS" />
        <SkillCard icon={<SiStyledcomponents />} title="Styled Components" />
        <SkillCard icon={<SiFigma />} title="Figma" />
        <SkillCard icon={<FaGitAlt />} title="Git" />
        <SkillCard icon={<FaGithub />} title="GitHub" />
        <SkillCard icon={<SiJira />} title="Jira" />
        <SkillCard icon={<SiMongodb />} title="MongoDB" />
        <SkillCard icon={<SiFirebase />} title="Firebase" />
        <SkillCard icon={<SiPowerbi />} title="Power BI" />
        <SkillCard icon={<FaFileExcel />} title="Excel" />
        <SkillCard icon={<SiGooglesheets />} title="Google Sheets" />
        <SkillCard icon={<FaDatabase />} title="Data Analysis" />
      </div>
    </section>
  );
}

function SkillCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl text-gradient mb-4">{icon}</div>
      <p className="text-lg md:text-xl font-light text-center">{title}</p>
    </div>
  );
}
