import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const About = () => {
  const [activeSlide, setActiveSlide] = useState<"about" | "award">("about");
  const [hasAutoSlid, setHasAutoSlid] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-slide to Award section when scrolling into view
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoSlid) {
            // First, smooth scroll to center the section in view
            sectionRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });

            // Wait for scroll to complete + give user time to see About section
            // Then slide to Award
            timeoutId = setTimeout(() => {
              setActiveSlide("award");
              setHasAutoSlid(true);
            }, 900);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hasAutoSlid]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative z-10 py-24 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation Button - Left (shows About) */}
          <button
            onClick={() => setActiveSlide("about")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg transition-all duration-300 hover:bg-background hover:scale-110 ${
              activeSlide === "about" ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-label="View About section"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Button - Right (shows Award) */}
          <button
            onClick={() => setActiveSlide("award")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg transition-all duration-300 hover:bg-background hover:scale-110 ${
              activeSlide === "award" ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-label="View Award section"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slides Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: activeSlide === "award" ? "translateX(-100%)" : "translateX(0)" }}
            >
              {/* About Slide */}
              <div className="w-full flex-shrink-0 px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  {/* Text content spans 7/12 columns */}
                  <div className="lg:col-span-7">
                    <h2 className="section-title mb-8">About Me</h2>

                    <div className="space-y-6 text-base leading-relaxed">
                      <blockquote className="border-l-4 border-accent pl-4 italic text-accent text-base">
                        "The details are not the details. They make the design."
                        <span className="block mt-2 not-italic text-sm text-muted-foreground">
                          – Charles Eames, American industrial designer and architect
                        </span>
                      </blockquote>

                      <p>
                        My relationship with design began when I questioned where the lines
                        blurred between creativity, technicality and innovation. I wondered what
                        such a discipline was called, where we create objects that don't yet exist
                        and breathe life into them through intentionality. This contemplation
                        brought me to my first love, industrial design.
                      </p>

                      <p>
                        I am Dhwani Jha, a recent graduate from the University of Waikato.
                        My major in Industrial Design, paired with minors in Interaction Design
                        and Marketing, equips me with a unique perspective on designing products
                        that resonate with target users, while meeting market demands.
                      </p>

                      <p>
                        I strive to design objects that capture the nuances of necessity and human
                        desire in a fast‑changing world, without giving up my creative flair and
                        originality. I look forward to working in the field of design where
                        engineering, innovation and product design intersect.
                      </p>

                      <p>
                        I believe that the future of design lies in seamlessly integrating
                        technology with human‑centered solutions, creating products that not only
                        solve problems but also enrich everyday lives, while adapting to, or around, technology like AI.
                      </p>
                    </div>
                  </div>

                  {/* Image spans 5/12 columns */}
                  <div className="lg:col-span-5 h-full">
                    <div className="h-full flex items-stretch justify-end">
                      <img
                        src="/lovable-uploads/pookie.jpg"
                        alt="Dhwani Jha"
                        className="rounded-lg shadow-2xl object-cover h-full w-auto max-w-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Award Slide */}
              <div className="w-full flex-shrink-0 px-4 sm:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  {/* Image spans 5/12 columns - on the left for Award */}
                  <div className="lg:col-span-5 h-full order-2 lg:order-1">
                    <div className="h-full flex items-stretch justify-start">
                      <img
                        src="/lovable-uploads/me on portfolio website award section.jpg"
                        alt="Dhwani Jha receiving the CMS Prize for Excellence"
                        className="rounded-lg shadow-2xl object-cover h-full w-auto max-w-md"
                      />
                    </div>
                  </div>

                  {/* Text content spans 7/12 columns */}
                  <div className="lg:col-span-7 order-1 lg:order-2">
                    <h2 className="section-title mb-8">Academic Excellence</h2>

                    <div className="space-y-6 text-base leading-relaxed">
                      <blockquote className="border-l-4 border-accent pl-4 italic text-accent text-base">
                        A recognition of academic dedication and a stepping stone into the professional world of design
                        <span className="block mt-2 not-italic text-sm text-muted-foreground">
                          Dec 2025
                        </span>
                      </blockquote>

                      <p>
                        I am honored to have been awarded the CMS Prize for Excellence by the
                        University of Waikato, a distinction that recognizes outstanding academic
                        achievement based on GPA across all departments in the School of Computing
                        and Mathematical Sciences, including the School of Design. Receiving this
                        award among a cohort of talented and diverse students has been a deeply
                        rewarding experience as I transition from my academic journey into the
                        industrial design and manufacturing sector.
                      </p>

                      <p>
                        This recognition serves as both a validation of my efforts and a source of
                        motivation as I prepare to enter the workforce. I am immensely grateful for
                        the guidance and support of the faculty at the University of Waikato, who
                        have played a pivotal role in shaping my path and fostering a learning
                        environment that is both personal and purposeful. The skills and memories
                        from my time at university are invaluable, and I carry them with me as I
                        step into my professional career, eager to contribute to the intersection
                        of design, engineering, and innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveSlide("about")}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSlide === "about"
                  ? "bg-accent w-8"
                  : "bg-accent/30 hover:bg-accent/50"
              }`}
              aria-label="View About section"
            />
            <button
              onClick={() => setActiveSlide("award")}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSlide === "award"
                  ? "bg-accent w-8"
                  : "bg-accent/30 hover:bg-accent/50"
              }`}
              aria-label="View Award section"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
