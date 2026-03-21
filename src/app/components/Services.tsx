import { Layout, Smartphone, FileCode, Boxes, Wrench, Code2 } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Layout,
      title: "Responsive Website Development",
      description: "Building mobile-first, responsive websites that work seamlessly across all devices and screen sizes."
    },
    {
      icon: Smartphone,
      title: "Landing Page Development",
      description: "Creating high-converting landing pages with modern design and optimized user experience."
    },
    {
      icon: FileCode,
      title: "Figma to HTML/CSS Conversion",
      description: "Pixel-perfect conversion of Figma designs into clean, semantic HTML and CSS code."
    },
    {
      icon: Boxes,
      title: "React Web Applications",
      description: "Developing dynamic, interactive web applications using React and modern JavaScript."
    },
    {
      icon: Wrench,
      title: "Website UI Improvements",
      description: "Enhancing existing websites with improved user interfaces and modern design patterns."
    },
    {
      icon: Code2,
      title: "Bug Fixes & Maintenance",
      description: "Identifying and resolving frontend issues, ensuring smooth website performance."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Offering professional web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <h3 className="mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
