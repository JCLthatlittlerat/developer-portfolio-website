import { Code2, Heart } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Developer
              </span>
            </div>
            <p className="text-muted-foreground">
              Building modern web experiences with clean code and attention to detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>hello@developer.com</p>
              <p>+1 (555) 123-4567</p>
              <p>Available for Remote Work</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Front-End Developer. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and code
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
