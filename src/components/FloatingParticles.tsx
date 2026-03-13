import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FloatingParticlesProps {
  count?: number;
}

const FloatingParticles: React.FC<FloatingParticlesProps> = ({ count = 20 }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    // Generate random particle data only on client-side to avoid hydration mismatch
    const newParticles = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 3 + 1, // 1px to 4px
      duration: Math.random() * 20 + 10, // 10s to 30s
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 motion-reduce:hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            y: -100, // Float upwards
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;