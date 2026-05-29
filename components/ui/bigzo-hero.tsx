"use client";

import { motion } from "framer-motion";
import { ScrollIndicator } from "./scroll-indicator";

export function BigZoHero() {
  // Animate text letters
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 200,
        mass: 0.8,
      },
    },
  };

  const textArray = "BIGZO".split("");

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-900/5 pointer-events-none" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        {/* BIGZO Text */}
        <motion.div 
          className="flex justify-center items-baseline gap-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {textArray.map((letter, index) => (
            <motion.span
              key={index}
              className="text-[120px] md:text-[180px] lg:text-[240px] font-black text-white leading-none"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div 
          className="mt-8 md:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wider">
            Global Hip-Hop Artist
          </p>
          <p className="text-xs md:text-sm lg:text-base text-gray-500 mt-3 tracking-widest">
            STREAMING IN 135+ COUNTRIES WORLDWIDE
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </div>
  );
}
