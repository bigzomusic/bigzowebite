"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Track {
  title: string;
  type: string;
  year: string;
  albumArt: string;
}

interface MusicPortfolioProps {
  tracks: Track[];
}

export default function MusicPortfolio({ tracks }: MusicPortfolioProps) {
  return (
    <ul className="space-y-4 w-full max-w-4xl mx-auto">
      {tracks.map((track, i) => (
        <motion.li
          key={track.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="portfolio-item group relative flex items-center justify-between p-4 border-b border-[var(--glass-border)] hover:bg-[var(--glass-bg)] transition-colors cursor-pointer rounded-lg"
        >
          <div className="flex items-center gap-6 z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 relative overflow-hidden rounded-md shadow-lg group-hover:scale-105 transition-transform duration-300">
               <Image src={track.albumArt} alt={track.title} width={96} height={96} className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
            </div>
            <div className="flex flex-col">
              <span className="portfolio-title text-2xl sm:text-4xl font-[family-name:var(--font-heading)] uppercase text-[var(--text)] group-hover:text-[var(--accent)] group-hover:translate-x-2 transition-all duration-300">
                {track.title}
              </span>
              <span className="portfolio-meta text-sm sm:text-base text-[var(--text-muted)] opacity-70 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                {track.type} • {track.year}
              </span>
            </div>
          </div>
          
          <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button className="px-6 py-2 rounded-full border border-[var(--glass-border)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
              Listen Now
            </button>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

