"use client";

import * as React from "react";
import { DestinationCard } from "@/components/ui/card";

export default function CardDemoPage() {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm h-[500px]">
        <DestinationCard
          imageUrl="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&auto=format&fit=crop&q=60"
          category="Global Hip-Hop"
          title="Big Zo"
          isLiked={isLiked}
          onLike={handleLike}
          aria-label="View details for Big Zo, Global Hip-Hop Artist"
        />
      </div>
    </div>
  );
}
