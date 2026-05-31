"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BigZoHero() {
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
        type: "spring" as const,
        damping: 8,
        stiffness: 200,
        mass: 0.8,
      },
    },
  };

  const textArray = "BIGZO".split("");

  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-orange-900/5 pointer-events-none" />

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Main content — single centered column, no overlap */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-xl md:max-w-2xl mx-auto px-6 pt-32 md:pt-36 pb-28 gap-8 md:gap-10">

        {/* BIGZO animated title */}
        <motion.div
          className="text-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-center items-baseline gap-1">
            {textArray.map((letter, index) => (
              <motion.span
                key={index}
                className="text-[52px] sm:text-[64px] md:text-[80px] lg:text-[100px] font-black leading-none"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))',
                }}
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="text-(--text-muted) text-sm uppercase tracking-[0.25em] mt-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Global Hip-Hop Artist
          </motion.p>
        </motion.div>

        {/* Spotify CTA — primary conversion action, moved up */}
        <motion.div
          className="flex flex-col items-center gap-2.5 w-full"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/50 text-yellow-400 text-xs uppercase tracking-widest font-bold">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true"><path d="M9 18V5l12-2v13M6 21a3 3 0 100-6 3 3 0 000 6zm12-2a3 3 0 100-6 3 3 0 000 6z"/></svg>
            New Single &middot; Releasing June 1st, 2026
          </span>
          <a
            href="https://open.spotify.com/artist/07ZqHkqPIjjH8wrCpYQQxg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest text-black transition-all duration-300 hover:scale-105 active:scale-95 w-full max-w-[280px] min-h-[52px] justify-center"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.45)',
            }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Stream on Spotify
          </a>
        </motion.div>

        {/* Profile image — aspect-[3/4] so face is never cut */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="mx-auto w-full max-w-[300px] rounded-2xl overflow-hidden border-4 border-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.5)]">
            <div className="relative w-full aspect-3/4">
              <Image
                src="/1566479.jpg"
                alt="BigZo"
                fill
                sizes="(max-width: 768px) 90vw, 300px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
