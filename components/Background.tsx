
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Background: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the spotlight
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] bg-cds-bg pointer-events-none overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(#71717A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Mouse Follower Light */}
      <motion.div 
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-cds-accent/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      {/* Static Ambient Glow (Bottom Right) */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#015668]/20 rounded-full blur-[120px] mix-blend-screen" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)]" />
    </div>
  );
};