export type Language = 'es' | 'en';

export const defaultLanguage: Language = 'es';
export const languages: readonly Language[] = ['es', 'en'];

/** Datos de marca y enlaces reales de SolutionsHub */
export const site = {
  brand: 'SolutionsHub',
  shortBrand: 'SH',
  domain: 'solutionshub.dev',
  email: 'contacto@solutionshub.dev',
  phoneDisplay: '+57 301 593 6081',
  whatsapp: 'https://wa.me/573015936081',
  whatsappPrefilledEs:
    'https://wa.me/573015936081?text=Hola%20SolutionsHub%2C%20quiero%20conversar%20sobre%20un%20proyecto.',
  whatsappPrefilledEn:
    'https://wa.me/573015936081?text=Hi%20SolutionsHub%2C%20I%27d%20like%20to%20discuss%20a%20project.',
  smartsavings: 'https://smartsavings.solutionshub.dev',
  founderPortfolio: 'https://testjostin.pro/es/',
  github: 'https://github.com/jostincp',
  linkedin: 'https://www.linkedin.com/in/jostin-castillo/',
} as const;

export const stackGroups = [
  {
    id: 'ai',
    items: ['Gemini 2.5 Flash', 'DeepSeek', 'Whisper', 'n8n', 'WhatsApp Cloud API', 'MCP', 'OCR / Visión', 'NLP'],
  },
  {
    id: 'backend',
    items: ['Python', 'FastAPI', 'Node.js', 'Express', 'TypeScript', 'APIs REST', 'Webhooks', 'WebSockets'],
  },
  {
    id: 'frontend',
    items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'data',
    items: ['PostgreSQL', 'Supabase', 'Redis', 'MySQL', 'SQL Optimization'],
  },
  {
    id: 'devops',
    items: ['Docker', 'Docker Compose', 'Linux VPS', 'Cloudflare Tunnels', 'Nginx / Caddy', 'GitHub Actions'],
  },
] as const;

export const marqueeItems = [
  'SmartSavings',
  'n8n',
  'WhatsApp Business API',
  'Python',
  'FastAPI',
  'Gemini 2.5 Flash',
  'DeepSeek',
  'Whisper',
  'PostgreSQL',
  'Supabase',
  'Next.js',
  'Docker',
  'Cloudflare',
  'TypeScript',
] as const;

