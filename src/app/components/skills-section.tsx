import { Badge } from "antd";
import { Code, Database, Wrench, GraduationCap, Server } from "lucide-react";

const skills = [
  {
    title: "MOBILE DEV",
    icon: <Code className="w-6 h-6" />,
    skills: ["Java", "Android", "Javascript", "Typescript", "React Native"],
  },
  {
    title: "WEB DEV",
    icon: <Server className="w-6 h-6" />,
    skills: ["HTML", "CSS", "ReactJS", "NextJS", "TailwindCSS"],
  },
  {
    title: "BACKEND",
    icon: <Database className="w-6 h-6" />,
    skills: ["NodeJS", "ExpressJS", "SQLite", "MySQL", "Firebase", "MongoDB"],
  },
  {
    title: "DEVOPS",
    icon: <Server className="w-6 h-6" />,
    skills: ["BashScript", "Linux", "AWS", "CloudFlare", "Docker", "Jenkins"],
  },
  {
    title: "TOOLS",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      "Git",
      "Gitlab",
      "Jaga",
      "Trello",
      "Postman",
      "Reactotron",
      "Figma",
    ],
  },
  {
    title: "EDUCATION",
    icon: <GraduationCap className="w-6 h-6" />,
    skills: ["VNU-UIT", "E-Commerce", "GPA: 7.7/10", "2019-2023"],
  },
];

export const SkillSection = () => {
  return (
    <section id="skills" className="mb-20">
      <h2 className="text-4xl font-bold mb-8 text-center">
        <span className="text-orange-400">TECHNICAL</span> SKILLS
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg border border-orange-500/30 hover:border-orange-400 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-orange-400">{category.icon}</div>
              <h3 className="font-bold text-orange-400">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  className="!bg-orange-500/20 !text-orange-300 !border-orange-500/30 !px-2 !py-1 rounded !font-mono"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
