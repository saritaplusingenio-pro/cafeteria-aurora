import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-stone-900">
      <Image
        src="/placeholder.svg"
        alt="Interior acogedor de Cafetería Aurora con luz natural"
        fill
        priority
        className="object-cover opacity-60"
      />
      {/* TODO: reemplazar con asset final */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center">
        <h1 className="font-serif text-4xl font-semibold text-amber-50 sm:text-5xl lg:text-6xl">
          Cafetería Aurora
        </h1>
        <p className="max-w-xl text-lg text-amber-100 sm:text-xl">
          Café de especialidad en el corazón de Madrid. Un rincón cálido para
          disfrutar cada taza con calma.
        </p>
        <a
          href="#contacto"
          className="rounded-md bg-amber-800 px-6 py-3 font-medium text-amber-50 transition-colors hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
        >
          Escríbenos
        </a>
      </div>
    </section>
  );
}
