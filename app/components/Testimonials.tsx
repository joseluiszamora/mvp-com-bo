import { IconQuote, IconStarFilled } from "@tabler/icons-react";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart Bolivia",
    initials: "MG",
    content:
      "MVP entendió el problema de negocio antes de escribir código. El resultado fue una plataforma clara, estable y fácil de presentar a clientes.",
  },
  {
    name: "Carlos Mendoza",
    role: "Fundador, EcoMarket",
    initials: "CM",
    content:
      "El proceso fue ordenado y transparente. Nos ayudaron a lanzar un MVP medible sin perder tiempo en funcionalidades que todavía no necesitábamos.",
  },
  {
    name: "Ana Lucía Paredes",
    role: "Directora de Innovación, FinanceApp",
    initials: "AP",
    content:
      "La calidad de la interfaz y la arquitectura nos permitió crecer el producto con seguridad después del primer lanzamiento.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="section-padding bg-light dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow text-primary">Testimonios</p>
          <h2 className="section-title mt-3">
            Equipos que valoran claridad técnica y ejecución responsable.
          </h2>
          <p className="section-copy mt-5">
            Nos involucramos como socio técnico: escuchamos, priorizamos y
            convertimos decisiones complejas en avances concretos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="surface-card relative p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <IconQuote className="h-8 w-8 text-primary" />
              <div className="mt-5 flex gap-1" aria-label="Calificación 5 de 5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <IconStarFilled key={star} className="h-4 w-4 text-accent" />
                ))}
              </div>
              <p className="mt-5 leading-7 text-gray-700 dark:text-gray-300">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-gray-950 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
