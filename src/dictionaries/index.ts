import type { Locale } from "@/lib/i18n";

const es = {
  nav: {
    product: "Producto",
    how: "Cómo funciona",
    cta: "Solicitar acceso",
    theme: "Cambiar tema",
  },
  hero: {
    badge: "Acceso por invitación",
    titleA: "Toda tu operación de seguros,",
    titleB: "en un solo lugar.",
    subtitle:
      "Bridg es la plataforma para administrar clientes, personas aseguradas y pólizas de vida, funerarios y gastos médicos — con un portal donde tus clientes consultan, descargan y solicitan sin depender de tu equipo.",
    ctaPrimary: "Solicitar acceso",
    ctaSecondary: "Ver cómo funciona",
  },
  products: {
    title: "Dos productos, una sola plataforma",
    subtitle:
      "Tu equipo administrativo y tus clientes trabajan sobre la misma información, sin correos perdidos ni hojas de cálculo.",
    admin: {
      tag: "Para tu equipo",
      title: "Plataforma administrativa",
      description:
        "Administra clientes, sus personas aseguradas y sus pólizas, conectadas por contratos de plan con vigencias individuales. Toda solicitud — del portal, por teléfono o correo — queda registrada y con seguimiento.",
      bullets: [
        "Clientes, personas y pólizas conectados por contratos de plan con vigencias por persona",
        "Layouts de operación para las principales aseguradoras: Metlife, Bupa, Mapfre y más",
        "Solicitudes con tracking, SLAs y acuses, registradas automática o manualmente",
        "Carga de información por interfaz web o plantillas de Excel",
      ],
    },
    portal: {
      tag: "Para tus clientes",
      title: "Portal del cliente",
      description:
        "Tus clientes entran con credenciales que tu equipo otorga y se atienden solos: consultan su información, sus personas aseguradas y sus pólizas, descargan documentos y levantan solicitudes.",
      bullets: [
        "Pólizas y contratos de cada persona asegurada, vigentes e históricos",
        "Descarga de documentos individual o masiva, sin intervención de tu equipo",
        "Altas, bajas y modificaciones capturadas por el cliente, ejecutadas por tu equipo",
        "Control de accesos administrado desde tu plataforma",
      ],
    },
  },
  features: {
    title: "Hecho para la operación real de seguros",
    items: [
      {
        title: "Contratos de plan",
        description:
          "Cada persona conectada a su póliza con fechas de inicio y fin propias, activas o históricas.",
      },
      {
        title: "Layouts de aseguradoras",
        description:
          "Genera layouts de operación para Metlife, Bupa, Mapfre y más — solicitudes listas para enviar.",
      },
      {
        title: "Excel o interfaz web",
        description:
          "Carga clientes, personas y pólizas pantalla por pantalla o masivamente con plantillas de Excel.",
      },
      {
        title: "SLAs y acuses",
        description:
          "Cada solicitud con tiempos comprometidos, acuses y trazabilidad de inicio a fin.",
      },
      {
        title: "Descargas masivas",
        description:
          "Tu cliente descarga documentos individuales o en lote, sin que nadie de tu equipo intervenga.",
      },
      {
        title: "Multi-ramo",
        description:
          "Vida, funerario y gastos médicos mayores con sus reglas y vigencias propias.",
      },
    ],
  },
  how: {
    title: "Cómo funciona",
    steps: [
      {
        title: "Carga tu cartera",
        description:
          "Importa clientes, personas y pólizas vía Excel o interfaz web; Bridg lo conecta todo con contratos de plan.",
      },
      {
        title: "Opera desde un solo panel",
        description:
          "Tu equipo gestiona pólizas, movimientos y solicitudes con tickets, SLAs y layouts por aseguradora.",
      },
      {
        title: "Activa el portal",
        description:
          "Otorga accesos a tus clientes: consultan, descargan documentos y capturan solicitudes en línea.",
      },
    ],
  },
  waitlist: {
    title: "Solicita acceso a Bridg",
    subtitle:
      "Bridg ya opera con agentes, agencias y aseguradoras. Vamos abriendo acceso por invitación — déjanos tus datos y te contactamos.",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo electrónico",
    emailPlaceholder: "tu@empresa.com",
    company: "Empresa / Agencia",
    companyPlaceholder: "Nombre de tu empresa (opcional)",
    role: "¿Qué te describe mejor?",
    roles: {
      agent: "Agente / Broker independiente",
      agency: "Agencia o promotoría",
      insurer: "Aseguradora",
      other: "Otro",
    },
    submit: "Solicitar acceso",
    submitting: "Enviando…",
    success: "¡Listo! Recibimos tu solicitud. Te contactaremos para darte acceso.",
    duplicate: "Ese correo ya tiene una solicitud registrada.",
    invalid: "Revisa tu nombre y correo e intenta de nuevo.",
    error: "Algo salió mal. Intenta de nuevo en un momento.",
    privacy: "Solo usaremos tus datos para contactarte sobre Bridg.",
  },
  footer: {
    tagline: "La plataforma para administrar seguros y atender clientes.",
    rights: "Todos los derechos reservados.",
  },
};

