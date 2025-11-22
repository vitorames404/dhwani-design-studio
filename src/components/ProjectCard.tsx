import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";
import { useNavigate } from "react-router-dom";
import { Tag, Trophy } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const navigate = useNavigate();
  const isBoxie = project.id === "boxie";

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center cursor-pointer group ${
        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
      }`}
      onClick={handleClick}
    >
      <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
        <div className="project-number mb-6 text-accent/70">
          {project.number}
        </div>

        <h3 className="text-3xl text-gray-400 md:text-4xl font-bold mb-2 dark:group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>

        {/* subtitle + date badge */}
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <h4 className="text-xl text-accent font-semibold m-0">
            {project.subtitle}
          </h4>

          {project.duration && (
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide
                           border border-accent/30 bg-accent/10 text-accent"
            >
              <time>{project.duration}</time>
            </span>
          )}
        </div>

        <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
          {project.description}
        </p>

        {/* categories (one or many) */}
        <div className="flex flex-wrap gap-2 text-sm mb-6">
          {(Array.isArray(project.type) ? project.type : [project.type]).map(
            (cat, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted rounded-full"
              >
                {cat === "Award Winning Project" ? (
                  <Trophy className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <Tag className="w-3.5 h-3.5 text-accent" />
                )}
                {cat}
              </span>
            )
          )}
        </div>

        <div className="text-accent font-medium group-hover:translate-x-2 transition-transform duration-300">
          View Project Details →
        </div>
      </div>

      <div
        className={`${
          index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
        }`}
      >
        <Card className="hover-lift overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-0">
            <div
              className={`relative w-full ${
                isBoxie ? "aspect-[16/9]" : "aspect-[4/3]"
              } max-h-[450px]`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className={`absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-300 ${
                  isBoxie ? "object-contain" : "object-cover"
                }`}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
