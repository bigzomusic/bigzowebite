"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export interface DockItemData {
  link: string;
  Icon: React.ReactNode;
  target?: string;
}

type DockProps = {
  position?: "bottom" | "top" | "left";
  items: DockItemData[];
  className?: string;
};

export function MagneticDock({ position = "bottom", items, className }: DockProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const getTranslate = (index: number) => {
    if (hoverIndex === null) return 0;
    const distance = index - hoverIndex;
    if (Math.abs(distance) > 2) return 0; // only nearby icons affected
    return -distance * 18; // smoother magnetic pull
  };

  return (
    <Card
      className={cn(
        "flex gap-6 p-4 rounded-3xl shadow-2xl backdrop-blur-2xl",
        "bg-black/60 border border-white/10 dark:border-white/10",
        position === "bottom" && "flex-row",
        position === "top" && "flex-row",
        position === "left" && "flex-col",
        className
      )}
    >
      {items.map((item, i) => (
        <Link key={i} href={item.link} target={item.target}>
          <motion.div
            className="relative flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
            animate={{
              y: position === "left" ? getTranslate(i) : 0,
              x: position !== "left" ? getTranslate(i) : 0,
              scale: hoverIndex === i ? 1.35 : 1,
            }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            {item.Icon}
          </motion.div>
        </Link>
      ))}
    </Card>
  );
}
