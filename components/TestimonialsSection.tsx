import { testimonialsData } from "@/lib/testimonials-data";

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
          Lo que dicen nuestros clientes
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <figure
            key={index}
            className="flex flex-col justify-between rounded-lg border border-stone-200 bg-white p-6 shadow-sm"
          >
            <blockquote className="text-stone-700">
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-4 font-medium text-amber-800">
              {testimonial.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
