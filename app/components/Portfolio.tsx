import Image from "next/image";
import IconArrowUpRight from "@tabler/icons-react/dist/esm/icons/IconArrowUpRight.mjs";
import SectionLabel from "./SectionLabel";

const projects = [
  {
    title: "Plataforma comercial B2B",
    category: "Producto digital / SaaS",
    description:
      "Un solo lugar para gestionar oportunidades, conectar equipos y avanzar cada venta.",
    image: "/images/design.png",
    technologies: "Next.js · TypeScript · PostgreSQL",
  },
  {
    title: "Dashboard financiero",
    category: "Experiencia de usuario / Fintech",
    description:
      "Información compleja convertida en decisiones claras para el día a día del negocio.",
    image: "/images/12690.jpg",
    technologies: "React · Node.js · Cloud",
  },
  {
    title: "Sistema de operaciones",
    category: "Desarrollo web / Operaciones",
    description:
      "Órdenes, responsables y trazabilidad en una experiencia pensada para trabajar mejor.",
    image: "/images/3138862.jpg",
    technologies: "Next.js · API · DevOps",
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="bg-mist py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-studio px-5 sm:px-8 lg:px-12">
        <SectionLabel number="2">Del concepto a la experiencia</SectionLabel>
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 md:flex-row md:items-end">
          <h2 className="font-sans text-hero font-medium text-ink">
            Nuestros proyectos.
          </h2>
          <p className="max-w-xs text-sm leading-6 text-gray-600">
            Una selección de los tipos de producto que diseñamos y construimos.
          </p>
        </div>
        <div className="grid items-start gap-x-7 gap-y-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title}>
              <a
                href={`mailto:hola@mvp.dev?subject=${encodeURIComponent(`Consulta: ${project.title}`)}`}
                aria-label={`Consultar por un proyecto similar a ${project.title}`}
                className={`group relative block overflow-hidden rounded-2xl bg-ink ${index === 1 ? "aspect-square" : "aspect-project"}`}
              >
                <Image
                  src={project.image}
                  alt={`Referencia visual para ${project.title.toLowerCase()}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/35 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs text-ink">
                  {project.category}
                </span>
                <span className="absolute bottom-4 left-4 flex h-11 items-center gap-3 rounded-full bg-white px-4 text-sm font-medium text-ink">
                  <span className="md:max-w-0 md:overflow-hidden md:whitespace-nowrap md:transition-all md:duration-300 md:group-hover:max-w-40 md:group-focus-visible:max-w-40">
                    Crear algo similar
                  </span>
                  <IconArrowUpRight
                    aria-hidden="true"
                    size={18}
                    className="transition-transform group-hover:rotate-45"
                  />
                </span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {project.description}
              </p>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-sans text-base font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500">{project.technologies}</p>
              </div>
            </article>
          ))}
          <div className="flex flex-col items-start justify-center self-stretch py-8 md:px-8">
            <p className="mb-5 text-xs tracking-widest text-gray-500">
              EL SIGUIENTE PODRÍA SER EL TUYO
            </p>
            <h3 className="max-w-sm font-sans text-editorial font-medium text-ink">
              Una buena idea merece cobrar vida.
            </h3>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-2 text-sm"
            >
              Cuéntanos qué tienes en mente
              <IconArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
