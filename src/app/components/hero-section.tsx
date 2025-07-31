import { Button } from "antd";
import {
  BookMarked,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Play,
} from "lucide-react";
import { contactInfo } from "../constants";

const infos = [
  {
    id: "phone",
    icon: <Phone className="w-4 h-4 text-orange-400" />,
    label: contactInfo.phone,
  },
  {
    id: "email",
    icon: <Mail className="w-4 h-4 text-orange-400" />,
    label: contactInfo.email,
  },
  {
    id: "github",
    icon: <Github className="w-4 h-4 text-orange-400" />,
    label: contactInfo.github_url,
  },
  {
    id: "address",
    icon: <MapPin className="w-4 h-4 text-orange-400" />,
    label: contactInfo.address,
  },
  {
    id: "major",
    icon: <BookMarked className="w-4 h-4 text-orange-400" />,
    label: contactInfo.major,
  },
  {
    id: "university",
    icon: <GraduationCap className="w-4 h-4 text-orange-400" />,
    label: contactInfo.university,
  },
];

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
          <p className="text-xl mb-8 text-gray-300 font-semibold">
            {contactInfo.title.toUpperCase()}
          </p>
          <div className="flex gap-4">
            {/* <Button className="!bg-orange-500 hover:!bg-orange-600 !text-white !px-8 !border-none !font-semibold !font-mono">
              <Play className="w-4 h-4 mr-2" />
              VIEW PROJECTS
            </Button> */}
            <Button
              className="!w-82 !border-orange-500 !text-orange-400 hover:!bg-orange-500 hover:!text-white !px-8 !py-3 !bg-transparent !font-semibold !font-mono"
              download
              href="/Resume_NguyenDinhMinhTri.pdf"
            >
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
              {infos.map((info) => {
                return (
                  <div key={info.id} className="flex items-center gap-3">
                    {info.icon}
                    <span>{info.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
