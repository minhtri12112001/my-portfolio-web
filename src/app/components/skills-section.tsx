import { Badge } from "antd";
import {
  Code,
  Database,
  Wrench,
  GraduationCap,
  Server,
  BotMessageSquare,
} from "lucide-react";

const skills = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="w-6 h-6" />,
    skills: ["Typescript", "Python", "Next.js", "NestJS", "Flask"],
  },
  {
    title: "Back-end",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "Prisma", "Supabase", "Redis", "Kafka"],
  },
  {
    title: "DevOps",
    icon: <Server className="w-6 h-6" />,
    skills: [
      "AWS Cloud Infrastructure",
      "Docker",
      "CI/CD Pipelines",
      "Kubernetes",
      "Grafana",
      "Prometheus",
      "Terraform",
      "CloudFlare",
    ],
  },
  {
    title: "AI",
    icon: <BotMessageSquare className="w-6 h-6" />,
    skills: ["Langchain", "CrewAI", "Vectors & RAG", "AI Agents"] ,
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      "Git",
      "Postman",
    ],
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
            className="bg-gray-800 p-6 rounded-lg border border-orange-500/30 hover:border-orange-400 transition-colors h-[202px]"
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
