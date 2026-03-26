"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

const SplineScene = dynamic(() => import("@/components/ui/splite").then(mod => mod.SplineScene), { ssr: false });

import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";
import { Methodology } from "@/components/ui/methodology";
import { FaqsSection } from "@/components/ui/faqs-1";
import { Navbar1 } from "@/components/ui/navbar-1";
import { Footerdemo } from "@/components/ui/footer-section";
import { Pricing } from "@/components/ui/pricing";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/* ——— Section 5: Testimonials Data ——— */
const testimonials = [
  {
    text: "DeployIt duplicó nuestra tasa de conversión en un mes. El código es inmaculado.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "CEO, TechStartup",
  },
  {
    text: "Velocidad increíble. Entregaron una plataforma de e-commerce compleja antes de lo previsto.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Director de Operaciones",
  },
  {
    text: "Nuestra nueva web app escala sin esfuerzo. La arquitectura en Next.js maneja picos masivos de tráfico.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "CTO",
  },
  {
    text: "Trabajar con DeployIt es como tener un equipo interno de ingeniería de élite.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Fundador",
  },
  {
    text: "De Figma a producción en tiempo récord. Nuestras nuevas landing pages literalmente vuelan.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Directora de Marketing",
  },
  {
    text: "La integración con CMS Headless nos da verdadera flexibilidad sin comprometer el rendimiento.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Gestora de Contenidos",
  },
  {
    text: "Nuestra tasa de rebote se desplomó después de que DeployIt optimizó nuestras core web vitals.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Growth Lead",
  },
  {
    text: "Entienden perfectamente cómo construir experiencias web que priorizan la interacción real del usuario.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Product Manager",
  },
  {
    text: "Usar DeployIt para nuestro desarrollo web fue la mejor decisión que tomamos en el Q3.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);



export default function Home() {
  useEffect(() => {
    // Force scroll to top on page refresh
    window.scrollTo(0, 0);
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* ===== Section 8: Navbar ===== */}
      <Navbar1 />

      {/* ===== Section 1: Spline 3D Hero ===== */}
      <Card className="w-full h-[100dvh] bg-neutral-50 dark:bg-black relative overflow-hidden rounded-none border-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex h-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-16 lg:p-20 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400">
              Ingeniería para tu Web
            </h1>
            <p className="mt-4 md:mt-6 text-neutral-600 dark:text-neutral-300 max-w-lg text-base md:text-lg lg:text-xl">
              Desarrollo web para marcas modernas. Creamos landing pages ultrarrápidas, tiendas online escalables y aplicaciones a medida.
            </p>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 hover:text-neutral-800 dark:hover:text-white transition-colors cursor-pointer animate-bounce z-20"
          onClick={() => {
            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </motion.div>
      </Card>

      {/* ===== Section 2: Evervault Card ===== */}
      <section id="services" className="py-20 md:py-28 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="border border-border text-foreground font-medium py-1 px-4 rounded-full text-sm">Servicios</div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Construyendo las bases digitales de los negocios modernos de alto crecimiento.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border border-border flex flex-col items-center justify-center max-w-sm mx-auto w-full p-4 relative h-[30rem] bg-card rounded-xl shadow-sm">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-muted-foreground" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-muted-foreground" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-muted-foreground" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-muted-foreground" />

              <EvervaultCard text="Landing Pages" />

              <h2 className="text-foreground mt-4 text-sm font-medium tracking-tight text-center">
                Páginas de marketing ultrarrápidas diseñadas para máxima conversión.
              </h2>
            </div>

            {/* Card 2 */}
            <div className="border border-border flex flex-col items-center justify-center max-w-sm mx-auto w-full p-4 relative h-[30rem] bg-card rounded-xl shadow-sm">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-muted-foreground" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-muted-foreground" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-muted-foreground" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-muted-foreground" />

              <EvervaultCard text="E-Commerce" />

              <h2 className="text-foreground mt-4 text-sm font-medium tracking-tight text-center">
                Tiendas online escalables que ofrecen una experiencia de compra fluida.
              </h2>
            </div>

            {/* Card 3 */}
            <div className="border border-border flex flex-col items-center justify-center max-w-sm mx-auto w-full p-4 relative h-[30rem] bg-card rounded-xl shadow-sm">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-muted-foreground" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-muted-foreground" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-muted-foreground" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-muted-foreground" />

              <EvervaultCard text="Custom Apps" />

              <h2 className="text-foreground mt-4 text-sm font-medium tracking-tight text-center">
                Aplicaciones web complejas y robustas, creadas para escalar sin esfuerzo.
              </h2>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== Section 3: Methodology ===== */}
      <section id="methodology" className="py-20 md:py-28 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="border border-border text-foreground font-medium py-1 px-4 rounded-full text-sm">Metodología</div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Nuestra Metodología
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un enfoque sistemático y transparente diseñado para transformar tu visión en una plataforma de alto nivel.
            </p>
          </div>
          <Methodology />
        </motion.div>
      </section>

      {/* ===== Section 4: Logo Cloud ===== */}
      <section id="logos" className="py-12 md:py-16 w-full overflow-hidden">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative mx-auto w-full">
            <div className="flex justify-center mb-4">
              <div className="border border-border text-foreground font-medium py-1 px-4 rounded-full text-sm">Stack</div>
            </div>
            <h2 className="mb-12 text-center font-bold text-3xl tracking-tight md:text-4xl lg:text-5xl text-foreground px-4">
              Potenciado por un <span className="text-primary cursor-default">stack</span> moderno.
            </h2>
            <LogoCloud />
          </div>
        </motion.div>
      </section>

      {/* ===== Section 5: Testimonials ===== */}
      <section id="testimonials" className="py-20 md:py-28 relative max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
            <div className="flex justify-center">
              <div className="border border-border text-foreground font-medium py-1 px-4 rounded-full text-sm">Testimonios</div>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mt-5 text-foreground text-center">
              Casos de Éxito de Nuestros Clientes
            </h2>
            <p className="text-center mt-5 text-muted-foreground text-lg">
              Escucha a los fundadores y empresas que eligieron DeployIt.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        </motion.div>
      </section>



      {/* ===== Section 6: World Map ===== */}
      <section id="world-map" className="py-20 md:py-28 container mx-auto px-4 md:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto"
        >
          <div className="text-center lg:text-left mb-10 lg:mb-0">
            <div className="flex justify-center lg:justify-start mb-4">
              <div className="border border-border text-foreground font-medium py-1 px-4 rounded-full text-sm">Mundial</div>
            </div>
            <p className="font-bold text-3xl md:text-5xl tracking-tight text-foreground">
              Impacto{" "}
              <span className="text-muted-foreground">
                {"Mundial".split("").map((word, idx) => (
                  <motion.span
                    key={idx}
                    className="inline-block"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.04 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 py-4">
              Colaboramos con equipos ambiciosos de todo el mundo para crear productos digitales excepcionales.
            </p>
          </div>
          <div className="w-full max-w-2xl mx-auto lg:ml-auto lg:mr-0 mt-10 lg:mt-0">
            <GlobePulse className="w-full" />
          </div>
        </motion.div>
      </section>

      {/* ===== Section 7: FAQ ===== */}
      <section id="faq" className="py-20 md:py-28 max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <FaqsSection />
        </motion.div>
      </section>

      {/* ===== Section 9: Footer ===== */}
      <Footerdemo />
    </main>
  );
}
