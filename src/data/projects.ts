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
    image: "/lovable-uploads/cfddafda-d018-4834-b8bc-001b9847cfbc.png",
    detailImages: [
      "/lovable-uploads/cfddafda-d018-4834-b8bc-001b9847cfbc.png",
      "/lovable-uploads/027de50c-d3e5-4649-abd2-fbe7d1b4493e.png",
      "/lovable-uploads/7ebe5ecf-acb1-40d0-aead-e929b6a61e34.png"
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
    image: "/lovable-uploads/08a4fb1c-7219-41c2-b7f3-6775b2a5b79b.png",
    detailImages: [
      "/lovable-uploads/08a4fb1c-7219-41c2-b7f3-6775b2a5b79b.png",
      "/lovable-uploads/8f06112c-c901-4d63-ac1f-01b3949c463c.png",
      "/lovable-uploads/43285d92-79f3-435d-b411-a58fdf5b2786.png"
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
    image: "/lovable-uploads/ef44c176-df6a-453a-8a0b-6c3f4263452e.png",
    detailImages: [
      "/lovable-uploads/ef44c176-df6a-453a-8a0b-6c3f4263452e.png",
      "/lovable-uploads/528787d3-3912-40d8-ac7b-f20233260b38.png"
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
    image: "/lovable-uploads/ddc2d61b-612d-4198-9d92-eaf708a3ac2f.png",
    detailImages: [
      "/lovable-uploads/ddc2d61b-612d-4198-9d92-eaf708a3ac2f.png",
      "/lovable-uploads/bae9a61c-350a-41a5-b079-4ca4411ede70.png"
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
    image: "/lovable-uploads/e4501a51-ad81-4f60-889c-a470c6264ce8.png",
    detailImages: [
      "/lovable-uploads/e4501a51-ad81-4f60-889c-a470c6264ce8.png",
      "/lovable-uploads/99954337-d53f-4c09-82a5-5431413c6013.png"
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
    image: "/lovable-uploads/bdd35988-5741-4580-abd7-102f8434bf56.png",
    detailImages: [
      "/lovable-uploads/bdd35988-5741-4580-abd7-102f8434bf56.png"
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