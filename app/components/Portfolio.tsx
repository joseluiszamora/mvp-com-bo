"use client";

import { IconExternalLink, IconBrandGithub } from "@tabler/icons-react";

const projects = [
  {
    title: "EcoMarket App",
    category: "E-commerce",
    description:
      "Marketplace para productos ecológicos con sistema de pagos integrado y logística de envíos.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "FinTrack Dashboard",
    category: "Fintech",
    description:
      "Panel de control financiero con análisis en tiempo real, reportes automáticos y alertas inteligentes.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB"],
    color: "from-primary to-secondary",
  },
  {
    title: "HealthConnect",
    category: "Healthcare",
    description:
      "Plataforma de telemedicina con videollamadas, historial clínico y agendamiento de citas.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "WebRTC"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "LogiTrack Pro",
    category: "Logística",
    description:
      "Sistema de gestión logística con tracking en tiempo real, optimización de rutas y reportes.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Python", "AWS"],
    color: "from-primary via-accent to-secondary",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, #e5e7eb 1px, transparent 1px),
              linear-gradient(#e5e7eb 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div
        className="dark:hidden absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(90deg, #e5e7eb 1px, transparent 1px),
          linear-gradient(#e5e7eb 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.3,
        }}
      />
      <div
        className="hidden dark:block absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(90deg, #1f2937 1px, transparent 1px),
          linear-gradient(#1f2937 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.3,
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Proyectos que{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Inspiran
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Conoce algunos de los proyectos exitosos que hemos desarrollado para
            nuestros clientes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-black/30 transition-all duration-500 border border-gray-100 dark:border-gray-800"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} rounded-full`}
                >
                  <span className="text-white text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                    aria-label="Ver proyecto"
                  >
                    <IconExternalLink className="w-6 h-6 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-white rounded-full hover:scale-110 transition-transform"
                    aria-label="Ver código"
                  >
                    <IconBrandGithub className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="btn-primary inline-flex items-center gap-2"
          >
            Ver Todos los Proyectos
            <IconExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
