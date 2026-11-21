# SolutionsHub — Landing Institucional (`solutionshub.dev`)

Landing oficial de **SolutionsHub**, ecosistema de ingeniería B2B especializado en automatizaciones con n8n, agentes conversacionales de IA, desarrollo de software a la medida y productos propios en producción como **[SmartSavings](https://smartsavings.solutionshub.dev)**.

## Stack

- **Frontend:** React 18 + TypeScript + Vite 5
- **Estilos:** Tailwind CSS (`Space Grotesk`, `Inter`, `JetBrains Mono`)
- **Animaciones:** Framer Motion (`useScroll`, `useTransform`, reveals escalonados, efecto magnético y diagramas SVG animados)
- **Iconografía:** Lucide React
- **Internacionalización:** Bilingüe `ES / EN` integrada en `src/i18n/dictionaries.ts`

## Estructura

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navegación fija, switch ES/EN y menú móvil
│   │   └── Footer.tsx      # Enlaces a SmartSavings, contacto y redes
│   ├── AnimatedText.tsx    # Revelado de texto palabra por palabra en scroll
│   ├── FadeIn.tsx          # Entradas suaves con Framer Motion
│   ├── Magnet.tsx          # Atracción sutil para botones CTA
│   └── Marquee.tsx         # Cinta tipográfica infinita
├── i18n/
│   └── dictionaries.ts     # Textos ES/EN, stack y enlaces reales
├── sections/
│   ├── Hero.tsx            # Titular display, propuesta de valor y métricas
│   ├── About.tsx           # Enfoque SolutionsHub y ficha "En corto"
│   ├── Work.tsx            # Tarjetas apilables: SmartSavings + soluciones B2B
│   ├── Stack.tsx           # Capacidades técnicas por bloque
│   ├── Process.tsx         # Metodología de trabajo en 3 pasos
│   ├── Services.tsx        # Catálogo B2B en banda clara de contraste
│   └── Contact.tsx         # contacto@solutionshub.dev y WhatsApp
├── App.tsx
├── index.css
└── main.tsx
```

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Contacto

- **Correo:** `contacto@solutionshub.dev`
- **Producto activo:** [SmartSavings](https://smartsavings.solutionshub.dev)
