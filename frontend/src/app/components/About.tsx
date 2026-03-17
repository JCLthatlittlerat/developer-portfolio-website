import { Target, Zap, Eye } from "lucide-react";

export function About() {
  const strengths = [
    {
      icon: Target,
      title: "Problem Solving",
      description:
        "Breaking down complex challenges into elegant, maintainable solutions",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Building fast, optimized applications that deliver exceptional user experiences",
    },
    {
      icon: Eye,
      title: "Attention to Detail",
      description:
        "Pixel-perfect implementations with clean, semantic code structure",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate front-end developer dedicated to creating modern,
              user-friendly web interfaces that make a difference. With
              expertise in modern JavaScript frameworks and a keen eye for
              design, I transform creative concepts into functional, beautiful
              digital products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My focus is on writing clean, maintainable code while ensuring
              responsive design, optimal performance, and seamless user
              experiences across all devices. I believe great web development is
              where technical excellence meets thoughtful design.
            </p>
          </div>

          {/* Strengths */}
          <div className="grid gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg group-hover:scale-110 transition-transform">
                    <strength.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="mb-2">{strength.title}</h3>
                    <p className="text-muted-foreground">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
