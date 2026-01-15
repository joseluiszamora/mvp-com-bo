"use client";

import Link from "next/link";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandInstagram,
  IconMail,
  IconPhone,
  IconMapPin,
  IconArrowUp,
} from "@tabler/icons-react";

const footerLinks = {
  servicios: [
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Apps Móviles", href: "#servicios" },
    { label: "Cloud & DevOps", href: "#servicios" },
    { label: "Diseño UI/UX", href: "#servicios" },
  ],
  empresa: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Testimonios", href: "#testimonios" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos de Servicio", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandGithub, href: "#", label: "GitHub" },
  { icon: IconBrandTwitter, href: "#", label: "Twitter" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contacto"
      className="relative bg-dark text-white overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      <div className="container-custom relative z-10">
        {/* CTA Section */}
        <div className="py-16 border-b border-white/10">
          <div className="mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ¿Listo para{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transformar
              </span>{" "}
              tu Idea?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Contáctanos hoy y convierte tu visión en un producto digital
              exitoso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hola@mvp.dev" className="btn-primary">
                Solicitar Cotización
              </a>
              <a
                href="https://wa.me/59170000000"
                className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-dark"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold font-montserrat inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MVP
              </span>
              <span>.dev</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Agencia de desarrollo de software especializada en crear productos
              digitales innovadores que impulsan el crecimiento de tu negocio.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hola@mvp.dev"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <IconMail className="w-5 h-5" />
                hola@mvp.dev
              </a>
              <a
                href="tel:+59170000000"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors"
              >
                <IconPhone className="w-5 h-5" />
                +591 70000000
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <IconMapPin className="w-5 h-5" />
                La Paz, Bolivia
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} MVP.dev. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-2 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary rounded-full hover:bg-secondary hover:scale-110 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <IconArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
