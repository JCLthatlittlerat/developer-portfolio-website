import { useEffect, useRef, useState } from "react";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { FaUpwork, FaLinkedin, FaGithub } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { useDataContext } from "../../contextProvider/context";
export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "hey👋, let's connect?",
  });
  const { submitted, setSubmitted } = useDataContext();
  const form = useRef<HTMLFormElement | null>(null);
  const service_id = import.meta.env.VITE_SERVICE_ID;
  const template_id = import.meta.env.VITE_TEMPLATE_ID;
  const public_ky = import.meta.env.VITE_PUBLIC_KEY;
  useEffect(() => {
    // wait for 3second for message to be displayed
    const timerId = setTimeout(() => {
      setSubmitted(false);
    }, 3000);
    // clear the timeout
    if (!submitted) {
      clearTimeout(timerId);
    }
  }, [submitted, setSubmitted]);
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Replace with your actual IDs from EmailJS dashboard
    if (!form.current) {
      return;
    }

    setSubmitted(true); // Trigger the popup
    emailjs.sendForm(service_id, template_id, form.current, public_ky).then(
      () => {
        // alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "hey👋, let's connect?",
        });

        // e.target.reset(); // Reset the form after submission
      },
      (error) => {
        alert(`Failed to send message. ${error.message}`);
      },
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:olyadnegero@gmail.com"
                    title="connect with olyad!"
                  >
                    <p>olyadnegero@gmail.com</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p>+(251)935033357</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>Available for Remote Work</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <h3 className="text-xl mb-6">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors border border-border hover:border-blue-500/50 group"
                title="link to github repo"
              >
                <FaGithub className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors border border-border hover:border-blue-500/50 group"
                title="link to linkedin repo"
              >
                <FaLinkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0143d939d5369b7bbc?mp_source=share"
                target="_blank"
                className="p-4 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors border border-border hover:border-blue-500/50 group"
                title="link to upwork repo"
              >
                <FaUpwork className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <article>
            <form onSubmit={handleSubmit} ref={form} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  "Thanks for reaching out! I'll get back to you soon."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
