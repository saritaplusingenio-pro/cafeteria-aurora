"use client";

import { useState } from "react";

export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="mapa" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="mb-8 text-center">
        <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
          Cómo llegar
        </h2>
        <p className="mt-3 text-stone-600">
          Estamos en el centro de Madrid, fácil de encontrar.
        </p>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
        {!loaded && (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-amber-50 text-stone-700 hover:bg-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
          >
            <span className="font-medium">Cargar mapa de Google Maps</span>
            <span className="text-sm text-stone-500">
              [dirección del local], Madrid
            </span>
          </button>
        )}
        {loaded && (
          <iframe
            title="Ubicación de Cafetería Aurora en Google Maps"
            src="https://www.google.com/maps?q=Madrid+centro&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
      </div>
    </section>
  );
}
