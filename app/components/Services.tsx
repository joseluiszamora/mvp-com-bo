"use client";

import {
  IconDeviceLaptop,
  IconDeviceMobile,
  IconCloud,
  IconBrandFigma,
  IconRocket,
  IconHeadset,
  IconArrowRight,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconDeviceLaptop,
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías como React, Next.js y Node.js.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: IconDeviceMobile,
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas y multiplataforma para iOS y Android con React Native y Flutter.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: IconCloud,
    title: "Cloud & DevOps",
    description:
      "Infraestructura en la nube, CI/CD, y optimización de rendimiento con AWS, GCP y Azure.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: IconBrandFigma,
    title: "Diseño UI/UX",
    description:
      "Interfaces intuitivas y experiencias de usuario excepcionales que convierten visitantes en clientes.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: IconRocket,
    title: "MVP & Startups",
    description:
      "Desarrollo rápido de prototipos y productos mínimos viables para validar tu idea de negocio.",
    color: "from-primary to-secondary",
  },
  {
    icon: IconHeadset,
    title: "Soporte & Mantenimiento",
    description:
      "Mantenimiento continuo, actualizaciones y soporte técnico 24/7 para tu tranquilidad.",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="section-padding bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-full" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl mb-6">
            Soluciones Tecnológicas{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Integrales
            </span>
          </h2>
          <p className="text-body text-lg text-gray dark:text-gray-400">
            Ofrecemos servicios completos de desarrollo de software para llevar
            tu negocio al siguiente nivel digital.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-light dark:bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-primary/20 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray dark:text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
              >
                Saber más
                <IconArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
