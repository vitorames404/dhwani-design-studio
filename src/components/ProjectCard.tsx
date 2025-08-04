import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center cursor-pointer group ${
      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
    }`} onClick={handleClick}>
      <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
        <div className="project-number mb-6">{project.number}</div>
        <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <h4 className="text-xl text-accent font-semibold mb-6">{project.subtitle}</h4>
        <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 text-sm mb-6">
          <span className="px-3 py-1 bg-muted rounded-full">{project.type}</span>
          <span className="px-3 py-1 bg-muted rounded-full">{project.duration}</span>
        </div>
        <div className="text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
          View Project Details →
        </div>
      </div>
      
      <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <Card className="hover-lift overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-0">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;