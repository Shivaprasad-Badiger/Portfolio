import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <div 
          className="absolute w-96 h-96 rounded-full border border-primary/10 animate-pulse"
          style={{
            top: '20%',
            right: '15%',
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        
        {/* Medium Circle */}
        <div 
          className="absolute w-64 h-64 rounded-full border border-primary/15"
          style={{
            bottom: '25%',
            left: '20%',
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            animation: 'float 15s ease-in-out infinite reverse',
          }}
        />
        
        {/* Small Circle */}
        <div 
          className="absolute w-32 h-32 rounded-full bg-primary/5 backdrop-blur-sm"
          style={{
            top: '60%',
            right: '40%',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            animation: 'float 12s ease-in-out infinite',
          }}
        />
        
        {/* Rotating Square */}
        <div 
          className="absolute w-24 h-24 border border-primary/20 backdrop-blur-sm"
          style={{
            top: '30%',
            left: '10%',
            transform: `rotate(45deg) translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
            animation: 'spin 30s linear infinite, float 18s ease-in-out infinite',
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            }}
          />
        </div>
      </div>

    </div>
  );
}