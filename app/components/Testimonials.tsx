"use client";

import { IconStarFilled, IconQuote } from "@tabler/icons-react";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart Bolivia",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "MVP transformó nuestra idea en una plataforma robusta en tiempo récord. Su equipo es profesional, comunicativo y entrega resultados excepcionales.",
    rating: 5,
  },
  {
    name: "Carlos Mendoza",
    role: "Fundador, EcoMarket",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Trabajar con MVP fue una experiencia increíble. Entendieron nuestra visión desde el primer día y la ejecutaron perfectamente. 100% recomendados.",
    rating: 5,
  },
  {
    name: "Ana Lucia Paredes",
    role: "Directora de Innovación, FinanceApp",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "La calidad del código y la atención al detalle de MVP es impresionante. Nuestro MVP se convirtió en un producto exitoso gracias a su expertise.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="section-padding bg-gradient-to-b from-white to-light dark:from-gray-900 dark:to-dark"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="text-heading text-3xl md:text-4xl lg:text-5xl mb-6">
            Lo Que Dicen Nuestros{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-body text-lg text-gray dark:text-gray-400">
            Historias de éxito de empresas que confiaron en nosotros para
            transformar sus ideas en realidad.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <IconQuote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <IconStarFilled key={i} className="w-5 h-5 text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray dark:text-gray-300 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-semibold text-dark dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
