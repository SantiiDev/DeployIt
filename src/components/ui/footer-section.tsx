"use client"

import * as React from "react"
import { MessageCircle, Camera, Globe, Moon, Send, Sun, Rss } from "lucide-react"
import { useTheme } from "next-themes"

function Footerdemo() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDarkMode = theme === "dark"

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Mantente Conectado</h2>
            <p className="mb-6 text-muted-foreground">
              Únete a nuestro newsletter para recibir los últimos insights y ofertas exclusivas.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="w-full pr-12 backdrop-blur-sm rounded-full bg-background border border-input px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="space-y-2 text-sm">
              <a href="#services" className="block transition-colors hover:text-primary">
                Servicios
              </a>
              <a href="#methodology" className="block transition-colors hover:text-primary">
                Metodología
              </a>
              <a href="#faq" className="block transition-colors hover:text-primary">
                Preguntas
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contáctanos</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Email: <a href="mailto:teamdeployit@gmail.com" className="hover:text-primary transition-colors">teamdeployit@gmail.com</a></p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Síguenos</h3>
            <div className="mb-6 flex space-x-4">
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors" title="Instagram">
                <Camera className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors" title="LinkedIn">
                <Globe className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <button
                onClick={() => setTheme(isDarkMode ? "light" : "dark")}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDarkMode ? 'bg-primary' : 'bg-input'}`}
                role="switch"
                aria-checked={isDarkMode}
                aria-label="Toggle dark mode"
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-background transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
              <Moon className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 DeployIt Web Hub. Todos los derechos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Política de Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Términos de Servicio
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Configuración de Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
