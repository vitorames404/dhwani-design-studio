export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  detailImages: string[];
  type: string;
  duration: string;
  keyFeatures: string[];
  challenges: string[];
  outcomes: string[];
  skills: string[];
}

export const projects: Project[] = [
  {
    id: "gallagher-energizer",
    number: "01",
    title: "Electric Fence Energizer",
    subtitle: "Gallagher Animal Management",
    description: "Redesign of the O'Brien's electric fence mains energizer to help it stand out in a saturated market. Successfully integrated Gallagher's iconic branding with innovative design solutions.",
    fullDescription: "During my internship at Gallagher, I undertook the redesign of the O'Brien's electric fence mains energizer to help it stand out in a saturated market. My role involved extensive ideation, CAD modeling in SolidWorks, and creating high-quality animations in KeyShot. What made this project unique was the unexpected pivot, as after initial success, Gallagher saw potential in the design for their own line.",
    image: "/lovable-uploads/gallagher-final-render-anotherangle.5.png",
    detailImages: [
      "/lovable-uploads/gallagher1.png",
      "/lovable-uploads/gallagher2.png",
      "/lovable-uploads/gallagher3.png",
      "/lovable-uploads/gallagher4.png",
      "/lovable-uploads/obriens1.png",
      "/lovable-uploads/obriens2.png",
      "/lovable-uploads/obriens3.png",
      "/lovable-uploads/obriens4.png",
      "/lovable-uploads/obriens5.png",
      "/lovable-uploads/obriens6.png",
      "/lovable-uploads/obriens7.png",
      "/lovable-uploads/obriens8.png",

    ],
    type: "Industrial Design Internship",
    duration: "MAR - MAY 2025",
    keyFeatures: [
      "Dual-gear mechanism for smooth operation",
      "Gallagher's iconic orange branding integration", 
      "Market-ready product design",
      "Enhanced ergonomic design"
    ],
    challenges: [
      "Standing out in a saturated market",
      "Integrating existing brand elements",
      "Balancing aesthetic and technical requirements"
    ],
    outcomes: [
      "Successfully integrated Gallagher's iconic branding",
      "Created a refined, market-ready product",
      "Demonstrated dynamic relationship between design evolution and brand identity"
    ],
    skills: ["SolidWorks", "KeyShot", "Industrial Design", "Brand Integration", "CAD Modeling"]
  },
  {
    id: "bloomlist",
    number: "02", 
    title: "BloomList",
    subtitle: "Daily Productivity Tracker",
    description: "A fan-inspired task tracker designed to enhance daily productivity through mindful tactile interactions. Features customizable blades that visually unfold tasks for a satisfying sense of progress.",
    fullDescription: "Bloomlist is a fan-inspired task tracker designed to enhance daily productivity through mindful tactile interactions. My role involved ideation, detailed CAD modeling in SolidWorks, and prototyping to refine user experience and ergonomics. By visually unfolding tasks on customizable blades, Bloomlist offers users a satisfying tactile and visual sense of progress, addressing the modern need for intentionality and digital detox.",
    image: "/lovable-uploads/BloomList-main.png",
    detailImages: [
      "/lovable-uploads/BloomList1.png",
      "/lovable-uploads/BloomList2.png",
      "/lovable-uploads/BloomList3.png",
      "/lovable-uploads/Bloomlist4.jpg",
      "/lovable-uploads/BloomList7.jpg",
      "/lovable-uploads/BloomList8.png",
    ],
    type: "Industrial Design Project",
    duration: "MAY - JUN 2025",
    keyFeatures: [
      "Fan-like blade design for task visualization",
      "Tactile progress tracking",
      "Low-power e-paper displays",
      "Haptic feedback motors",
      "Bluetooth connectivity"
    ],
    challenges: [
      "Balancing digital and physical interaction",
      "Creating satisfying tactile feedback",
      "Designing for intentional use vs. digital distraction"
    ],
    outcomes: [
      "Created innovative task management solution",
      "Successfully blended traditional tangible interactions with modern digital connectivity",
      "Addressed digital fatigue through intentional design"
    ],
    skills: ["SolidWorks", "User Experience Design", "Prototyping", "Industrial Design", "Interaction Design"]
  },
  {
    id: "griplicator",
    number: "03",
    title: "Griplicator",
    subtitle: "Award winning woollen grip applicator",
    description: "Handheld applicator using adhesive-backed rolls of felted NZ strong wool. Features dual-gear mechanism for smooth, precise application. Third place winner for unique blend of ergonomic design and environmental responsibility.",
    fullDescription: "The Griplicator is a handheld applicator that uses adhesive-backed rolls of felted NZ strong wool to upgrade tool handles, patch worn surfaces, and create ergonomic, non-slip grips. Designed with a dual-gear mechanism for smooth, precise application, it offers an eco-friendly alternative to synthetic grips, combining durability, comfort, and sustainability.",
    image: "/lovable-uploads/glipicator-main.jpg",
    detailImages: [
      "/lovable-uploads/glipicator1.jpg",
      "/lovable-uploads/glipicator2.jpg",
      "/lovable-uploads/glipicator3.jpg",
      "/lovable-uploads/glipicator4.jpg",
      "/lovable-uploads/glipicator5.jpg",
      "/lovable-uploads/griplicator6.jpg",
      "/lovable-uploads/griplicator7.jpg",
    ],
    type: "Industrial Design Challenge",
    duration: "AUG - OCT 2024",
    keyFeatures: [
      "Dual-gear mechanism for precise application",
      "Uses felted NZ strong wool",
      "Tape guider for even application",
      "Angled cutting blade for clean finish",
      "Refillable wool rolls for long-term use"
    ],
    challenges: [
      "Creating smooth application mechanism",
      "Balancing sustainability with functionality",
      "Designing for various grip sizes and shapes"
    ],
    outcomes: [
      "Third place in Industrial Design Challenge",
      "Successfully promoted use of locally sourced NZ strong wool",
      "Created eco-friendly alternative to synthetic grips",
      "Demonstrated market potential and unique innovation"
    ],
    skills: ["Sustainable Design", "Mechanical Engineering", "CAD Modeling", "Material Innovation"]
  },
  {
    id: "stryke-accessories",
    number: "04",
    title: "Stryke Accessories",
    subtitle: "Helmet accessories for cyclists",
    description: "A sleek, matte-finished accessory designed with care and style, for cycling enthusiasts. Offering interchangeable, stylish designs, it enhances protection and personalization for New Zealand's vast cycling market.",
    fullDescription: "A sleek, matte-finished accessory designed with care and style, for cycling enthusiasts. Offering interchangeable, stylish designs, it enhances protection and personalization. Tailored for New Zealand's vast cycling market, it lets riders swap overlay designs for a fresh look without changing helmets. Research on NZ cyclists revealed demand for easy customization and durability.",
    image: "/lovable-uploads/stryke-helmet-main.png",
    detailImages: [
      "/lovable-uploads/stryke1.png",
      "/lovable-uploads/stryke2.JPG",
      "/lovable-uploads/stryke3.jpg",
    ],
    type: "Market-driven product development",
    duration: "SEPT 2024",
    keyFeatures: [
      "Interchangeable overlay designs",
      "Matte finish and robust materials",
      "CAD-rendered arrow motif for speed and movement",
      "Ultra-light Carbon Fiber Reinforced Polymer",
      "Multi-Density EPS foam integration"
    ],
    challenges: [
      "Addressing style fatigue in cycling gear",
      "Balancing aesthetics with safety requirements",
      "Creating durable yet lightweight materials"
    ],
    outcomes: [
      "Successfully addressed market demand for customization",
      "Created scalable design system for multiple overlay patterns",
      "Merged industrial design with marketing insights for market fit"
    ],
    skills: ["Market Research", "CAD Rendering", "Material Selection", "Industrial Design"]
  },
  {
    id: "steambolt",
    number: "05",
    title: "SteamBolt",
    subtitle: "Working steam engine prototype",
    description: "A fully functional, small-scale steam engine prototype, partially designed & assembled using SolidWorks. Precisely manufactured using copper, stainless steel, & brass, incorporating turning, milling & MIG welding techniques.",
    fullDescription: "A fully functional, small-scale steam engine prototype, partially designed & assembled using SolidWorks. Precisely manufactured using copper, stainless steel, & brass, it incorporates turning, milling & MIG welding techniques, combining hands-on fabrication with industrial design theory. The final result was a working prototype, manufactured from scratch, with materials like copper tubes, stainless steel sheets, washers, nuts, bolts and brass.",
    image: "/lovable-uploads/steambolt-main.jpg",
    detailImages: [
      "/lovable-uploads/steambolt1.jpg",
      "/lovable-uploads/steambolt4.jpg",
      "/lovable-uploads/steambolt3.jpg",
      "/lovable-uploads/steambolt5.jpg",
      "/lovable-uploads/steambolt2.png",
      "/lovable-uploads/steambolt6.jpg",
    ],
    type: "Mechanical Engineering Project",
    duration: "SEPT 2024",
    keyFeatures: [
      "Fully functional steam engine mechanism",
      "Precision engineering using multiple materials",
      "Hand-fabricated from dimensioned 2D drawings",
      "Integration of turning and milling operations",
      "MIG welding for metal joining"
    ],
    challenges: [
      "Translating CAD models to physical prototypes",
      "Mastering multiple manufacturing techniques",
      "Achieving precision in hand fabrication",
      "Working with diverse materials and joining methods"
    ],
    outcomes: [
      "Successfully created working steam engine prototype",
      "Developed expertise in MIG welding and metal joining",
      "Demonstrated ability to combine design theory with practical fabrication",
      "Showcased adaptability and technical skill development"
    ],
    skills: ["SolidWorks", "Manufacturing", "MIG Welding", "Turning & Milling", "Mechanical Engineering"]
  },
  {
    id: "eiffel-table",
    number: "06",
    title: "The Eiffel Table",
    subtitle: "Honorable mention for KeyShot render",
    description: "A KeyShot rendering project that achieved honorable mention in the LEAP KeyShot Challenge 2025. Features realistic lighting, textures, and material settings that showcase advanced 3D visualization skills.",
    fullDescription: "To achieve this KeyShot render of an Eiffel table, I used a daylight lighting preset combined with a warm-toned HDRI to create realistic sunlight and soft indoor shadows. High-resolution textures with fine bump mapping were applied and depth of field was adjusted to subtly blur the background and draw focus to the table. Material settings balanced metallic reflections with a matte finish for authenticity and global illumination ensured natural light bounce within the scene.",
    image: "/lovable-uploads/eiffel-table.png",
    detailImages: [
      "/lovable-uploads/table1.png",
      "/lovable-uploads/table3.png",
      "/lovable-uploads/table2.png",
    ],
    type: "LEAP KeyShot Challenge 2025",
    duration: "JUN 2025",
    keyFeatures: [
      "Photorealistic lighting setup",
      "High-resolution texture application",
      "Advanced material settings",
      "Depth of field composition",
      "Global illumination techniques"
    ],
    challenges: [
      "Achieving photorealistic lighting",
      "Balancing metallic and matte finishes",
      "Creating natural light bounce effects",
      "Fine-tuning depth of field for focus"
    ],
    outcomes: [
      "Honorable mention in prestigious KeyShot Challenge",
      "Recognition for technical visualization skills",
      "Demonstrated mastery of advanced rendering techniques"
    ],
    skills: ["KeyShot", "3D Rendering", "Lighting Design", "Material Science", "Visual Communication"]
  }
];