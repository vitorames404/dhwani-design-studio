import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Dhwani Jha</div>

          <div className="hidden md:flex items-center space-x-8">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent"
            >
              About
            </Button>

            {/* ⭐ Added Recent Projects */}
            <Button
              variant="ghost"
              onClick={() => scrollToSection("recent-projects")}
              className="text-foreground hover:text-accent"
            >
              Recent
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-accent"
            >
              Projects
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-accent"
            >
              Contact
            </Button>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
