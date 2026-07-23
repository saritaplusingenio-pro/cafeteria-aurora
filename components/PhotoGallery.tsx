"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Photo {
  src: string;
  alt: string;
}

const photos: Photo[] = [
  { src: "/placeholder.svg", alt: "Interior de Cafetería Aurora con luz natural" },
  { src: "/placeholder.svg", alt: "Barra de café de Cafetería Aurora" },
  { src: "/placeholder.svg", alt: "Mesa con repostería casera" },
  { src: "/placeholder.svg", alt: "Rincón de lectura de la cafetería" },
  { src: "/placeholder.svg", alt: "Taza de café de especialidad" },
  { src: "/placeholder.svg", alt: "Fachada de Cafetería Aurora" },
];

export function PhotoGallery() {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <section id="galeria" className="bg-amber-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
            Galería
          </h2>
          <p className="mt-3 text-stone-600">Un vistazo a nuestro espacio.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {photos.map((photo, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelected(photo)}
              className="group relative aspect-square overflow-hidden rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
              aria-label={`Ampliar foto: ${photo.alt}`}
            >
              {/* TODO: reemplazar con asset final */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Cerrar foto ampliada"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="relative h-[70vh] w-full max-w-3xl">
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
