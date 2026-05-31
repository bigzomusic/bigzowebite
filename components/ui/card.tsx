import { cva, type VariantProps } from "class-variance-authority"
import { Heart } from "lucide-react"
import Image from "next/image"
import * as React from "react"

import { cn } from "@/lib/utils"

//==- Shadcn UI Utility (for merging classes) -==//
// You can get this from the shadcn/ui documentation.
// Usually located in `lib/utils.ts`
// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"
//
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

// Destination Card Component
const cardVariants = cva(
  "relative grid h-full w-full transform-gpu overflow-hidden rounded-xl border shadow-sm transition-all duration-300 ease-in-out group",
  {
    variants: {},
    defaultVariants: {},
  }
)

export interface DestinationCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  /** The URL for the background image of the card. */
  imageUrl: string;
  /** The category or region text displayed above the main title. */
  category: string;
  /** The main title of the destination. */
  title: string;
  /** A callback function to be invoked when the like button is clicked. */
  onLike: () => void;
  /** Determines if the destination is marked as liked. */
  isLiked?: boolean;
}

const DestinationCard = React.forwardRef<
  HTMLDivElement,
  DestinationCardProps
>(
  (
    {
      className,
      imageUrl,
      category,
      title,
      onLike,
      isLiked = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ className }))}
        {...props}
      >
        {/* Background Image with Hover Animation */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        {/* Like Button */}
        <button
          aria-label={isLiked ? "Unlike destination" : "Like destination"}
          onClick={(e) => {
            e.preventDefault(); // Prevent card click events if any
            onLike();
          }}
          className={cn(
            "absolute top-4 right-4 z-20 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all duration-200 hover:bg-white/30 active:scale-95",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
        >
          <Heart
            className={cn(
              "h-6 w-6 text-white transition-all",
              isLiked && "fill-red-500 text-red-500"
            )}
          />
        </button>

        {/* Text Content with Hover Animation */}
        <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
          <p className="text-sm font-medium uppercase tracking-wider text-gray-200">
            - {category} -
          </p>
          <h2 className="mt-1 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        </div>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, DestinationCard }

