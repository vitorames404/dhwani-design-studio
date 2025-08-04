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
      <div className="absolute top-0 left-0 text-9xl font-black text-accent/5 z-0">
        2025
      </div>
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-8 mb-6 text-sm font-medium text-muted-foreground">
            <span>design</span>
            <span>innovation</span>
            <span>manufacturing</span>
          </div>
          
          <h1 className="hero-text mb-6">
            Industrial Designer
          </h1>
          
          <h2 className="hero-text text-accent mb-8">
            Dhwani Jha
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative products that seamlessly integrate technology with human-centered solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg"
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">New Zealand</span>
          <div className="w-px h-8 bg-accent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;