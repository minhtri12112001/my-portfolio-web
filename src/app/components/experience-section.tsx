import { Tooltip } from "antd";
import { Calendar } from "lucide-react";

const workExperiences = [
  {
    company: "MEETEDGE TM",
    url: "https://www.meetedge.ai/",
    type: "Startup Company",
    location: "Remote, Olso, Norway",
    role: "Full-stack Developer",
    period: "Feb 2023 - May 2023",
    project: "MeedEdge AI Lead Generation & Sales Platform",
    tech: "Next.js, Zustand, NestJS, Flask, Supabase, LangChain, OpenAI, AWS",
    description:
      "- Participated in R&D process to identify SME business insights, pain points, and platform differentiation strategies.\n- Conducted technical assessments and architecture planning for platform development.\n- Designed and implemented database schema for user, organization, company, staff management, etc.\n- Built AI-powered recommendation system for company and personnel matching using Flask and Langchain.\n- Established CI/CD pipeline for rapid deployment to production and staging environments.\n- Monitored system performance and debugged server-side issues across multiple environments.",
  },
  {
    company: "BLACKWIND SOFTWARE",
    type: "Startup Company",
    location: "Ho Chi Minh City, Vietnam",
    role: "Full-stack Developer (React Native, ExpressJS)",
    period: "Feb 2023 - May 2023",
    project: "ZoBook App",
    tech: "React Native, MSSQL, ExpressJS",
    description:
      "- Built mobile applications using React Native, ExpressJS, and MSSQL.\n- Implemented user authentication, account management, and payment flows.\n- Designed APIs connecting mobile applications with MSSQL database for business operations.\n- Optimized application performance through error handling and continuous monitoring",
  },
  {
    company: "METASTREAM TM",
    type: "Outsourcing Company",
    location: "Ho Chi Minh City, Vietnam",
    role: "Full-stack Developer (Next.js, ExpressJS)",
    period: "Feb 2023 - May 2023",
    project: "Aura Beauty Clinic ERP System",
    tech: "Next.js, Redux, Supabase, ExpressJS",
    description:
      "- Developed web-based ERP system UI from existing Figma designs using Next.js, TailwindCSS and Ant Design.\n- Built APIs for data extraction including customer management, inventory, scheduling, and task allocation.\n- Deployed system with CI/CD pipeline on AWS infrastructure",
  },
  {
    company: "KYANON DIGITAL",
    type: "Outsourcing Company",
    location: "Ho Chi Minh City, Vietnam",
    role: "Software Engineer (React Native)",
    period: "Sep 2022 - February 2023",
    project: "NOM App",
    tech: "React Native, Redux, Firebase",
    description: `- Developed React Native mobile application from Figma designs and integrated with Drupal CMS APIs.\n- Fixed critical bugs affecting user experience in shopping and livestreaming features.\n- Implemented real-time user interfaces and enhanced user interaction elements`,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-20">
      <h2 className="text-4xl font-bold mb-8 text-center">
        <span className="text-orange-400">WORK</span> EXPERIENCE
      </h2>
      <div className="space-y-8">
        {workExperiences.map((job, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg border border-orange-500/30"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <Tooltip
                  rootClassName="[&_.ant-tooltip-inner]:!border [&_.ant-tooltip-inner]:!border-orange-500/30 [&_.ant-tooltip-inner]:!bg-gray-800 [&_.ant-tooltip-inner]:!bg-gray-800 font-mono"
                  title={job.url ? "Click to visit project's site" : ""}
                >
                  <a href={job.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-2xl font-bold text-orange-400 hover:text-white hover:drop-shadow-[0_0_8px_theme(colors.orange.400)] transition-colors">
                      {job.company}
                    </h3>
                  </a>
                </Tooltip>
                <p className="text-xl text-gray-300">{job.role}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-orange-400">
                  <Calendar className="w-4 h-4" />
                  <span className=" text-sm">{job.period}</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <p>
                <span className="text-orange-400 font-semibold">PROJECT:</span>{" "}
                {job.project}
              </p>
              <p>
                <span className="text-orange-400 font-semibold">
                  TECH STACK:
                </span>{" "}
                {job.tech}
              </p>
              <p className="text-gray-300 whitespace-pre-line">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
