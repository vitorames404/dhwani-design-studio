import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Tag, X, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // <-- add this
import { useEffect, useMemo, useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === id);

  // -------- Lightbox state ----------
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Build a flat images array: prefer detailImages, fall back to hero image
  const images = useMemo(() => {
    if (!project) return [];
    if (project.detailImages && project.detailImages.length > 0) return project.detailImages;
    return project.image ? [project.image] : [];
  }, [project]);

  const next = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  // Keyboard navigation
  useEffect(() => {

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, images.length]);

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
              <div className="project-number mb-6 text-accent/70">{project.number}</div>
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
                {project.awardLabel && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                    <Trophy className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{project.awardLabel}</span>
                  </div>
                )}
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
      <div className="pt-12 pb-24">   {/* less space above, keep padding below */}
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Project Description */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold mb-6">Project Overview</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.fullDescription}
              </p>
            </section>
 
            <section className="mb-16 mt-0">   {/* remove big margin top */}
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>


            {/* Image Gallery */}
            {images.length > 0 && (
              <section className="mb-16">
                <h3 className="text-3xl font-bold mb-8">Project Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => { setActiveIndex(index); setLightboxOpen(true); }}
                      className="text-left group focus:outline-none w-full max-w-[300px]"
                      aria-label={`Open image ${index + 1} of ${images.length}`}
                    >
                      <Card className="overflow-hidden border-0 shadow-lg hover-lift">
                        <CardContent className="p-0">
                          <div className="relative w-full aspect-[4/3]">
                            <img
                              src={image}
                              alt={`${project.title} detail ${index + 1}`}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </button>
                  ))}
                </div>
              </section>
            )}

            {/* Key Features */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold mb-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
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

      {/* -------- Lightbox Dialog -------- */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] p-0 bg-background/95">
          {/* Top bar with close */}
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-muted-foreground">
              {images.length > 0 ? `${activeIndex + 1} / ${images.length}` : ""}
            </span>
          </div>

          {/* Image area */}
          <div className="relative w-full h-full sm:h-[80vh] bg-black/80 flex items-center justify-center">
            {/* Prev */}
            {images.length > 1 && (
              <button
                onClick={prev}
                className="absolute left-2 sm:left-4 p-2 rounded-full bg-white/80 hover:bg-white shadow focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Image (click to go next) */}
            {images[activeIndex] && (
              <img
                src={images[activeIndex]}
                alt={`Image ${activeIndex + 1}`}
                onClick={() => images.length > 1 && next()}
                className="max-h-full max-w-full object-contain cursor-zoom-in"
              />
            )}

            {/* Next */}
            {images.length > 1 && (
              <button
                onClick={next}
                className="absolute right-2 sm:right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
