import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';


interface AnimatedHeadingProps {
  text: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ text }) => {
  // Split text into words for staggered effect
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -45,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative perspective-[1000px]">
      {/* Screen Reader Only Text */}
      <h1 className="sr-only">{text}</h1>
      
      {/* Visual Animated Text */}
      <motion.div
        aria-hidden="true"
        className="flex flex-wrap gap-x-3 md:gap-x-4"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/40 pb-2"
            style={{ transformOrigin: "bottom" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedHeading;