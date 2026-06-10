import type { Locale } from "@/lib/i18n";

const es = {
  nav: {
    product: "Producto",
    how: "Cómo funciona",
    cta: "Unirme a la lista",
  },
  hero: {
    badge: "Próximamente — acceso anticipado",
    titleA: "Toda tu operación de seguros,",
    titleB: "en un solo lugar.",
    subtitle:
      "Bridg es la plataforma para administrar pólizas, clientes y solicitudes de seguros de vida, funerarios y gastos médicos — con un portal de autoservicio para tus asegurados.",
    ctaPrimary: "Unirme a la lista de espera",
    ctaSecondary: "Ver cómo funciona",
  },
  products: {
    title: "Dos productos, una sola plataforma",
    subtitle:
      "El equipo administrativo y el asegurado trabajan sobre la misma información, sin correos perdidos ni hojas de cálculo.",
    admin: {
      tag: "Para tu equipo",
      title: "Plataforma administrativa",
      description:
        "Gestiona todo el ciclo de vida de la póliza: altas, renovaciones, endosos, cancelaciones y cobranza. Expediente único por cliente con historial y documentos.",
      bullets: [
        "Pólizas de vida, funerarias y gastos médicos en un solo panel",
        "Expediente digital por cliente con documentos e historial",
        "Solicitudes y movimientos gestionados como tickets con trazabilidad",
      ],
    },
    portal: {
      tag: "Para tus asegurados",
      title: "Portal del asegurado",
      description:
        "Tus clientes entran con su usuario y resuelven solos: consultan sus pólizas activas, descargan documentos y levantan solicitudes sin llamarte.",
      bullets: [
        "Consulta de pólizas vigentes y coberturas",
        "Descarga de carátulas, certificados y recibos",
        "Solicitudes de movimientos, bajas e información en línea",
      ],
    },
  },
  features: {
    title: "Hecho para la operación real de seguros",
    items: [
      {
        title: "Multi-ramo",
        description:
          "Vida, funerario y gastos médicos mayores con sus reglas y vigencias propias.",
      },
      {
        title: "Tickets con trazabilidad",
        description:
          "Cada solicitud del asegurado se convierte en un ticket con estado, responsable e historial.",
      },
      {
        title: "Documentos centralizados",
        description:
          "Carátulas, endosos, recibos y certificados ligados a la póliza y al cliente.",
      },
      {
        title: "Renovaciones a tiempo",
        description:
          "Visibilidad de vigencias y vencimientos para que ninguna póliza se caiga por descuido.",
      },
      {
        title: "Menos llamadas, menos correos",
        description:
          "El portal de autoservicio absorbe las consultas repetitivas de tus asegurados.",
      },
      {
        title: "Tu cartera, tus datos",
        description:
          "Información de clientes y pólizas en una sola fuente de verdad, exportable.",
      },
    ],
  },
  how: {
    title: "Cómo funciona",
    steps: [
      {
        title: "Carga tu cartera",
        description:
          "Importa clientes y pólizas existentes; Bridg arma el expediente de cada asegurado.",
      },
      {
        title: "Opera desde un solo panel",
        description:
          "Tu equipo gestiona pólizas, movimientos y solicitudes con tickets y trazabilidad.",
      },
      {
        title: "Activa el portal",
        description:
          "Tus asegurados entran con su cuenta, consultan, descargan y solicitan en línea.",
      },
    ],
  },
  waitlist: {
    title: "Sé de los primeros en probarlo",
    subtitle:
      "Estamos abriendo acceso anticipado para agentes, agencias y aseguradoras. Déjanos tus datos y te contactamos.",
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
    submit: "Unirme a la lista de espera",
    submitting: "Enviando…",
    success: "¡Listo! Estás en la lista. Te contactaremos pronto.",
    duplicate: "Ese correo ya está registrado en la lista.",
    invalid: "Revisa tu nombre y correo e intenta de nuevo.",
    error: "Algo salió mal. Intenta de nuevo en un momento.",
    privacy: "Solo usaremos tus datos para contactarte sobre Bridg.",
  },
  footer: {
    tagline: "La plataforma para administrar seguros y atender asegurados.",
    rights: "Todos los derechos reservados.",
  },
};

const en: typeof es = {
  nav: {
    product: "Product",
    how: "How it works",
    cta: "Join the waitlist",
  },
  hero: {
    badge: "Coming soon — early access",
    titleA: "Your entire insurance operation,",
    titleB: "in one place.",
    subtitle:
      "Bridg is the platform to manage policies, clients and requests for life, funeral and medical expense insurance — with a self-service portal for your policyholders.",
    ctaPrimary: "Join the waitlist",
    ctaSecondary: "See how it works",
  },
  products: {
    title: "Two products, one platform",
    subtitle:
      "Your back office and your policyholders work on the same data — no lost emails, no spreadsheets.",
    admin: {
      tag: "For your team",
      title: "Admin platform",
      description:
        "Manage the full policy lifecycle: onboarding, renewals, endorsements, cancellations and collections. One file per client with history and documents.",
      bullets: [
        "Life, funeral and medical expense policies in a single panel",
        "Digital client file with documents and history",
        "Requests and changes handled as trackable tickets",
      ],
    },
    portal: {
      tag: "For your policyholders",
      title: "Policyholder portal",
      description:
        "Your clients log in and help themselves: check active policies, download documents and submit requests without calling you.",
      bullets: [
        "View active policies and coverage",
        "Download policy documents, certificates and receipts",
        "Submit changes, cancellations and information requests online",
      ],
    },
  },
  features: {
    title: "Built for real insurance operations",
    items: [
      {
        title: "Multi-line",
        description:
          "Life, funeral and major medical expense, each with its own rules and terms.",
      },
      {
        title: "Trackable tickets",
        description:
          "Every policyholder request becomes a ticket with status, owner and history.",
      },
      {
        title: "Centralized documents",
        description:
          "Policy schedules, endorsements, receipts and certificates linked to policy and client.",
      },
      {
        title: "Renewals on time",
        description:
          "Clear visibility of terms and expirations so no policy lapses by accident.",
      },
      {
        title: "Fewer calls, fewer emails",
        description:
          "The self-service portal absorbs your policyholders' repetitive questions.",
      },
      {
        title: "Your book, your data",
        description:
          "Client and policy information in a single source of truth, exportable.",
      },
    ],
  },
  how: {
    title: "How it works",
    steps: [
      {
        title: "Load your book of business",
        description:
          "Import existing clients and policies; Bridg builds each policyholder's file.",
      },
      {
        title: "Operate from one panel",
        description:
          "Your team manages policies, changes and requests with trackable tickets.",
      },
      {
        title: "Turn on the portal",
        description:
          "Policyholders log in to view, download and request — fully online.",
      },
    ],
  },
  waitlist: {
    title: "Be among the first to try it",
    subtitle:
      "We're opening early access for agents, agencies and insurers. Leave your details and we'll reach out.",
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
    submit: "Join the waitlist",
    submitting: "Submitting…",
    success: "Done! You're on the list. We'll be in touch soon.",
    duplicate: "That email is already on the list.",
    invalid: "Check your name and email and try again.",
    error: "Something went wrong. Please try again in a moment.",
    privacy: "We'll only use your details to contact you about Bridg.",
  },
  footer: {
    tagline: "The platform to manage insurance and serve policyholders.",
    rights: "All rights reserved.",
  },
};

export type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
