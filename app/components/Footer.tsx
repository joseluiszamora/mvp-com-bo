import Link from "next/link";
import IconArrowUpRight from "@tabler/icons-react/dist/esm/icons/IconArrowUpRight.mjs";
import ActionLink from "./ActionLink";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-white text-ink">
      <div className="mx-auto max-w-studio px-5 pb-6 pt-16 sm:px-8 lg:px-12 lg:pt-24">
        <div className="flex flex-col justify-between gap-10 pb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-sm text-gray-500">Hagamos que suceda.</p>
            <h2 className="font-sans text-editorial font-medium text-ink">
              Tu próximo capítulo
              <br />
              empieza con una conversación.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5">
            <ActionLink href="mailto:hola@mvp.dev">
              Hablemos de tu proyecto
            </ActionLink>
            <div className="flex flex-wrap gap-5 text-sm text-gray-600">
              <a href="mailto:hola@mvp.dev" className="hover:text-ink">
                hola@mvp.dev
              </a>
              <a href="https://wa.me/59170000000" className="hover:text-ink">
                WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold text-white">
              MVP
            </span>
            <span>© {new Date().getFullYear()} MVP.dev · La Paz, Bolivia</span>
          </a>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/politica-de-privacidad" className="hover:text-ink">
              Privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-ink">
              Términos
            </Link>
            <a
              href="#inicio"
              aria-label="Volver al inicio"
              className="rounded-full border border-gray-300 p-3"
            >
              <IconArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
