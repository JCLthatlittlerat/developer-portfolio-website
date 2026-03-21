import { useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { GithubActivity } from "./components/GitHubActivity";

export default function App() {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubActivity />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
