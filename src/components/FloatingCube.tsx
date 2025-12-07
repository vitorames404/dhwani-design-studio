import React, { useState, useEffect } from 'react';
import Cube from './Cube';

interface CubeConfig {
  id: number;
  size: string;
  speed: number; // Multiplier for scroll speed
  horizontalOffset: number; // Starting horizontal position (%)
  waveAmplitude: number; // How much it waves horizontally
  waveFrequency: number; // How many waves
  opacity: number;
  zIndex: number; // For layering (lower = behind content)
  startOffset: number; // Starting Y position (0-1, where 0 = top, 1 = bottom)
}

const FloatingCube: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Define multiple cubes with different properties
  const cubes: CubeConfig[] = [
    {
      id: 1,
      size: 'w-40 h-40', // Big center cube
      speed: 1,
      horizontalOffset: 50, // Center
      waveAmplitude: 50, // Less wave motion for center
      waveFrequency: 2,
      opacity: 0.7,
      zIndex: 0, // Behind content
      startOffset: 0.3, // Start 30% down the viewport
    },
    {
      id: 2,
      size: 'w-32 h-32',
      speed: 1.1,
      horizontalOffset: 85, // Right side
      waveAmplitude: 100,
      waveFrequency: 3,
      opacity: 0.85,
      zIndex: 0, // Behind content
      startOffset: 0.1, // Start 10% down the viewport
    },
    {
      id: 3,
      size: 'w-24 h-24',
      speed: 0.7,
      horizontalOffset: 10, // Left side
      waveAmplitude: 80,
      waveFrequency: 2,
      opacity: 0.7,
      zIndex: 0, // Behind content
      startOffset: 0.6, // Start 60% down the viewport
    },
    {
      id: 4,
      size: 'w-20 h-20',
      speed: 1.3,
      horizontalOffset: 70,
      waveAmplitude: 60,
      waveFrequency: 4,
      opacity: 0.6,
      zIndex: 0, // Behind content
      startOffset: 0.45, // Start 45% down the viewport
    },
    {
      id: 5,
      size: 'w-16 h-16',
      speed: 0.9,
      horizontalOffset: 25,
      waveAmplitude: 50,
      waveFrequency: 2.5,
      opacity: 0.65,
      zIndex: 0, // Behind content
      startOffset: 0.75, // Start 75% down the viewport
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / documentHeight, 1);
      
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const calculatePosition = (cube: CubeConfig) => {
    const viewportHeight = window.innerHeight;
    
    // Start position in the viewport (based on startOffset)
    const initialY = viewportHeight * cube.startOffset;
    
    // Calculate scroll progress (0 to 1) based on the page scroll
    const scrolled = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - viewportHeight;
    const baseProgress = documentHeight > 0 ? scrolled / documentHeight : 0;
    
    // Fast floating effect with sine waves for up/down motion
    const time = baseProgress * cube.speed * 10; // Faster frequency for shaky movement
    
    // Create multiple overlapping sine waves for complex floating motion
    const floatY1 = Math.sin(time * 2) * 30; // Primary float
    const floatY2 = Math.sin(time * 3.7) * 20; // Secondary float (different frequency)
    const floatY3 = Math.cos(time * 5.2) * 15; // Tertiary float for shake effect
    
    // Combine all float movements
    const totalFloat = floatY1 + floatY2 + floatY3;
    
    // Slow downward drift to move through sections (only 20% of viewport over entire scroll)
    const drift = (baseProgress * viewportHeight * 0.2);
    
    // Calculate final vertical position
    const yPos = initialY + drift + totalFloat;
    
    // Horizontal wave motion - also more active
    const xFloat1 = Math.sin(time * 2.5) * cube.waveAmplitude * 0.6;
    const xFloat2 = Math.cos(time * 4.1) * cube.waveAmplitude * 0.4;
    const xOffset = xFloat1 + xFloat2;
    
    return { x: xOffset, y: yPos };
  };

  return (
    <>
      {cubes.map((cube) => {
        const position = calculatePosition(cube);
        return (
          <div
            key={cube.id}
            className="fixed pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: `${cube.horizontalOffset}%`,
              top: `${position.y}px`,
              transform: `translateX(${position.x}px)`,
              opacity: cube.opacity,
              zIndex: cube.zIndex,
            }}
          >
            <Cube size={cube.size} className="opacity-80" />
          </div>
        );
      })}
    </>
  );
};

export default FloatingCube;