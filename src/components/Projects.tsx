import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  const featuredProjects = projects.filter(p => !p.isRecent);

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