export const translations = {
  es: {
    nav: {
      about: 'Nosotros',
      work: 'Productos y casos',
      stack: 'Stack',
      process: 'Proceso',
      services: 'Servicios',
      contact: 'Contacto',
      cta: 'Hablemos',
    },
    hero: {
      available: 'Disponible para proyectos B2B',
      role: 'Ingeniería B2B',
      roleSecondary: 'IA & Automatización',
      pitch:
        'Diseñamos y operamos soluciones tecnológicas que rinden en producción: productos digitales propios como SmartSavings, automatizaciones B2B, agentes conversacionales con IA y software a la medida.',
      ctaWork: 'Ver productos y casos',
      ctaContact: 'Iniciar proyecto',
      stats: [
        { value: '24/7', label: 'Flujos y agentes operando en producción' },
        { value: '3', label: 'Modelos de IA integrados en SmartSavings' },
        { value: '< 24h', label: 'Respuesta técnica inicial' },
      ],
    },
    about: {
      eyebrow: 'Enfoque',
      title: 'Sobre SolutionsHub',
      lead: 'Ecosistema de ingeniería enfocado en resolver problemas operativos reales con software a la medida, agentes de IA y automatizaciones confiables.',
      body: 'Construimos tecnología práctica, sin capas innecesarias. Desde bots multimodales por WhatsApp que entienden texto, voz y facturas hasta integraciones entre CRMs, bases de datos y plataformas web completas. Probamos nuestra propia arquitectura en producción todos los días con productos como SmartSavings y llevamos ese mismo rigor a cada proyecto B2B: modelado de datos limpio, tolerancia a fallos y despliegue automatizado.',
      factsTitle: 'En corto',
      facts: [
        { k: 'Producto activo', v: 'SmartSavings — asistente financiero multimodal en WhatsApp' },
        { k: 'Especialidad', v: 'Automatización B2B, agentes IA y desarrollo full stack' },
        { k: 'Operación', v: 'Bogotá, Colombia · clientes remotos en LATAM y global' },
        { k: 'Contacto directo', v: site.email },
      ],
    },
    work: {
      eyebrow: 'Productos y soluciones',
      title: 'Trabajo en producción',
      subtitle:
        'Nuestro producto propio operativo y las arquitecturas B2B que implementamos para empresas que necesitan quitar trabajo manual y escalar.',
      visit: 'Visitar SmartSavings',
      discuss: 'Solicitar solución similar',
      items: {
        smartsavings: {
          tag: 'Producto propio · Operativo',
          name: 'SmartSavings',
          summary:
            'Asistente financiero conversacional en WhatsApp creado dentro de SolutionsHub para detectar fugas de dinero quincenal sin fricción: registra gastos e ingresos por texto, nota de voz o foto de factura.',
          metric: 'Operativo · WhatsApp & Telegram · 3 modelos de IA · Supabase',
          bullets: [
            'Multimodal real en producción: Gemini 2.5 Flash analiza fotos de facturas ítem por ítem, Whisper transcribe notas de voz y DeepSeek clasifica intención, monto, categoría y moneda desde lenguaje natural.',
            'Orquestado en n8n sobre WhatsApp Business Cloud API, con vinculación multicanal entre Telegram y WhatsApp y persistencia en PostgreSQL sobre Supabase.',
            'Taxonomía limpia de 12 categorías, corrección de gastos en el mismo chat, recordatorios de cierre diario (2:00 PM / 8:00 PM) y resumen automático con cifras a las 9:00 PM.',
            'Resiliencia productiva: validación de montos antes de persistir, reintentos automáticos y aviso explícito al usuario ante cualquier latencia o error de un modelo.',
          ],
        },
        automation: {
          tag: 'Automatización B2B · Agentes IA',
          name: 'Orquestación & Agentes B2B',
          summary:
            'Workflows autónomos y bots empresariales que conectan WhatsApp Business, CRMs, telefonía y bases de datos para atender clientes, sincronizar registros y eliminar tareas manuales repetitivas.',
          metric: 'n8n · Python / FastAPI · WhatsApp API · Tolerancia a fallos',
          bullets: [
            'Flujos en n8n auto-hospedado y microservicios en Python para integrar CRMs, hojas operativas, ERPs, webhooks y APIs corporativas sin intervención manual.',
            'Agentes conversacionales con LLMs para calificación de leads, PQRS, soporte técnico, agendamiento y consultas directas sobre bases de datos.',
            'Pipelines con reintentos, manejo estructurado de excepciones y alertas tempranas para evitar pérdida silenciosa de datos.',
            'Arquitectura modular y documentada para que tu equipo tenga visibilidad y control sobre cada integración.',
          ],
        },
        custom: {
          tag: 'Desarrollo a Medida · Cloud',
          name: 'Plataformas Web & Infraestructura',
          summary:
            'Landings de conversión, aplicaciones web SaaS y paneles internos construidos de punta a punta y desplegados sobre infraestructura contenedorizada, segura y reproducible.',
          metric: 'React / Next.js · Docker · PostgreSQL & Redis · Cloudflare',
          bullets: [
            'Interfaces rápidas y limpias en React, Next.js y TypeScript enfocadas en conversión, claridad técnica y experiencia móvil.',
            'Backends y APIs REST en Python (FastAPI) o Node.js respaldados por PostgreSQL, Supabase y capas de caché en Redis.',
            'Despliegue en contenedores Docker sobre servidores Linux con Cloudflare Tunnels, HTTPS automático y entornos separados de staging y producción.',
            'Pipelines CI/CD en GitHub Actions y documentación técnica lista para mantenimiento y crecimiento.',
          ],
        },
      },
    },
    stack: {
      eyebrow: 'Capacidades',
      title: 'Stack técnico',
      subtitle:
        'Herramientas probadas en producción que combinamos según el problema, sin sobredimensionar la arquitectura.',
      groups: {
        ai: 'IA & Automatización',
        backend: 'Backend & APIs',
        frontend: 'Frontend',
        data: 'Datos',
        devops: 'Cloud & DevOps',
      },
    },
    process: {
      eyebrow: 'Metodología',
      title: 'Cómo trabajamos',
      subtitle:
        'Un flujo claro y directo: menos burocracia, entregables verificables y sistemas que llegan a producción.',
      steps: [
        {
          num: '01',
          title: 'Diagnóstico y arquitectura',
          description:
            'Entendemos el cuello de botella operativo o la meta de negocio, definimos el modelo de datos, las integraciones y el alcance exacto antes de escribir código.',
          deliverable: 'Mapa de arquitectura, alcance y plan de entrega',
        },
        {
          num: '02',
          title: 'Construcción modular',
          description:
            'Desarrollamos por bloques funcionales —workflows, agentes IA, APIs e interfaz— validando casos reales, validaciones y manejo de errores en entorno de pruebas.',
          deliverable: 'Entorno staging funcional y pruebas con datos reales',
        },
        {
          num: '03',
          title: 'Despliegue y operación',
          description:
            'Publicamos con Docker, dominio, HTTPS, respaldos y monitoreo. Entregamos documentación clara para que el sistema opere de forma estable desde el día uno.',
          deliverable: 'Producción activa, documentación y acompañamiento',
        },
      ],
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Qué construimos',
      subtitle:
        'Cuatro líneas de trabajo diseñadas para empresas y equipos que buscan resultados medibles en producción.',
      items: [
        {
          num: '01',
          name: 'Agentes de IA y bots conversacionales',
          description:
            'Asistentes en WhatsApp y Telegram capaces de procesar texto, audio e imágenes —como facturas o documentos— conectados directamente a tu base de datos y reglas de negocio.',
          tags: ['WhatsApp Business API', 'Gemini · DeepSeek · Whisper', 'Memoria y consultas SQL'],
        },
        {
          num: '02',
          name: 'Automatización de procesos B2B',
          description:
            'Orquestación de flujos en n8n, webhooks y scripts en Python que sincronizan CRM, notificaciones, reportes y operaciones internas para quitar tareas repetitivas del equipo.',
          tags: ['n8n auto-hospedado', 'APIs REST & Webhooks', 'Reintentos y alertas'],
        },
        {
          num: '03',
          name: 'Desarrollo web y software a la medida',
          description:
            'Landings de alta conversión, plataformas web, paneles administrativos y productos SaaS con arquitectura limpia, código mantenible y tiempos de carga rápidos.',
          tags: ['React & Next.js', 'Python / Node.js', 'PostgreSQL & Supabase'],
        },
        {
          num: '04',
          name: 'Infraestructura cloud y despliegue',
          description:
            'Servidores Linux, contenedores Docker, túneles seguros de Cloudflare, certificados SSL y pipelines de CI/CD para que cada solución corra estable y protegida.',
          tags: ['Docker & Compose', 'Cloudflare Zero Trust', 'CI/CD GitHub Actions'],
        },
      ],
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos de tu proyecto',
      description:
        'Cuéntanos qué proceso quieres automatizar o qué producto necesitas construir. Respondemos con una ruta técnica clara en menos de 24 horas.',
      emailLabel: 'Correo',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Operación',
      location: 'Bogotá, Colombia · disponible en remoto',
      ctaWhatsapp: 'Escribir por WhatsApp',
      ctaEmail: 'Enviar correo',
    },
    footer: {
      tagline: 'Soluciones tecnológicas B2B · IA & Automatización',
      productsLabel: 'Producto',
      founderLabel: 'Portafolio del fundador',
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    nav: {
      about: 'About',
      work: 'Products & work',
      stack: 'Stack',
      process: 'Process',
      services: 'Services',
      contact: 'Contact',
      cta: 'Let’s talk',
    },
    hero: {
      available: 'Available for B2B projects',
      role: 'B2B Engineering',
      roleSecondary: 'AI & Automation',
      pitch:
        'We design and run production-grade software: in-house products like SmartSavings, B2B workflow automation, multimodal AI agents, and custom web platforms.',
      ctaWork: 'View products & work',
      ctaContact: 'Start a project',
      stats: [
        { value: '24/7', label: 'Workflows & agents running in production' },
        { value: '3', label: 'AI models orchestrated in SmartSavings' },
        { value: '< 24h', label: 'Initial technical response' },
      ],
    },
    about: {
      eyebrow: 'Approach',
      title: 'About SolutionsHub',
      lead: 'An engineering studio focused on solving real operational bottlenecks with custom software, AI agents, and reliable automation.',
      body: 'We build practical technology without unnecessary layers. From multimodal WhatsApp bots that understand text, voice notes, and receipt photos to end-to-end integrations connecting CRMs, databases, and custom web apps. We battle-test our architecture every day through our own live products like SmartSavings and bring that exact same rigor to every B2B engagement: clean data modeling, fault tolerance, and automated deployment.',
      factsTitle: 'At a glance',
      facts: [
        { k: 'Live product', v: 'SmartSavings — multimodal financial assistant on WhatsApp' },
        { k: 'Focus', v: 'B2B automation, AI agents, and full-stack software' },
        { k: 'Base', v: 'Bogotá, Colombia · working remotely worldwide' },
        { k: 'Direct email', v: site.email },
      ],
    },
    work: {
      eyebrow: 'Products & solutions',
      title: 'Work in production',
      subtitle:
        'Our live in-house product alongside the B2B architectures we build for teams looking to eliminate manual work and scale.',
      visit: 'Visit SmartSavings',
      discuss: 'Request similar solution',
      items: {
        smartsavings: {
          tag: 'In-house product · Live',
          name: 'SmartSavings',
          summary:
            'A conversational personal-finance assistant on WhatsApp built at SolutionsHub to spot biweekly cash leaks effortlessly: log expenses and income by text, voice note, or receipt photo.',
          metric: 'Live · WhatsApp & Telegram · 3 AI models · Supabase',
          bullets: [
            'True multimodal production pipeline: Gemini 2.5 Flash extracts and categorizes photographed receipts item by item, Whisper transcribes voice notes, and DeepSeek classifies intent, amount, category, and currency from natural language.',
            'Orchestrated in n8n on top of the WhatsApp Business Cloud API, with multichannel Telegram ↔ WhatsApp linking and PostgreSQL persistence on Supabase.',
            'Clean 12-category taxonomy, in-chat expense corrections, daily close reminders (2:00 PM / 8:00 PM), and an automated 9:00 PM summary with category totals.',
            'Built for reliability: amount validation before persistence, automatic retries on every AI node, and clear user error notices so no transaction is silently dropped.',
          ],
        },
        automation: {
          tag: 'B2B Automation · AI Agents',
          name: 'B2B Orchestration & Agents',
          summary:
            'Autonomous workflows and business bots connecting WhatsApp Business, CRMs, telephony, and databases to handle customer requests, sync records, and eliminate repetitive manual work.',
          metric: 'n8n · Python / FastAPI · WhatsApp API · Fault-tolerant',
          bullets: [
            'Self-hosted n8n workflows and Python microservices connecting CRMs, operational sheets, ERPs, webhooks, and internal APIs without manual handoffs.',
            'LLM-powered conversational agents for lead qualification, customer support, claims, scheduling, and live database lookups.',
            'Resilient pipelines with retries, structured error handling, and alerts to prevent silent data loss.',
            'Modular, documented architecture so your team keeps full visibility and ownership over every integration.',
          ],
        },
        custom: {
          tag: 'Custom Software · Cloud',
          name: 'Web Platforms & Infrastructure',
          summary:
            'High-conversion landing pages, SaaS web apps, and internal dashboards engineered end to end and deployed on containerized, secure, reproducible infrastructure.',
          metric: 'React / Next.js · Docker · PostgreSQL & Redis · Cloudflare',
          bullets: [
            'Fast, clean React, Next.js, and TypeScript interfaces designed for conversion, clarity, and responsive mobile performance.',
            'Python (FastAPI) and Node.js REST backends backed by PostgreSQL, Supabase, and Redis caching layers.',
            'Dockerized deployments on Linux servers with Cloudflare Tunnels, automatic HTTPS, and isolated staging and production environments.',
            'GitHub Actions CI/CD pipelines and clear technical documentation ready for long-term maintenance.',
          ],
        },
      },
    },
    stack: {
      eyebrow: 'Capabilities',
      title: 'Technical stack',
      subtitle:
        'Production-proven technologies selected for the problem at hand — never over-engineered.',
      groups: {
        ai: 'AI & Automation',
        backend: 'Backend & APIs',
        frontend: 'Frontend',
        data: 'Data',
        devops: 'Cloud & DevOps',
      },
    },
    process: {
      eyebrow: 'Methodology',
      title: 'How we work',
      subtitle:
        'A straightforward engineering loop: low friction, verifiable milestones, and systems that actually reach production.',
      steps: [
        {
          num: '01',
          title: 'Discovery & architecture',
          description:
            'We map the operational bottleneck or product goal, define the data model, integrations, and exact scope before writing code.',
          deliverable: 'Architecture blueprint, scope, and delivery roadmap',
        },
        {
          num: '02',
          title: 'Modular build',
          description:
            'We ship in functional blocks — workflows, AI agents, APIs, and UI — validating real scenarios, edge cases, and error handling in staging.',
          deliverable: 'Working staging environment tested with real data',
        },
        {
          num: '03',
          title: 'Deploy & operate',
          description:
            'We launch with Docker, custom domain, HTTPS, backups, and monitoring, backed by clear documentation for day-one stability.',
          deliverable: 'Live production release, documentation, and support',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'What we build',
      subtitle:
        'Four focused service lines designed for companies and teams seeking measurable results in production.',
      items: [
        {
          num: '01',
          name: 'AI agents & conversational bots',
          description:
            'WhatsApp and Telegram assistants capable of understanding text, voice, and images — like receipts or documents — wired directly to your database and business rules.',
          tags: ['WhatsApp Business API', 'Gemini · DeepSeek · Whisper', 'Live SQL queries'],
        },
        {
          num: '02',
          name: 'B2B process automation',
          description:
            'n8n workflows, webhooks, and Python services syncing CRMs, alerts, reports, and internal operations so your team stops doing repetitive manual work.',
          tags: ['Self-hosted n8n', 'REST APIs & Webhooks', 'Retries & alerting'],
        },
        {
          num: '03',
          name: 'Custom web & software development',
          description:
            'Conversion landing pages, web applications, admin panels, and SaaS products built with clean architecture, maintainable code, and fast load times.',
          tags: ['React & Next.js', 'Python / Node.js', 'PostgreSQL & Supabase'],
        },
        {
          num: '04',
          name: 'Cloud infrastructure & deployment',
          description:
            'Linux servers, Docker containers, Cloudflare Zero Trust tunnels, SSL certificates, and CI/CD pipelines so every system runs securely and reliably.',
          tags: ['Docker & Compose', 'Cloudflare Zero Trust', 'GitHub Actions CI/CD'],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk about your project',
      description:
        'Tell us what workflow you want to automate or what product you want to build. We’ll reply with a clear technical path in under 24 hours.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Location',
      location: 'Bogotá, Colombia · available remotely',
      ctaWhatsapp: 'Message on WhatsApp',
      ctaEmail: 'Send an email',
    },
    footer: {
      tagline: 'B2B Tech Solutions · AI & Automation',
      productsLabel: 'Product',
      founderLabel: 'Founder portfolio',
      rights: 'All rights reserved.',
    },
  },
} as const;

export type Dict = (typeof translations)['es'] | (typeof translations)['en'];

export function getDictionary(lang: Language): Dict {
  return translations[lang] ?? translations[defaultLanguage];
}
