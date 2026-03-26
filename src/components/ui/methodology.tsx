"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Planeamiento",
    description: "Diseñamos la arquitectura base para garantizar escalabilidad y rendimiento.",
    lines: [
      { text: "├── src/", color: "keyword" },
      { text: "│   ├── app/", color: "normal" },
      { text: "│   ├── components/", color: "normal" },
      { text: "│   ├── lib/", color: "normal" },
      { text: "│   └── styles/", color: "normal" },
      { text: "├── public/", color: "keyword" },
      { text: "├── package.json", color: "string" },
      { text: "├── tailwind.config.ts", color: "string" },
      { text: "└── next.config.js", color: "string" },
    ],
    file: "estructura"
  },
  {
    id: 2,
    title: "Desarrollo",
    description: "Código limpio y modular, enfocado en UX y velocidad de carga.",
    lines: [
      { text: "function Hero({ title }) {", color: "keyword" },
      { text: "  return (", color: "keyword" },
      { text: "    <section>", color: "normal" },
      { text: '      <h1>{title}</h1>', color: "normal" },
      { text: '      <p>Tu web, lista.</p>', color: "string" },
      { text: "    </section>", color: "normal" },
      { text: "  );", color: "normal" },
      { text: "}", color: "keyword" },
    ],
    file: "Hero.jsx"
  },
  {
    id: 3,
    title: "Despliegue",
    description: "CI/CD para producción sin downtime, estabilidad 24/7.",
    lines: [
      { text: "$ git add .", color: "keyword" },
      { text: '$ git commit -m "release v1.0"', color: "string" },
      { text: "$ git push origin main", color: "keyword" },
      { text: "", color: "normal" },
      { text: "✓ Build successful", color: "string" },
      { text: "✓ Tests passed", color: "string" },
      { text: "✓ Deployed to production", color: "string" },
      { text: "→ https://tu-sitio.com", color: "normal" },
    ],
    file: "terminal"
  }
];

const colorMap: Record<string, string> = {
  keyword: "#60a5fa",
  string: "#34d399",
  normal: "#a3a3a3",
};

export function Methodology() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });

  useEffect(() => {
    if (isInView && !hasStarted) setHasStarted(true);
  }, [isInView, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <div ref={sectionRef} className="w-full flex flex-col">

      {/* ── Full-width Timeline ── */}
      <div className="relative w-full mb-14">
        <div className="absolute top-5 left-[16.66%] right-[16.66%] h-[2px] bg-border" />
        <motion.div
          className="absolute top-5 left-[16.66%] h-[2px] bg-foreground/50 origin-left"
          animate={{ width: `${(activeStep / (steps.length - 1)) * 66.66}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <div className="relative grid grid-cols-3 w-full">
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isPassed = index < activeStep;
            return (
              <button
                key={step.id}
                className="flex flex-col items-center cursor-pointer group focus:outline-none"
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-foreground text-background scale-110 shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                      : isPassed
                        ? "bg-muted text-foreground border border-border"
                        : "bg-card text-muted-foreground border border-border group-hover:border-foreground/30"
                  }`}
                >
                  {step.id}
                </div>
                <span className={`mt-3 text-xs md:text-sm transition-colors duration-300 whitespace-nowrap ${isActive ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                  Paso {step.id}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Three cards side by side ── */}
      <div className="relative w-full overflow-hidden pb-4 px-1">
        <div 
          className="flex transition-transform duration-500 ease-in-out md:grid md:grid-cols-3 md:gap-4 md:!transform-none"
          style={{ transform: `translateX(-${activeStep * 100}%)` }}
        >
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            return (
              <div key={step.id} className="w-full flex-shrink-0 px-2 md:px-0 md:w-auto">
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer h-full rounded-xl border p-5 flex flex-col gap-4 transition-colors duration-300 ${
                    isActive ? "bg-card border-border shadow-sm" : "bg-card/40 border-border/30"
                  }`}
                >
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{step.description}</p>
                  </div>

                  <div className="bg-secondary rounded-lg border border-border overflow-hidden flex-1 flex flex-col">
                    <div className="bg-muted flex items-center px-3 py-2 border-b border-border">
                      <span className="text-[10px] text-muted-foreground font-mono select-none">{step.file}</span>
                    </div>
                    <div className="p-3 font-mono text-[11px] md:text-xs leading-relaxed flex-1 overflow-x-auto">
                      {step.lines.map((line, i) => (
                        <div key={i} style={{ color: colorMap[line.color] }}>{line.text || "\u00A0"}</div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile-only CTA button */}
      <div className="mt-6 md:hidden">
        <a
          href="#services"
          className="inline-flex items-center justify-center w-full px-5 py-3 text-base bg-foreground text-background rounded-full hover:opacity-80 transition-opacity font-medium"
        >
          Comenzar Proyecto
        </a>
      </div>
    </div>
  );
}
