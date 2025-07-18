"use client";

import type React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Calendar,
  Award,
  GraduationCap,
  Code,
  Database,
  Server,
  Wrench,
  Play,
  Download,
} from "lucide-react";
import { Badge, Button } from "antd";
import {
  TetrisBlock,
  TetrisL,
  TetrisLine,
  TetrisSquare,
  TetrisT,
} from "./components";

export default function TetrisPortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden scroll-smooth">
      {/* Tetris Blocks Background */}
      <TetrisL className="top-10 right-20 opacity-80" />
      <TetrisT className="top-32 right-40 opacity-60" />
      <TetrisSquare className="top-20 left-20 opacity-70" />
      <TetrisLine className="top-60 right-10 opacity-50" vertical />
      <TetrisL className="bottom-40 left-10 opacity-60 rotate-90" />
      <TetrisT className="bottom-20 right-60 opacity-70 rotate-180" />
      <TetrisSquare className="bottom-60 right-20 opacity-50" />
      <TetrisLine className="bottom-10 left-40 opacity-60" />

      {/* Header */}
      <header className="relative z-10 p-6 border-b border-orange-500/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="grid grid-cols-2 gap-1">
              <TetrisBlock className="w-4 h-4" />
              <TetrisBlock className="w-4 h-4" />
              <TetrisBlock className="w-4 h-4" />
              <TetrisBlock className="w-4 h-4" />
            </div>
            <div>
              <h1 className="text-xl font-bold">PORTFOLIO</h1>
              <p className="text-xs text-orange-400">DEVELOPER</p>
            </div>
          </div>
          <nav className="flex gap-8">
            <a
              href="#about"
              className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer hover:scale-105 transform duration-200"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer hover:scale-105 transform duration-200"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              SKILLS
            </a>
            <a
              href="#experience"
              className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer hover:scale-105 transform duration-200"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("experience")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              EXPERIENCE
            </a>
            <a
              href="#contact"
              className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer hover:scale-105 transform duration-200"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-400 mb-4 uppercase tracking-wide">
                Ready to build something amazing?
              </p>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                I AM
                <br />
                <span className="text-orange-400">MINH TRI</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                FULL-STACK DEVELOPER
                <br />
                <span className="text-orange-400">CORRECTLY</span>
              </p>
              <div className="flex gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  <Play className="w-4 h-4 mr-2" />
                  VIEW PROJECTS
                </Button>
                <Button
                  // variant="outline"
                  className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 bg-transparent"
                >
                  <Download className="w-4 h-4 mr-2" />
                  DOWNLOAD CV
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800 p-6 rounded-lg border border-orange-500/30 relative">
                <div className="absolute -top-4 left-6 bg-gray-800 px-4 py-1 border border-orange-500/30 rounded">
                  <span className="text-orange-400 text-sm">
                    CONTACT_INFO.exe
                  </span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-orange-400" />
                    <span>(+84) 905648525</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-orange-400" />
                    <span>trimdm211@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-orange-400" />
                    <span>github.com/minhtri21112001</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span>Nha Trang City, Vietnam</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="bg-gray-800 p-8 rounded-lg border border-orange-500/30 relative">
            <div className="absolute -top-4 left-6 bg-gray-800 px-4 py-1 border border-orange-500/30 rounded">
              <span className="text-orange-400 text-sm">
                CAREER_OBJECTIVE.txt
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Tri is a skilled engineer with experience in both a software
              outsourcing company and a startup. He has worked on diverse
              projects,{" "}
              <span className="text-orange-400 font-semibold">
                gaining valuable insights
              </span>{" "}
              and honing his technical expertise. Now, he is seeking new
              challenges to further grow and contribute his skills.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-orange-400">TECHNICAL</span> SKILLS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "MOBILE DEV",
                icon: <Code className="w-6 h-6" />,
                skills: [
                  "Java",
                  "Android",
                  "Javascript",
                  "Typescript",
                  "React Native",
                ],
              },
              {
                title: "WEB DEV",
                icon: <Server className="w-6 h-6" />,
                skills: ["HTML", "CSS", "ReactJS", "NextJS", "TailwindCSS"],
              },
              {
                title: "BACKEND",
                icon: <Database className="w-6 h-6" />,
                skills: [
                  "NodeJS",
                  "ExpressJS",
                  "SQLite",
                  "MySQL",
                  "Firebase",
                  "MongoDB",
                ],
              },
              {
                title: "DEVOPS",
                icon: <Server className="w-6 h-6" />,
                skills: [
                  "BashScript",
                  "Linux",
                  "AWS",
                  "CloudFlare",
                  "Docker",
                  "Jenkins",
                ],
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
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg border border-orange-500/30 hover:border-orange-400 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-orange-400">{category.icon}</div>
                  <h3 className="font-bold text-orange-400">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className="bg-orange-500/20 text-orange-300 border-orange-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-orange-400">WORK</span> EXPERIENCE
          </h2>
          <div className="space-y-8">
            {[
              {
                company: "METASTREAM TM",
                role: "Full-stack Developer",
                period: "Feb 2023 - May 2023",
                project: "Aura Beauty Clinic ERP System",
                tech: "NextJS, Supabase, ExpressJS, Ghost CMS, Strapi CMS",
                description:
                  "Designed and implemented user interfaces and user experiences for company staff members and customers. Deployed and operated database systems, search system and other related management systems.",
              },
              {
                company: "KYANON DIGITAL",
                role: "Software Engineer (React Native)",
                period: "Sep 2022 - Jan 2023",
                project: "MOM App",
                tech: "React Native, Drupal CMS, WebSocket, Agora",
                description:
                  "Fixed bugs affecting user experiences when interacting with screens relating to shop, products, articles and livestreaming. Designed and implemented user interfaces and user experiences when interacting with elements relating to livestreaming.",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-lg border border-orange-500/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-400">
                      {job.company}
                    </h3>
                    <p className="text-xl text-gray-300">{job.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-orange-400">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">{job.period}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <p>
                    <span className="text-orange-400 font-semibold">
                      PROJECT:
                    </span>{" "}
                    {job.project}
                  </p>
                  <p>
                    <span className="text-orange-400 font-semibold">
                      TECH STACK:
                    </span>{" "}
                    {job.tech}
                  </p>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Certificates */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-orange-500/30">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold text-orange-400">
                  ACHIEVEMENTS
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">
                  Academic Scholarship - 1st Semester 2022
                </p>
                <p className="text-sm text-orange-400 font-mono">MAY 2022</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-orange-500/30">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold text-orange-400">
                  CERTIFICATES
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">
                  IELTS 6.5 Overall (CEFR Level B2)
                </p>
                <p className="text-sm text-orange-400 font-mono">AUG 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-orange-400">GET IN</span> TOUCH
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg border border-orange-500/30 text-center">
            <p className="text-xl text-gray-300 mb-6">
              {`Ready to work together? Let's connect!`}
            </p>
            <div className="flex justify-center gap-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <Mail className="w-4 h-4 mr-2" />
                EMAIL ME
              </Button>
              <Button
                // variant="outline"
                className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 bg-transparent"
              >
                <Github className="w-4 h-4 mr-2" />
                GITHUB
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-orange-500/30 p-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 font-mono">
            © 2024 NGUYEN_DINH_MINH_TRI.exe - ALL_RIGHTS_RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
