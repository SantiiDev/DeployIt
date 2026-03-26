# DeployIt — Ingeniería Web para Marcas Modernas

Landing page de **DeployIt**, una agencia de desarrollo web profesional. Construida con un stack moderno para ofrecer una experiencia visual premium.

## Stack Tecnológico

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Framer Motion, Spline 3D
- **Estilos:** Tailwind CSS 4, Radix UI
- **Tipografía:** Lato (Google Fonts)

## Desarrollo Local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de Producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx          # Landing page principal
│   ├── start/page.tsx    # Formulario de onboarding
│   ├── layout.tsx        # Layout raíz con tema oscuro
│   └── globals.css       # Design tokens y animaciones
├── components/
│   ├── ui/               # Componentes reutilizables
│   └── theme-provider.tsx
└── lib/
    └── utils.ts          # Utilidades (cn helper)
```
