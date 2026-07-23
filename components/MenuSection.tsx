import { menuData } from "@/lib/menu-data";

export function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-stone-900 sm:text-4xl">
          Nuestro menú
        </h2>
        <p className="mt-3 text-stone-600">
          Una selección cuidada de cafés y repostería casera.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {menuData.map((category) => (
          <div key={category.category}>
            <h3 className="mb-4 font-serif text-xl font-medium text-amber-800">
              {category.category}
            </h3>
            <ul className="flex flex-col gap-4">
              {category.items.map((item) => (
                <li key={item.name} className="flex flex-col gap-0.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-medium text-stone-900">{item.name}</span>
                    <span className="whitespace-nowrap text-sm text-stone-500">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
