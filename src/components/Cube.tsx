import React, { useMemo } from 'react';

interface CubeProps {
  size?: string; // Tailwind size class, e.g., 'w-16 h-16'
  className?: string;
}


const Cube: React.FC<CubeProps> = ({ size = 'w-16 h-16', className = '' }) => {
  // Extract the size value (e.g., '16' from 'w-16') to calculate half-size for CSS variable
  const halfSize = useMemo(() => {
    const match = size.match(/w-(\d+)/);
    if (match) {
      // Tailwind size unit is 0.25rem, so 16 is 4rem. Half is 2rem.
      // We pass the half-size in rem units.
      return `${(parseInt(match[1]) * 0.25) / 2}rem`;
    }
    return '2rem'; // Default half-size for w-16
  }, [size]);

  return (
    <div
      className={`${size} ${className} relative`}
      style={{
        perspective: '1000px',
      } as React.CSSProperties}
    >
      <div 
        className="absolute inset-0 animate-slow-rotate"
        style={{
          '--cube-half-size': halfSize,
          transformStyle: 'preserve-3d',
        } as React.CSSProperties}
      >
        <div className="cube-face cube-face-front"></div>
        <div className="cube-face cube-face-back"></div>
        <div className="cube-face cube-face-right"></div>
        <div className="cube-face cube-face-left"></div>
        <div className="cube-face cube-face-top"></div>
        <div className="cube-face cube-face-bottom"></div>
      </div>
    </div>
  );
};

export default Cube;
