import { Github, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Tours App",
      description:
        "React application that fetches tour data from an API and allows users to browse and remove tours dynamically. Features include loading states, error handling, and responsive card layouts.",
      image:
        "https://images.unsplash.com/photo-1771085613088-dd436e17d75e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB0b3VycyUyMHZhY2F0aW9uJTIwdHJvcGljYWx8ZW58MXx8fHwxNzczNzczODA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "JavaScript", "API Integration", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Meals App",
      description:
        "React application using Context API and useReducer for managing meals and cart functionality. Implements complex state management patterns with clean component architecture.",
      image:
        "https://images.unsplash.com/photo-1762922425226-8cfe6987e7b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbWVhbHMlMjByZXN0YXVyYW50JTIwZGluaW5nfGVufDF8fHx8MTc3Mzc3MzgwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Context API", "useReducer", "JavaScript"],
      github: "#",
      demo: "#",
    },
    // was here
    {
      title: "Cocktail Website",
      description:
        "A web application that fetches cocktail data from an API and allows users to explore different drinks. Features search functionality, detailed drink information, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1681579289844-cc57e4d60e10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbHMlMjBkcmlua3MlMjBiYXIlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzM3NzM4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "API Integration", "JavaScript", "CSS"],
      github: "https://github.com/JCLthatlittlerat/cocktails-website.git",
      demo: "https://cocktails-collection.netlify.app/",
    },
    {
      title: "Etran Mobile Application",
      description:
        "A modern money transfer mobile application UI concept designed to simplify sending and receiving money. Features intuitive navigation, transaction history, and secure payment flows.",
      image:
        "https://images.unsplash.com/photo-1726056652605-c4cf751ec0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwYXltZW50JTIwZmludGVjaCUyMGFwcHxlbnwxfHx8fDE3NzM3NzM4MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Mobile UI", "JavaScript", "Responsive Design"],
      github: "https://github.com/JCLthatlittlerat/etran-trustworthy-app.git",
      demo: "https://etran-trustworthy-app.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            A selection of recent projects showcasing my skills in modern web
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-secondary">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors border border-border"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
