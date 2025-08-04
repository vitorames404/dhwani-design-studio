import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <Button 
            onClick={() => navigate("/")} 
            variant="ghost" 
            className="mb-8 hover:text-accent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="project-number mb-6">{project.number}</div>
              <h1 className="text-5xl md:text-6xl font-black mb-4">{project.title}</h1>
              <h2 className="text-2xl text-accent font-semibold mb-6">{project.subtitle}</h2>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                  <Tag className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{project.type}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{project.duration}</span>
                </div>
              </div>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Project Description */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold mb-6">Project Overview</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.fullDescription}
              </p>
            </section>

            {/* Image Gallery */}
            {project.detailImages && project.detailImages.length > 1 && (
              <section className="mb-16">
                <h3 className="text-3xl font-bold mb-8">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.detailImages.map((image, index) => (
                    <Card key={index} className="overflow-hidden border-0 shadow-lg hover-lift">
                      <CardContent className="p-0">
                        <img 
                          src={image} 
                          alt={`${project.title} detail ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Key Features */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold mb-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Outcomes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
              <section>
                <h3 className="text-2xl font-bold mb-6">Challenges</h3>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{challenge}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold mb-6">Outcomes</h3>
                <div className="space-y-4">
                  {project.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Skills */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-center">
              <Button 
                onClick={() => navigate("/")} 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4"
              >
                Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;