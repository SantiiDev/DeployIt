import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeployIt — Ingeniería Web para Marcas Modernas",
  description: "Desarrollo web profesional: landing pages ultrarrápidas, tiendas online escalables y aplicaciones a medida. Potenciado por Next.js, React y un stack moderno.",
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preload" href="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" as="fetch" crossOrigin="anonymous" />
      </head>
      <body className={`antialiased ${lato.className}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
