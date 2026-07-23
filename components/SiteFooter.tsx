import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-semibold text-white">
              Cafetería Aurora
            </p>
            <p className="mt-2 text-sm text-stone-400">
              Café de especialidad en el corazón de Madrid.
            </p>
          </div>

          <nav aria-label="Enlaces del sitio">
            <p className="font-medium text-white">Navegación</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <Link href="#menu" className="hover:text-white">
                  Carta
                </Link>
              </li>
              <li>
                <Link href="#horarios" className="hover:text-white">
                  Horarios
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="hover:text-white">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-medium text-white">Datos legales</p>
            <p className="mt-2 text-sm text-stone-400">
              [razón social] · CIF [número de identificación fiscal]
            </p>
            <p className="mt-1 text-sm text-stone-400">
              [dirección del local], Madrid
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-stone-800 pt-6 text-center text-sm text-stone-500">
          <p>© {year} Cafetería Aurora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
