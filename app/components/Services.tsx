import Image from "next/image";
import ActionLink from "./ActionLink";
import SectionLabel from "./SectionLabel";

const services = [
  {
    title: "Aplicaciones web",
    description:
      "Plataformas SaaS, tiendas y dashboards con una arquitectura clara y mantenible.",
  },
  {
    title: "Apps móviles",
    description:
      "Experiencias iOS y Android para conectar tu negocio con las personas.",
  },
  {
    title: "Diseño UI/UX",
    description:
      "Investigación, prototipos e interfaces que hacen más fácil cada interacción.",
  },
  {
    title: "MVP & validación",
    description:
      "Lo esencial para poner tu idea en manos de usuarios y aprender con datos reales.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Despliegues, automatización y observabilidad para acompañar tu crecimiento.",
  },
  {
    title: "Soporte evolutivo",
    description:
      "Mantenimiento y mejoras continuas para productos que ya están en marcha.",
  },
];
const imageRoot =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/";

export default function Services() {
  return (
    <section
      id="estudio"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-studio px-5 sm:px-8 lg:px-12">
        <SectionLabel number="1">Conoce a MVP</SectionLabel>
        <h2 className="max-w-4xl font-sans text-editorial font-medium text-ink">
          Estrategia, diseño y código.
          <br />
          Buenas ideas, mejor ejecutadas.
        </h2>
        <div className="mt-12 grid items-end gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-studio lg:gap-8">
          <div className="relative order-2 aspect-studio overflow-hidden rounded-2xl bg-canvas lg:order-1">
            <Image
              src={`${imageRoot}hf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png`}
              alt="Referencia visual de un espacio creativo de diseño"
              fill
              unoptimized
              sizes="(min-width: 1024px) 26vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 self-start sm:col-span-2 lg:order-2 lg:col-span-1">
            <p className="max-w-md text-base font-medium leading-relaxed lg:text-lg">
              Investigamos, diseñamos e iteramos para transformar los retos de
              tu negocio en productos digitales que las personas quieran usar.
            </p>
            <div className="mt-7">
              <ActionLink href="#servicios">Lo que hacemos</ActionLink>
            </div>
            <p className="mt-8 text-xs text-gray-500">
              Desde Bolivia. Para donde quieras llegar.
            </p>
          </div>
          <div className="relative order-3 aspect-3/2 overflow-hidden rounded-2xl bg-canvas">
            <Image
              src={`${imageRoot}hf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png`}
              alt="Referencia visual de colaboración en un estudio creativo"
              fill
              unoptimized
              sizes="(min-width: 1024px) 43vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div
          id="servicios"
          className="mt-16 border-t border-gray-200 pt-8 lg:mt-24"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-sans text-xl font-medium">
              De principio a producto.
            </h3>
            <p className="text-xs text-gray-500">
              Descubrimiento / Diseño / Desarrollo / Lanzamiento
            </p>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <details
                key={service.title}
                className="group border-b border-gray-200 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 text-sm font-medium">
                  <span className="text-xs text-gray-400">0{index + 1}</span>
                  {service.title}
                  <span
                    aria-hidden="true"
                    className="ml-auto text-xl font-normal transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pt-4 text-sm leading-7 text-gray-600">
                  {service.description}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
