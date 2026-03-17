import { Smartphone, Cloud } from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaLink,
  FaCode,
} from "react-icons/fa";
import { MdApi } from "react-icons/md";
export function Skills() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "from-orange-500 to-red-500" },
    { name: "CSS", icon: FaCss3, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: FaJs, color: "from-yellow-500 to-amber-500" },
    { name: "React", icon: FaReact, color: "from-cyan-500 to-blue-500" },
    { name: "Git", icon: FaGit, color: "from-red-500 to-orange-500" },
    {
      name: "Responsive Design",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "API Integration",
      icon: MdApi,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div
                  className={`p-4 bg-gradient-to-br ${skill.color} bg-opacity-10 rounded-xl group-hover:scale-110 transition-transform`}
                >
                  <skill.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-sm sm:text-base">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
