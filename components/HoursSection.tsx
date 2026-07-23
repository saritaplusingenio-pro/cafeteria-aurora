import { hoursData } from "@/lib/hours-data";

export function HoursSection() {
  return (
    <section id="horarios" className="bg-amber-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
            Horarios de apertura
          </h2>
          <p className="mt-3 text-stone-600">
            Te esperamos con café recién hecho todos los días de la semana.
          </p>
        </div>

        <dl className="divide-y divide-amber-200 rounded-lg border border-amber-200 bg-white">
          {hoursData.map((entry) => (
            <div
              key={entry.day}
              className="flex items-center justify-between px-6 py-4"
            >
              <dt className="font-medium text-stone-900">{entry.day}</dt>
              <dd className="text-stone-600">{entry.hours}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
