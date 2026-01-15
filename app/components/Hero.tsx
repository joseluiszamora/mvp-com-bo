"use client";

import Link from "next/link";
import {
  IconArrowRight,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandTypescript,
  IconCloud,
  IconCheck,
} from "@tabler/icons-react";

const features = ["Desarrollo ágil", "Código de calidad", "Soporte continuo"];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-light via-white to-primary/5 dark:from-dark dark:via-gray-900 dark:to-primary/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-gray) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />

      {/* Floating Icons */}
      <div
        className="absolute top-32 left-[10%] hidden lg:block animate-bounce"
        style={{ animationDuration: "3s" }}
      >
        <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <IconBrandReact className="w-8 h-8 text-cyan-500" />
        </div>
      </div>
      <div
        className="absolute top-48 right-[15%] hidden lg:block animate-bounce"
        style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
      >
        <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <IconBrandNodejs className="w-8 h-8 text-green-500" />
        </div>
      </div>
      <div
        className="absolute bottom-40 left-[15%] hidden lg:block animate-bounce"
        style={{ animationDuration: "4s", animationDelay: "1s" }}
      >
        <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <IconBrandTypescript className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <div
        className="absolute bottom-32 right-[10%] hidden lg:block animate-bounce"
        style={{ animationDuration: "3.2s", animationDelay: "0.3s" }}
      >
        <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
          <IconCloud className="w-8 h-8 text-purple-500" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-dark dark:text-white">
              Disponibles para nuevos proyectos
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-tight">
            Transformamos Ideas en{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              Productos Digitales
            </span>{" "}
            Exitosos
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray dark:text-gray-400 mb-8 mx-auto leading-relaxed">
            Somos expertos en desarrollo de software a medida. Creamos
            aplicaciones web, móviles y soluciones tecnológicas que impulsan el
            crecimiento de tu negocio.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
              >
                <IconCheck className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-dark dark:text-white">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contacto"
              className="btn-primary inline-flex items-center justify-center gap-2 group text-lg px-8 py-4"
            >
              Iniciar Proyecto
              <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portafolio"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4"
            >
              Ver Portafolio
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                50+
              </div>
              <div className="text-sm text-gray dark:text-gray-400">
                Proyectos Entregados
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                30+
              </div>
              <div className="text-sm text-gray dark:text-gray-400">
                Clientes Satisfechos
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                5+
              </div>
              <div className="text-sm text-gray dark:text-gray-400">
                Años de Experiencia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
