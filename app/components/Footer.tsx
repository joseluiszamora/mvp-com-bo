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
  IconSend,
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
  {
    icon: IconBrandLinkedin,
    href: "#",
    label: "LinkedIn",
    color: "hover:bg-blue-600",
  },
  {
    icon: IconBrandGithub,
    href: "#",
    label: "GitHub",
    color: "hover:bg-gray-700",
  },
  {
    icon: IconBrandTwitter,
    href: "#",
    label: "Twitter",
    color: "hover:bg-sky-500",
  },
  {
    icon: IconBrandInstagram,
    href: "#",
    label: "Instagram",
    color: "hover:bg-pink-600",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contacto"
      className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden transition-colors duration-300"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="container-custom relative z-10">
        {/* CTA Section */}
        <div className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              ¿Listo para Transformar tu Idea?
            </h2>
            <p className="text-white/80 text-lg mb-8 mx-auto">
              Contáctanos hoy y convierte tu visión en un producto digital
              exitoso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hola@mvp.dev"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <IconSend className="w-5 h-5" />
                Solicitar Cotización
              </a>
              <a
                href="https://wa.me/59170000000"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-12 border-t border-gray-200 dark:border-gray-800 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold font-montserrat inline-block mb-6 group"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MVP
              </span>
              <span className="text-gray-900 dark:text-white">.dev</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Agencia de desarrollo de software especializada en crear productos
              digitales innovadores que impulsan el crecimiento de tu negocio.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:hola@mvp.dev"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
              >
                <span className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <IconMail className="w-5 h-5" />
                </span>
                hola@mvp.dev
              </a>
              <a
                href="tel:+59170000000"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors group"
              >
                <span className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <IconPhone className="w-5 h-5" />
                </span>
                +591 70000000
              </a>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <span className="p-2 bg-primary/10 dark:bg-primary/20 rounded-lg">
                  <IconMapPin className="w-5 h-5" />
                </span>
                La Paz, Bolivia
              </div>
            </div>
          </div>

          {/* Links - Servicios */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Empresa */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6 text-lg">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full group-hover:bg-primary transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 dark:text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} MVP.dev. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`p-2.5 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full ${social.color} hover:text-white transition-all duration-300 hover:scale-110`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-primary text-white rounded-full hover:bg-secondary hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-secondary/30"
            aria-label="Volver arriba"
          >
            <IconArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
