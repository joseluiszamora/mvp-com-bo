import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconExternalLink } from "@tabler/icons-react";

const projects = [
  {
    title: "Plataforma comercial B2B",
    category: "SaaS",
    description:
      "CRM operativo con pipeline de ventas, reportes y automatización para equipos comerciales distribuidos.",
    image: "/images/design.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Dashboard financiero",
    category: "Fintech",
    description:
      "Panel ejecutivo con métricas de liquidez, conciliación y alertas para toma de decisiones en tiempo real.",
    image: "/images/12690.jpg",
    technologies: ["React", "Node.js", "Cloud"],
  },
  {
    title: "Sistema interno de operaciones",
    category: "Operaciones",
    description:
      "Aplicación web para controlar órdenes, responsables, estados y trazabilidad desde una única interfaz.",
    image: "/images/3138862.jpg",
    technologies: ["Next.js", "API", "DevOps"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      className="section-padding relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-grid-soft opacity-70" />

      <div className="container-custom relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-eyebrow text-primary">Portafolio</p>
            <h2 className="section-title mt-3">
              Casos de trabajo con intención, métricas y una base técnica seria.
            </h2>
          </div>
          <p className="section-copy lg:col-span-5">
            Estos ejemplos muestran el tipo de producto que construimos:
            interfaces enfocadas, integraciones útiles y entregables listos para
            operar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="surface-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gray-950/35" />
                <span className="absolute left-4 top-4 rounded-md bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-gray-950 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-secondary"
                >
                  Conversar sobre un caso similar
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="#contacto" className="btn-primary">
            Iniciar diagnóstico
            <IconExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
