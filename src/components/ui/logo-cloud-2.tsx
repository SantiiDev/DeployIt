import { cn } from "@/lib/utils";
import React from "react";

const logos = [
  {
    name: "NVIDIA",
    url: "https://cdn.simpleicons.org/nvidia/76B900",
  },
  {
    name: "Supabase",
    url: "https://svgl.app/library/supabase.svg",
  },
  {
    name: "GitHub",
    url: "https://cdn.simpleicons.org/github/000000",
  },
  {
    name: "Gemini",
    url: "https://svgl.app/library/gemini.svg",
  },
  {
    name: "Netlify",
    url: "https://svgl.app/library/netlify.svg",
  },
  {
    name: "Antigravity",
    url: "/logo2.png", // special case
  },
  {
    name: "Claude",
    url: "https://svgl.app/library/claude-ai-icon.svg",
  },
  {
    name: "Vercel",
    url: "https://svgl.app/library/vercel.svg",
  },
  {
    name: "Next.js",
    url: "https://cdn.simpleicons.org/nextdotjs/000000",
  },
  {
    name: "React.js",
    url: "https://cdn.simpleicons.org/react/61DAFB",
  },
  {
    name: "CSS",
    url: "https://svgl.app/library/css.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  {
    name: "HTML",
    url: "https://cdn.simpleicons.org/html5/E34F26",
  },
];

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden bg-background py-10",
        className
      )}
      {...props}
    >
      <div className="flex w-max animate-marquee gap-16 md:gap-32 px-8 md:px-16 items-center">
        {/* Render the list twice for seamless looping */}
        {[...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex items-center gap-4">
              <img 
                src={logo.url} 
                alt={`${logo.name} Logo`} 
                className={cn(
                  "h-10 md:h-12 w-auto object-contain", 
                  // Invert only strictly black logos in dark mode
                  (logo.name === "GitHub" || logo.name === "Vercel" || logo.name === "Next.js") ? "dark:invert" : ""
                )}  
              />
            <span className="font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight text-foreground whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Edge Gradients for smooth fade in/out */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 max-w-[200px] bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 max-w-[200px] bg-gradient-to-l from-background to-transparent" />

      {/* Custom Keyframes for Marquee */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
