import React from 'react';
import Cube from './Cube';

const ThemeConcept: React.FC = () => {
  return (
    <section id="theme" className="py-20 md:py-32 bg-secondary/50 dark:bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Cube Visual on the Left */}
          <div className="lg:col-span-4 flex justify-center lg:justify-center items-center relative h-64 lg:min-h-[400px]">
            <Cube size="w-60 h-60" className="opacity-100" />
          </div>
          
          {/* Text Content on the Right */}
          <div className="lg:col-span-8">
            <h2 className="section-title mb-8">The Cube Concept</h2>
            
            <p className="text-lg leading-relaxed mb-6 text-foreground/70 dark:text-foreground/80">
              The visual theme of this portfolio is built around a simple cube, the quiet beginning of almost every industrial design journey. When we sketch, it's the first form we draw to explore proportion, volume, and intent. In CAD, it's the primitive we shape, refine, and transform with extrudes, fillets, and features, as ideas evolve into products.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-foreground/70 dark:text-foreground/80">
              The cube represents structure and possibility, a neutral form that becomes anything with enough iteration, curiosity, and, of course, intent.
            </p>
            <p className="text-lg leading-relaxed font-semibold text-foreground dark:text-foreground">
              As I step into my career as an industrial designer, the cube mirrors my own starting point, ready to be shaped by experience, collaboration, and experimentation. The animated cube that appears throughout this portfolio is a small tribute to the process itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeConcept;