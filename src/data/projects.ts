export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  detailImages: string[];
  type: string | string[];
  duration: string;
  keyFeatures: string[];
  challenges: string[];
  outcomes: string[];
  skills: string[];
  awardLabel?: string;
  isRecent?: boolean;
  confidential?: boolean;
  watermarkText?: string;
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
    skills: ["SolidWorks", "KeyShot", "Industrial Design", "Brand Integration", "CAD Modeling"],
    confidential: true,
    watermarkText: "© Gallagher Animal Management",
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
    skills: ["SolidWorks", "User Experience Design", "Prototyping", "Industrial Design", "Interaction Design"],
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
    type: ["Industrial Design Challenge", "Award Winning Project"], 
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
    skills: ["Sustainable Design", "Mechanical Engineering", "CAD Modeling", "Material Innovation"],
    awardLabel: "Award Winning"
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
    type: ["LEAP KeyShot Challenge 2025", "Award Winning Project"],
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
    skills: ["KeyShot", "3D Rendering", "Lighting Design", "Material Science", "Visual Communication"],
    awardLabel: "Award Winning Project"
  },
  {
    id: "boxie",
    number: "01",
    isRecent: true,
    title: "Boxie: Bottle to Box & Back to Nature",
    subtitle: "Capstone Exhibition @ University of Waikato",
    description:
      "A compostable PHA packaging system engineered to transform from a shampoo bottle into a reusable storage box. The project explores low-effort sustainability through playful, re-purposeable design, aimed at encouraging users to re-use FMCG packaging.",
    fullDescription:
      "Boxie, with an experimental vision towards the future of compostable packaging, challenges the conventions of single-use FMCG packaging by introducing a dual-purpose container made from fully compostable PHA bioplastic. Designed to begin life as a shampoo bottle and effortlessly convert into a compact storage box, Boxie makes re-use intuitive and enjoyable rather than burdensome. Featuring interchangeable inserts, precise push-fit geometry, and playful character-driven branding, the project blends sustainability, engineering, and emotional design into one cohesive system. During the public capstone showcase, Boxie sparked lively conversations among industry guests, designers, students, parents, and young visitors, who quickly understood the transformation through hands-on demonstrations and visual storytelling.\n\nBoxie began as a question: Why does reusing packaging feel so difficult? Through research, rapid prototyping, and mechanism exploration, the solution became a two-insert system: one threaded insert for bottle mode, and one flat insert for box mode. Users simply swap the inserts with no tools, glue or extra purchases required. The body splits neatly to function as a snug-fit storage box, engineered with tight tolerances, calculated clearances, and correct draft angles. The choice of PHA bioplastic supports a product lifecycle that ends in nature, decomposing in home compost without hassle. To strengthen emotional longevity, each Boxie variant, Tropical Bliss, Aqua Fresh, Cherry Crush features a unique colour, embossed motif, and expressive face, transforming packaging into a cheerful companion rather than waste.",
    image: "/lovable-uploads/boxie9.png",
    detailImages: [
      "/lovable-uploads/boxie1.jpg",
      "/lovable-uploads/boxie2.jpg",
      "/lovable-uploads/boxie3.jpg",
      "/lovable-uploads/boxie4.jpg",
      "/lovable-uploads/boxie5.jpg",
      "/lovable-uploads/boxie6.jpg",
      "/lovable-uploads/boxie7.jpg",
      "/lovable-uploads/boxie8.jpg",
      "/lovable-uploads/boxie10.png",
      "/lovable-uploads/boxie11.png",
      "/lovable-uploads/boxie12.png",
      "/lovable-uploads/boxie13.png",
      "/lovable-uploads/boxie15.png",
      "/lovable-uploads/boxie16.png",
      "/lovable-uploads/boxie17.png",
    ],
    type: ["Exhibited project", "Circular Packaging Design"],
    duration: "JUL - OCT 2025",
    keyFeatures: [
      "Dual-Purpose Packaging System: Transforms from bottle to box through interchangeable inserts placed inside the product at purchase. No external parts needed. Supported by user-tested tolerances and precise press-fit geometry.",
      "100% PHA Bioplastic: Compostable in home environments; no sorting required. Designed to return safely to nature within 6–12 months.",
      "Character-Driven Branding: Playful personalities (Tropical Bliss, Aqua Fresh, Cherry Crush) make sustainability friendly and relatable. Embossed motifs match fragrance themes—flowers, tuxedo, heart designs—which visitors described as 'cute', 'attractive' and 'desirable to keep'.",
      "Intuitive User Transformation: A satisfying 'click' when inserting components, designed for all ages. Tested even with young children who quickly understood the bottle-to-box change.",
      "Showcase-Ready Display Deliverables: A1 panel, looping promo video, labelled inserts, pamphlets, sticker packs and business cards created an engaging, professional capstone presentation that attracted industry attention."
    ],
    challenges: [
      "Engineering the Insert Mechanism: Dozens of prototypes were required to refine tolerances, ensure airtight bottle mode, and enable a smooth box conversion. Failures in thread dimensions, wall thickness, draft angles and meshing provided crucial learning milestones.",
      "Thread Development Difficulties: Standard SolidWorks threads were unreliable; multiple methods failed until real ISBT-spec caps were sourced and reverse-engineered.",
      "Material-Driven Constraints: PHA requires careful consideration of shrinkage, heat distortion and mould design parameters.",
      "Branding & Character Cohesion: Balancing form, emotional appeal, and clarity of function required iterative refinement of cap design, motifs and colour selections.",
      "Exhibition Engagement: The capstone event required a display that communicated the concept even when the designer wasn't present."
    ],
    outcomes: [
      "A reliable, manufacturable mechanism validated through physical testing.",
      "Accurate thread geometry that works in real-world use.",
      "Insights from staff and engineering faculty confirmed that Boxie is feasible for injection moulding at scale."
    ],

    skills: [
      "CAD Modelling",
      "Mechanism Development",
      "Hands-on Prototyping",
      "Material Research",
      "Branding & Visual Design"
    ]
  },
  {
    id: "essentia",
    number: "02",
    isRecent: true,
    title: "Essentia",
    subtitle: "Product-service system project for tourists",
    description:
      "A user-oriented Product Service System with a solar-powered smart dispensing kiosk that gives travellers fast, affordable access to small-quantity essentials like sunscreen, electrolytes, lip balm and hygiene products across high-tourism hotspots in New Zealand.",
    fullDescription:
      "Essentia is a compact, booth-like self-service kiosk inspired by modern ticketing terminals, vending machines and public sunscreen dispensers. Operating on a use-oriented service model, it grants temporary access to essential items without requiring travellers to purchase expensive full-size retail products. The tall, durable housing includes a sun-shielding canopy with integrated solar panels, CCTV domes for safety, a large multilingual touchscreen, payment options and dispensing bays sized specifically for single-use products. The system is designed for beaches, parks, transport hubs and scenic lookouts, where long days outdoors often clash with limited access to basic comfort and safety items.\n\nBy combining robust hardware, intuitive touchscreen interaction, cashless pay-per-use access and modular refill cartridges, Essentia creates a seamless 24/7 public amenity for city councils, tourism boards and private operators. Its material selection, solar-powered cooling and low-waste refill loop support a sustainable Product Service System that shares responsibility for stocking, maintenance, pricing and accessibility between stakeholders.",
    image: "/lovable-uploads/essentia3.jpg",
    detailImages: [
      "/lovable-uploads/essentia2.jpg",
      "/lovable-uploads/essentia3.jpg",
      "/lovable-uploads/essentia4.jpg",
      "/lovable-uploads/essentia5.png",
      "/lovable-uploads/essentia6.png",
      "/lovable-uploads/essentia7.png",
      "/lovable-uploads/essentia8.png",
      "/lovable-uploads/essentia9.png",
      "/lovable-uploads/essentia10.png",
      "/lovable-uploads/essentia11.png",
      "/lovable-uploads/essentia12.png",
    ],
    type: [
      "Product-Service System Design",
      "Interaction Design",
      "Public Infrastructure Design"
    ],
    duration: "OCT 2025",
    keyFeatures: [
      "Solar-Powered Public Unit: A tilted solar canopy powers lighting, sensors, electronics and CCTV, reducing running costs while enabling remote placement in beaches, parks, transport hubs and scenic lookouts.",
      "Multilingual Touchscreen Interface: Clear iconography and large navigation tiles support users unfamiliar with English or local New Zealand environments.",
      "Pay-Per-Use Access to Essentials: Users pay only for what they need, such as sunscreen doses, electrolyte sachets, wipes and other single-use items, reducing cost, waste and the need to carry full-size products.",
      "24/7 Availability and CCTV Safety Layer: CCTV cameras installed beneath the solar panel provide passive security and reassurance, critical for public installations in high-traffic areas.",
      "Modular Service and Refilling System: Replenishment cartridges slide out for fast swap-and-replace maintenance, reducing downtime and labour while aligning with sustainability and PSS goals.",
      "Weather-Resistant, Urban-Friendly Form: The unit references familiar ticket booths and ATMs, with clean corners, protective housing and elevated dispensing slots that enhance durability, hygiene and user trust."
    ],
    challenges: [
      "Understanding Tourist Pain Points: Interviews and quick card-sorting exercises revealed recurring issues like forgotten essentials, expensive local alternatives, UV exposure, dehydration and low accessibility in unfamiliar locations.",
      "Designing a Clear and Universal Interface: The UI needed to work for non-English speakers, families, older adults and visitors unfamiliar with local norms or location-specific instructions.",
      "Public Safety and Hardware Resilience: High-traffic kiosks required anti-tamper forms, durable materials, structured ventilation and safe dispensing channels to withstand everyday use and occasional misuse.",
      "Balancing Form, Technology and Service Logic: The system had to support both user convenience and stakeholder feasibility, including city councils, tourism operators and wellness brands."
    ],
    outcomes: [
      "Validated demand for a pay-per-use essentials system in tourist-heavy areas.",
      "A simplified, icon-driven ATM-inspired layout with clear voice and visual confirmation for transactions.",
      "An integrated safety package including CCTV, a rigid frame, recessed screen, protected payment zone and minimal exposed surfaces.",
      "A viable use-oriented PSS model built on shared responsibilities for stocking, maintenance, pricing and user accessibility."
    ],
    skills: [
      "CAD Modelling & Assembly",
      "Design for Public Environments",
      "Interaction & UI Considerations",
      "PSS Development",
      "Sustainable Systems Thinking",
      "Human-Centered Design Methods"
    ]
  },
];