const en: typeof es = {
  nav: {
    product: "Product",
    how: "How it works",
    cta: "Request access",
    theme: "Toggle theme",
  },
  hero: {
    badge: "Access by invitation",
    titleA: "Your entire insurance operation,",
    titleB: "in one place.",
    subtitle:
      "Bridg is the platform to manage clients, insured members and policies for life, funeral and medical expense insurance — with a portal where your clients view, download and request without depending on your team.",
    ctaPrimary: "Request access",
    ctaSecondary: "See how it works",
  },
  products: {
    title: "Two products, one platform",
    subtitle:
      "Your back office and your clients work on the same data — no lost emails, no spreadsheets.",
    admin: {
      tag: "For your team",
      title: "Admin platform",
      description:
        "Manage clients, their insured members and their policies, connected through plan contracts with per-person terms. Every request — from the portal, by phone or email — gets registered and tracked.",
      bullets: [
        "Clients, members and policies connected through plan contracts with per-person terms",
        "Operation layouts for major carriers: Metlife, Bupa, Mapfre and more",
        "Requests with tracking, SLAs and acknowledgments, registered automatically or manually",
        "Data entry through the web interface or Excel templates",
      ],
    },
    portal: {
      tag: "For your clients",
      title: "Client portal",
      description:
        "Your clients log in with credentials your team grants and help themselves: they view their information, insured members and policies, download documents and submit requests.",
      bullets: [
        "Policies and contracts for every insured member, active and historical",
        "Individual or bulk document downloads, no human intervention needed",
        "Additions, removals and changes entered by the client, executed by your team",
        "Access control managed from your admin platform",
      ],
    },
  },
  features: {
    title: "Built for real insurance operations",
    items: [
      {
        title: "Plan contracts",
        description:
          "Every member linked to their policy with their own start and end dates, active or historical.",
      },
      {
        title: "Carrier layouts",
        description:
          "Generate operation layouts for Metlife, Bupa, Mapfre and more — requests ready to send.",
      },
      {
        title: "Excel or web interface",
        description:
          "Load clients, members and policies screen by screen or in bulk with Excel templates.",
      },
      {
        title: "SLAs & acknowledgments",
        description:
          "Every request with committed response times, acknowledgments and end-to-end traceability.",
      },
      {
        title: "Bulk downloads",
        description:
          "Your client downloads individual or bulk documents without anyone on your team stepping in.",
      },
      {
        title: "Multi-line",
        description:
          "Life, funeral and major medical expense, each with its own rules and terms.",
      },
    ],
  },
  how: {
    title: "How it works",
    steps: [
      {
        title: "Load your book of business",
        description:
          "Import clients, members and policies via Excel or the web interface; Bridg connects it all through plan contracts.",
      },
      {
        title: "Operate from one panel",
        description:
          "Your team manages policies, changes and requests with tickets, SLAs and per-carrier layouts.",
      },
      {
        title: "Turn on the portal",
        description:
          "Grant access to your clients: they view, download documents and enter requests online.",
      },
    ],
  },
  waitlist: {
    title: "Request access to Bridg",
    subtitle:
      "Bridg is already live with agents, agencies and insurers. We're opening access by invitation — leave your details and we'll reach out.",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@company.com",
    company: "Company / Agency",
    companyPlaceholder: "Your company name (optional)",
    role: "What describes you best?",
    roles: {
      agent: "Independent agent / broker",
      agency: "Agency",
      insurer: "Insurance carrier",
      other: "Other",
    },
    submit: "Request access",
    submitting: "Submitting…",
    success: "Done! We got your request. We'll be in touch to set up your access.",
    duplicate: "That email already has a request on file.",
    invalid: "Check your name and email and try again.",
    error: "Something went wrong. Please try again in a moment.",
    privacy: "We'll only use your details to contact you about Bridg.",
  },
  footer: {
    tagline: "The platform to manage insurance and serve clients.",
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
