import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import RecentProject from "@/components/RecentProject";
import Contact from "@/components/Contact";
import ThemeConcept from "@/components/ThemeConcept";
import FloatingCube from "@/components/FloatingCube";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingCube />
      <Hero />
      <About />
      <RecentProject />
      <Projects />
      <ThemeConcept />
      <Contact />
    </div>
  );
};

export default Index;