"use client";

import Link from "next/link";
import {
  IconArrowUp,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSend,
} from "@tabler/icons-react";

const footerLinks = {
  servicios: [
    { label: "Aplicaciones web", href: "#servicios" },
    { label: "Apps móviles", href: "#servicios" },
    { label: "Cloud & DevOps", href: "#servicios" },
    { label: "Diseño UI/UX", href: "#servicios" },
  ],
  empresa: [
    { label: "Inicio", href: "#inicio" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
    { label: "Política de privacidad", href: "/politica-de-privacidad" },
    { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  ],
};

const socialLinks = [
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandGithub, href: "#", label: "GitHub" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contacto" className="bg-gray-950 text-white">
      <div className="border-b border-white/10 bg-primary">
        <div className="container-custom py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="section-eyebrow text-white/80">Contacto</p>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
                Hablemos de la próxima versión de tu negocio.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <a href="mailto:hola@mvp.dev" className="btn-secondary">
                <IconSend className="h-5 w-5" />
                Solicitar cotización
              </a>
              <a
                href="https://wa.me/59170000000"
                className="btn-secondary"
                aria-label="Escribir por WhatsApp"
              >
                <IconBrandWhatsapp className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-heading text-3xl font-bold text-white"
            >
              MVP.dev
            </Link>
            <p className="mt-5 max-w-xl leading-7 text-gray-300">
              Agencia de desarrollo de software enfocada en productos digitales,
              plataformas web y sistemas internos para empresas en crecimiento.
            </p>

            <div className="mt-6 grid gap-3 text-gray-300">
              <a
                href="mailto:hola@mvp.dev"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <IconMail className="h-5 w-5 text-accent" />
                hola@mvp.dev
              </a>
              <a
                href="tel:+59170000000"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <IconPhone className="h-5 w-5 text-accent" />
                +591 70000000
              </a>
              <span className="flex items-center gap-3">
                <IconMapPin className="h-5 w-5 text-accent" />
                La Paz, Bolivia
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Servicios
            </h3>
            <ul className="mt-5 grid gap-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Empresa
            </h3>
            <ul className="mt-5 grid gap-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-gray-300 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-6 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MVP.dev. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-gray-300 transition hover:bg-white hover:text-gray-950"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-gray-950 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
              aria-label="Volver arriba"
            >
              <IconArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
