import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 text-9xl font-black text-accent/15 z-0">
        2026
      </div>
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          
          <h2 className="hero-text mb-8">
            Dhwani Jha
          </h2>

          <h1 className="hero-text text-6xl text-accent mb-6">
            Aspiring Industrial Designer
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative products that seamlessly integrate technology with human-centered solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
            >
              View My Projects
            </Button>
          </div>
        </div>
      </div>
    <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
    >
      <div className="flex flex-col items-center gap-2">
        {/* Down arrow */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-10 h-10 animate-slow-bounce"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
      </div>
    </div>
    </section>
  );
};

export default Hero;
