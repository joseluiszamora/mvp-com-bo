import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconChartBar,
  IconCode,
  IconShieldCheck,
} from "@tabler/icons-react";

const proofPoints = [
  {
    icon: IconCode,
    title: "Producto",
    description: "Diseño, arquitectura y desarrollo de software a medida.",
  },
  {
    icon: IconChartBar,
    title: "Crecimiento",
    description: "Plataformas preparadas para métricas, ventas y operación.",
  },
  {
    icon: IconShieldCheck,
    title: "Confianza",
    description: "Código mantenible, soporte claro y despliegues controlados.",
  },
];

const metrics = [
  { value: "8+", label: "años creando software" },
  { value: "45+", label: "productos lanzados" },
  { value: "99%", label: "foco en estabilidad" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gray-950 pt-32 pb-20 lg:pt-40 lg:pb-24"
    >
      <Image
        src="/images/3138862.jpg"
        alt=""
        fill
        className="object-cover opacity-45"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gray-950/75" />
      <div className="absolute inset-0 bg-grid-soft opacity-40" />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="max-w-3xl lg:col-span-7">
            <p className="section-eyebrow text-accent">
              Desarrollo de software para empresas
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Convertimos operaciones complejas en productos digitales claros.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Diseñamos y construimos plataformas web, apps y sistemas internos
              para equipos que necesitan vender, medir y escalar sin perder
              control técnico.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#contacto" className="btn-primary">
                Cotizar proyecto
                <IconArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#portafolio" className="btn-secondary">
                Ver casos de trabajo
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-l border-white/20 pl-4"
                >
                  <p className="font-heading text-3xl font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-4">
              {proofPoints.map((point) => (
                <article
                  key={point.title}
                  className="surface-card bg-white/95 p-5 shadow-lg dark:bg-gray-900/90"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                      <point.icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="font-heading text-lg font-bold text-gray-950 dark:text-white">
                        {point.title}
                      </h2>
                      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
