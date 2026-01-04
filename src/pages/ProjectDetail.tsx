import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Tag, Trophy, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useMemo, useState } from "react";
import clsx from "clsx";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(() => {
    if (!project) return [];
    if (project.detailImages && project.detailImages.length > 0) return project.detailImages;
    return project.image ? [project.image] : [];
  }, [project]);

  const next = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  const isGallagherProject = project?.confidential && project?.watermarkText;

  // Scroll to top when component first mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]); // Re-run if project ID changes

  const handleBackToPortfolio = () => {
    // Clear any saved scroll position so it returns to the saved position
    navigate("/");
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (isGallagherProject) {
      e.preventDefault();
      return false;
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    if (isGallagherProject) {
      e.preventDefault();
      return false;
    }
  };

  useEffect(() => {
    if (lightboxOpen) {
      // Just prevent scrolling, don't lock position
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrolling
      document.body.style.overflow = '';
    }

    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setLightboxOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, images.length]);

  useEffect(() => {
    if (!isGallagherProject) return;

    const preventContext = (e: Event) => e.preventDefault();
    const preventKeys = (e: KeyboardEvent) => {
      if (e.keyCode === 123) e.preventDefault();
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) e.preventDefault();
      if (e.ctrlKey && e.keyCode === 85) e.preventDefault();
      if (e.ctrlKey && e.keyCode === 83) e.preventDefault();
    };

    document.addEventListener("contextmenu", preventContext);
    document.addEventListener("keydown", preventKeys);

    return () => {
      document.removeEventListener("contextmenu", preventContext);
      document.removeEventListener("keydown", preventKeys);
    };
  }, [isGallagherProject]);

  const WatermarkedImage = ({
    src,
    alt,
    className,
    onClick,
    variant = "fill",
  }: {
    src: string;
    alt: string;
    className?: string;
    onClick?: () => void;
    variant?: "fill" | "shrink";
  }) => {
    const containerClass =
      variant === "fill" ? "relative w-full h-full" : "relative inline-flex max-w-full max-h-full";

    const imageProps = isGallagherProject
      ? {
          onContextMenu: handleContextMenu,
          onDragStart: handleDragStart,
          draggable: false,
          style: {
            userSelect: "none" as const,
            pointerEvents: "none" as const,
          },
        }
      : {};

    return (
      <div
        className={containerClass}
        onClick={onClick}
        onContextMenu={isGallagherProject ? handleContextMenu : undefined}
      >
        <img
          src={src}
          alt={alt}
          className={
            variant === "fill"
              ? className || ""
              : `block max-w-full max-h-full ${className || ""}`
          }
          {...imageProps}
        />

        {isGallagherProject && (
          <>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span
                className={clsx(
                  "text-white/20 font-bold -rotate-45 select-none transform",
                  variant === "fill" && "text-lg md:text-xl",
                  variant === "shrink" && "text-2xl md:text-4xl"
                )}
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
              >
                {project?.watermarkText}
              </span>
            </div>
            <div className="absolute inset-0 bg-transparent pointer-events-auto" />
          </>
        )}
      </div>
    );
  };

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
      {/* HEADER */}
      <div className="bg-muted/30 py-12">
        <div className="container mx-auto px-6">
          <Button onClick={handleBackToPortfolio} variant="ghost" className="mb-8 hover:text-accent">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="project-number mb-6 text-accent/70">{project.number}</div>
              <h1 className="text-5xl md:text-6xl font-black mb-4">{project.title}</h1>
              <h2 className="text-2xl text-accent font-semibold mb-6">{project.subtitle}</h2>

              <div className="flex flex-wrap gap-4 mb-8">
                {Array.isArray(project.type) ? (
                  project.type.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                      <Tag className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">{tag}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded-full">
                    <Tag className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{project.type}</span>
                  </div>
                )}

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

      {/* CONTENT */}
      <div className="pt-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <section className="mb-16">
              <h3 className="text-3xl font-bold mb-6">Project Overview</h3>
              <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                {project.fullDescription}
              </p>
              
              {/* External Link for Eiffel Table Project */}
              {project.id === "eiffel-table" && (
                <div className="mt-6">
                  <a
                    href="https://www.leapaust.com.au/blog/dx/announcing-the-leap-keyshot-challenge-winners/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-full font-medium transition-all duration-300 hover:gap-3 group"
                  >
                    <Trophy className="w-5 h-5" />
                    <span>View LEAP KeyShot Challenge 2025 Winners</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </section>

            {/* Skills */}
            <section className="mb-16 mt-0">
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

            {/* GALLERY — FULLY FIXED */}
            {images.length > 0 && (
              <section className="mb-16">
                <h3 className="text-3xl font-bold mb-8">Project Gallery</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
                  {images.map((image, index) => {
                    const isVideo = /\.(mp4|mov|webm)$/i.test(image);

                    const mediaCard = (
                      <Card className="overflow-hidden border-0 shadow-lg hover-lift w-full max-w-[240px]">
                        <CardContent className="p-0">
                          <div className="relative w-full aspect-[4/3]">

                            {isVideo ? (
                              <div className="relative w-full h-full">
                                <video
                                  controls
                                  playsInline
                                  className="absolute inset-0 w-full h-full object-cover rounded-lg pointer-events-none"
                                >
                                  <source src={image} type="video/mp4" />
                                </video>

                                {/* Transparent clickable overlay to open popup */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    setActiveIndex(index);
                                    setLightboxOpen(true);
                                  }}
                                  className="absolute inset-0 w-full h-full bg-transparent cursor-pointer"
                                />
                              </div>
                            ) : (
                              <WatermarkedImage
                                src={image}
                                alt={`${project.title} detail ${index + 1}`}
                                variant="fill"
                                onClick={() => {
                                  setActiveIndex(index);
                                  setLightboxOpen(true);
                                }}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                              />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );

                    return (
                      <div key={index} className="w-full max-w-[240px]">
                        {mediaCard}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Key Features */}
            <section className="mb-16">
              <h3 className="text-2xl font-bold mb-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {feature}
                  </p>
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
                      <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
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
                      <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <p className="text-muted-foreground">{outcome}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Back to Portfolio */}
            <div className="flex justify-center">
              <Button
                onClick={handleBackToPortfolio}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4"
              >
                Back to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX — supports images + videos */}
      {lightboxOpen && (
        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-[95vw] sm:max-w-[90vw] p-0 bg-background/95 border-0">
            <div className="flex items-center justify-between px-4 py-3 bg-background/50 backdrop-blur-sm">
              <span className="text-sm text-muted-foreground">
                {images.length > 0 ? `${activeIndex + 1} / ${images.length}` : ""}
              </span>
            </div>

            <div className="relative w-full h-full sm:h-[80vh] bg-black/80 flex items-center justify-center overflow-hidden">
              {images.length > 1 && (
                <button
                  onClick={prev}
                  className="absolute left-2 sm:left-4 p-2 rounded-full bg-white/80 hover:bg-white shadow z-10 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* VIDEO or IMAGE - Only render the active one */}
              {images[activeIndex] && (
                <div className="w-full h-full flex items-center justify-center">
                  {/\.(mp4|mov|webm)$/i.test(images[activeIndex]) ? (
                    <video
                      key={`video-${activeIndex}-${images[activeIndex]}`}
                      controls
                      autoPlay
                      playsInline
                      className="max-h-[80vh] max-w-full rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <source src={images[activeIndex]} type="video/mp4" />
                    </video>
                  ) : (
                    <WatermarkedImage
                      key={`image-${activeIndex}-${images[activeIndex]}`}
                      src={images[activeIndex]}
                      alt={`Image ${activeIndex + 1}`}
                      onClick={() => images.length > 1 && next()}
                      variant="shrink"
                      className="object-contain"
                    />
                  )}
                </div>
              )}

              {images.length > 1 && (
                <button
                  onClick={next}
                  className="absolute right-2 sm:right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow z-10 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProjectDetail;