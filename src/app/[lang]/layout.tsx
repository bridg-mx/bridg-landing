import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const es = lang !== "en";
  return {
    title: es
      ? "Bridg — Tu operación de seguros en un solo lugar"
      : "Bridg — Your insurance operation in one place",
    description: es
      ? "Plataforma para administrar pólizas, clientes y solicitudes de seguros de vida, funerarios y gastos médicos, con portal de autoservicio para asegurados."
      : "Platform to manage policies, clients and requests for life, funeral and medical expense insurance, with a self-service policyholder portal.",
    alternates: {
      languages: { es: "/es", en: "/en" },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang satisfies Locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-slate-950 font-sans text-slate-100">
        {children}
      </body>
    </html>
  );
}
