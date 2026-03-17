import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Outstanding work! The website exceeded our expectations. Clean code, beautiful design, and delivered on time. Highly recommend for any web development project.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager, Digital Solutions",
      content: "Professional, responsive, and detail-oriented. Transformed our Figma designs into a pixel-perfect website. Great communication throughout the project.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Creative Studio",
      content: "Exceptional front-end skills! Built a beautiful, responsive landing page that significantly improved our conversion rate. Will definitely work together again.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-card rounded-xl border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-blue-400" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
