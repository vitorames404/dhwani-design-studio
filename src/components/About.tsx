const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl w-full">
          <div>
            <h2 className="section-title mb-8">About Me</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                I am Dhwani Jha, a final year student at the University of Waikato. 
                My major in Industrial Design, paired with minors in Interaction Design 
                and Marketing, equips me with a unique perspective on designing products 
                that resonate with users while meeting market demands.
              </p>
              <p>
                I believe that the future of design lies in seamlessly integrating 
                technology with human-centered solutions, creating products that not only 
                solve problems but also enrich everyday lives, while adapting to technology 
                like AI and principles like sustainability.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center">
            <img 
              src="/lovable-uploads/dhwani-about-me.png" 
              alt="Dhwani Jha"
              className="w-full h-auto rounded-lg shadow-2xl overflow-hidden max-w-[700px] max-h-[400px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;