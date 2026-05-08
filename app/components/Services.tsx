import {
  IconBrandFigma,
  IconCloud,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconHeadset,
  IconRocket,
} from "@tabler/icons-react";

const services = [
  {
    icon: IconDeviceLaptop,
    title: "Aplicaciones web",
    description:
      "Frontends rápidos, dashboards operativos y plataformas SaaS construidas con arquitectura mantenible.",
  },
  {
    icon: IconDeviceMobile,
    title: "Apps móviles",
    description:
      "Experiencias iOS y Android para validar, operar o escalar canales digitales con una base compartida.",
  },
  {
    icon: IconCloud,
    title: "Cloud & DevOps",
    description:
      "Despliegues, observabilidad, automatización y entornos listos para crecer sin sorpresas.",
  },
  {
    icon: IconBrandFigma,
    title: "Diseño UI/UX",
    description:
      "Flujos, prototipos y sistemas visuales que reducen fricción y hacen más fácil vender o operar.",
  },
  {
    icon: IconRocket,
    title: "MVP & validación",
    description:
      "Construcción enfocada para probar hipótesis reales antes de invertir en una plataforma completa.",
  },
  {
    icon: IconHeadset,
    title: "Soporte evolutivo",
    description:
      "Mantenimiento, mejoras incrementales y acompañamiento técnico para productos en producción.",
  },
];

const processSteps = ["Descubrimiento", "Diseño", "Desarrollo", "Lanzamiento"];

export default function Services() {
  return (
    <section
      id="servicios"
      className="section-padding bg-light dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="container-custom">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="section-eyebrow text-primary">Servicios</p>
            <h2 className="section-title mt-3">
              Tecnología pensada para negocio, operación y producto.
            </h2>
          </div>
          <p className="section-copy lg:col-span-5">
            Cubrimos el ciclo completo: desde aterrizar la idea y diseñar la
            experiencia, hasta construir, desplegar y acompañar el crecimiento
            del software.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="surface-card group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-gray-950 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid overflow-hidden rounded-lg border border-gray-200 bg-white text-sm font-semibold text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-3 border-b border-gray-200 px-5 py-4 dark:border-gray-800 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="font-heading text-lg font-bold text-accent">
                0{index + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
