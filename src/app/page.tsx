"use client";

import { Button } from "antd";
import { Award, Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import {
  ExperienceSection,
  HeroSection,
  SkillSection,
  TetrisBlock,
  TetrisL,
  TetrisLine,
  TetrisSquare,
  TetrisT,
} from "./components";
import { contactInfo } from "./constants";

export default function TetrisPortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden scroll-smooth font-mono">
      <TetrisL className="top-10 right-20 opacity-80" />
      <TetrisT className="top-32 right-40 opacity-60" />
      <TetrisSquare className="top-20 left-20 opacity-70" />
      <TetrisLine className="top-60 right-10 opacity-50" vertical />
      <TetrisL className="bottom-40 left-10 opacity-60 rotate-90" />
      <TetrisT className="bottom-20 right-60 opacity-70 rotate-180" />
      <TetrisSquare className="bottom-60 right-20 opacity-50" />
      <TetrisLine className="bottom-10 left-40 opacity-60" />
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
              <h1 className="text-xl font-bold ">PORTFOLIO</h1>
              <p className="text-xs text-orange-400 ">DEVELOPER</p>
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
        <HeroSection />
        {/* <section id="about" className="mb-20">
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
        </section> */}
        <SkillSection />
        <ExperienceSection />
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
                <p className="text-sm text-orange-400 ">MAY 2022</p>
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
                <p className="text-sm text-orange-400 ">AUG 2022</p>
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
              <Button
                className="!border-orange-500 !text-orange-400 hover:!bg-orange-500 hover:!text-white !px-8 !py-3 !bg-transparent !font-mono"
                href={`${contactInfo.linkedin_url}`}
                target="_blank"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LINKEDIN
              </Button>
              <Button
                // variant="outline"
                className="!border-orange-500 !text-orange-400 hover:!bg-orange-500 hover:!text-white !px-8 !py-3 !bg-transparent !font-mono"
                href={`${contactInfo.github_url}`}
                target="_blank"
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
          <p className="text-gray-400 ">
            © 2024 NGUYEN_DINH_MINH_TRI.exe - ALL_RIGHTS_RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
}
