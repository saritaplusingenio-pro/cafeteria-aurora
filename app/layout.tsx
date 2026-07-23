import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cafeteriaurora.example"),
  title: {
    default: "Cafetería Aurora | Café de especialidad en Madrid centro",
    template: "%s | Cafetería Aurora",
  },
  description:
    "Cafetería Aurora, café de especialidad en el corazón de Madrid. Descubre nuestra carta, horarios, fotos del local y contáctanos.",
  openGraph: {
    title: "Cafetería Aurora | Café de especialidad en Madrid centro",
    description:
      "Café de especialidad en el corazón de Madrid. Carta, horarios, fotos y contacto.",
    url: "https://cafeteriaurora.example",
    siteName: "Cafetería Aurora",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Interior acogedor de Cafetería Aurora",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
