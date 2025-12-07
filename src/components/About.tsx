const About = () => {
  return (
    <section id="about" className="relative z-10 py-24 bg-muted/30">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center px-4 sm:px-8 lg:px-16">
          
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
                I am Dhwani Jha, a final year student at the University of Waikato.
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
                solve problems but also enrich everyday lives, while adapting to
                technology like AI and principles like sustainability.
              </p>

            </div>
          </div>

          {/* Image spans 5/12 columns */}
          <div className="lg:col-span-5 h-full">
            <div className="h-full flex items-stretch justify-end">
              <img
                src="/lovable-uploads/dhwani-about-me.jpg"
                alt="Dhwani Jha"
                className="rounded-lg shadow-2xl object-cover h-full w-auto max-w-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;