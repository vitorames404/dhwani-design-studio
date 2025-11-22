import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const RecentProject = () => {
  const recentProjects = projects.filter(p => p.isRecent);

  if (recentProjects.length === 0) return null;

  return (
    <section id="recent-projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A more detailed look at my most recent work
          </p>
        </div>

        <div className="space-y-32">
          {recentProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProject;
