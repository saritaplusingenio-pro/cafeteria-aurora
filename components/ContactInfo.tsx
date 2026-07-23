import { MapPin, Phone, Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 text-stone-800">
      <div className="flex items-start gap-3">
        <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
        <div>
          <p className="font-medium">Dirección</p>
          <p className="text-stone-600">[dirección del local], Madrid</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Phone className="mt-1 h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
        <div>
          <p className="font-medium">Teléfono</p>
          <a
            href="tel:[telefono-local]"
            className="text-stone-600 underline-offset-2 hover:underline"
          >
            [teléfono del local]
          </a>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Mail className="mt-1 h-5 w-5 shrink-0 text-amber-800" aria-hidden="true" />
        <div>
          <p className="font-medium">Email</p>
          <a
            href="mailto:dueno@cafeteriaurora.example"
            className="text-stone-600 underline-offset-2 hover:underline"
          >
            dueno@cafeteriaurora.example
          </a>
        </div>
      </div>
    </div>
  );
}
