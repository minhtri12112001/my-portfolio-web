import { Button } from "antd";
import { Play, Download, Phone, Mail, Github, MapPin } from "lucide-react";
import { contactInfo } from "../constants";

export const HeroSection = () => {
  return (
    <section className="mb-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-orange-400 mb-4 uppercase tracking-wide">
            Ready to build something amazing?
          </p>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            I AM
            <br />
            <span className="text-orange-400">
              {contactInfo.name.toUpperCase()}
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            {contactInfo.title.toUpperCase()}
          </p>
          <div className="flex gap-4">
            <Button className="!bg-orange-500 hover:!bg-orange-600 !text-white !px-8 !border-none !font-semibold !font-mono">
              <Play className="w-4 h-4 mr-2" />
              VIEW PROJECTS
            </Button>
            <Button className="!border-orange-500 !text-orange-400 hover:!bg-orange-500 hover:!text-white !px-8 !py-3 !bg-transparent !font-semibold !font-mono">
              <Download className="w-4 h-4 mr-2" />
              DOWNLOAD CV
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gray-800 p-6 rounded-lg border border-orange-500/30 relative">
            <div className="absolute -top-4 left-6 bg-gray-800 px-4 py-1 border border-orange-500/30 rounded">
              <span className="text-orange-400 text-sm">CONTACT_INFO.exe</span>
            </div>
            <div className="space-y-4  text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-orange-400" />
                <span>{contactInfo.github_url}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
