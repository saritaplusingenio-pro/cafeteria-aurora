import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { HoursSection } from "@/components/HoursSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MapEmbed } from "@/components/MapEmbed";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Cafetería Aurora | Café de especialidad en Madrid centro",
  description:
    "Descubre Cafetería Aurora: carta de especialidad, horarios, galería de fotos y cómo llegar en el centro de Madrid.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Cafetería Aurora",
  image: "https://cafeteriaurora.example/placeholder.svg",
  "@id": "https://cafeteriaurora.example",
  url: "https://cafeteriaurora.example",
  telephone: "[teléfono de contacto]",
  address: {
    "@type": "PostalAddress",
    streetAddress: "[dirección del local]",
    addressLocality: "Madrid",
    addressRegion: "Madrid",
    postalCode: "[código postal]",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.4168",
    longitude: "-3.7038",
  },
  servesCuisine: "Café de especialidad",
  priceRange: "€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "[hora de apertura]",
      closes: "[hora de cierre]",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "[hora de apertura fin de semana]",
      closes: "[hora de cierre fin de semana]",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <MenuSection />
      <HoursSection />
      <PhotoGallery />
      <TestimonialsSection />
      <section
        id="contacto"
        className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-2 md:gap-16"
      >
        <div className="space-y-8">
          <ContactInfo />
          <MapEmbed />
        </div>
        <ContactForm />
      </section>
    </>
  );
}
