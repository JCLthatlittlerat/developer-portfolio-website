import { ArrowRight, Code2 } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/20">
            <Code2 className="w-12 h-12 text-blue-400" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Front-End Developer, Building Modern Web Experiences
        </h1>

        {/* Introduction */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          I craft beautiful, responsive websites and web applications with clean
          code and attention to detail. Transforming ideas into engaging digital
          experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-secondary/50 text-foreground rounded-lg hover:bg-secondary transition-all duration-300 backdrop-blur-sm border border-border"
          >
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto relative">
            <div className="w-1.5 h-2 bg-blue-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
