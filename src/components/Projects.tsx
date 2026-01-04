import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { useEffect, useRef } from "react";

const Projects = () => {
  const featuredProjects = projects.filter(p => !p.isRecent);
  const hasScrolledRef = useRef(false);

  useEffect(() => {
    // Restore scroll position when component mounts
    const savedScrollPosition = sessionStorage.getItem('portfolioScrollPosition');
    
    if (savedScrollPosition && !hasScrolledRef.current) {
      hasScrolledRef.current = true;
      
      // Wait for images to load and layout to stabilize
      const timeouts = [
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedScrollPosition, 10),
            behavior: 'instant' as ScrollBehavior
          });
        }, 0),
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedScrollPosition, 10),
            behavior: 'instant' as ScrollBehavior
          });
        }, 50),
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedScrollPosition, 10),
            behavior: 'smooth'
          });
          // Clear after final scroll
          sessionStorage.removeItem('portfolioScrollPosition');
        }, 150)
      ];

      return () => timeouts.forEach(clearTimeout);
    }
  }, []);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my work showcasing innovation in industrial design and product development
          </p>
        </div>
        
        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;