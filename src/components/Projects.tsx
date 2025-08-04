import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    number: "01",
    title: "Electric Fence Energizer",
    subtitle: "Gallagher Animal Management",
    description: "Redesign of the O'Brien's electric fence mains energizer to help it stand out in a saturated market. Successfully integrated Gallagher's iconic branding with innovative design solutions.",
    image: "/lovable-uploads/cfddafda-d018-4834-b8bc-001b9847cfbc.png",
    type: "Industrial Design Internship",
    duration: "MAR-MAY 2025"
  },
  {
    number: "02", 
    title: "BloomList",
    subtitle: "Daily Productivity Tracker",
    description: "A fan-inspired task tracker designed to enhance daily productivity through mindful tactile interactions. Features customizable blades that visually unfold tasks for a satisfying sense of progress.",
    image: "/lovable-uploads/08a4fb1c-7219-41c2-b7f3-6775b2a5b79b.png",
    type: "Industrial Design Project",
    duration: "MAY-JUN 2025"
  },
  {
    number: "03",
    title: "Griplicator",
    subtitle: "Award winning woollen grip applicator",
    description: "Handheld applicator using adhesive-backed rolls of felted NZ strong wool. Features dual-gear mechanism for smooth, precise application. Third place winner for unique blend of ergonomic design and environmental responsibility.",
    image: "/lovable-uploads/ef44c176-df6a-453a-8a0b-6c3f4263452e.png",
    type: "Industrial Design Challenge",
    duration: "AUG-OCT 2024"
  }
];

const Projects = () => {
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
          {projects.map((project, index) => (
            <div key={project.number} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="project-number mb-6">{project.number}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
                <h4 className="text-xl text-accent font-semibold mb-6">{project.subtitle}</h4>
                <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <span className="px-3 py-1 bg-muted rounded-full">{project.type}</span>
                  <span className="px-3 py-1 bg-muted rounded-full">{project.duration}</span>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Card className="hover-lift overflow-hidden border-0 shadow-lg">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;