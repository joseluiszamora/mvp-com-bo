"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  IconArrowRight,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandAws,
  IconBrandDocker,
  IconBrandFigma,
  IconCheck,
  IconSparkles,
  IconRocket,
} from "@tabler/icons-react";

const features = [
  { text: "Desarrollo ágil", icon: IconRocket },
  { text: "Código de calidad", icon: IconCheck },
  { text: "Soporte 24/7", icon: IconSparkles },
];

const techIcons = [
  {
    Icon: IconBrandReact,
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    name: "React",
  },
  {
    Icon: IconBrandNodejs,
    color: "text-green-400",
    bg: "bg-green-500/20",
    name: "Node.js",
  },
  {
    Icon: IconBrandTypescript,
    color: "text-blue-400",
    bg: "bg-blue-500/20",
    name: "TypeScript",
  },
  {
    Icon: IconBrandAws,
    color: "text-orange-400",
    bg: "bg-orange-500/20",
    name: "AWS",
  },
  {
    Icon: IconBrandDocker,
    color: "text-sky-400",
    bg: "bg-sky-500/20",
    name: "Docker",
  },
  {
    Icon: IconBrandFigma,
    color: "text-purple-400",
    bg: "bg-purple-500/20",
    name: "Figma",
  },
];

const stats = [
  { value: "50+", label: "Proyectos Entregados" },
  { value: "30+", label: "Clientes Satisfechos" },
  { value: "5+", label: "Años de Experiencia" },
];

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: "url('/images/12690.jpg')",
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
      </div>

      {/* Animated Particles/Grid Overlay */}
      <div className="absolute inset-0 z-[1] overflow-hidden opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Tech Icons - Left Side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-10">
        {techIcons.slice(0, 3).map(({ Icon, color, bg, name }, index) => (
          <div
            key={name}
            className="group relative"
            style={{
              transform: `translateY(${
                Math.sin(scrollY * 0.01 + index) * 10
              }px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div
              className={`p-3 ${bg} backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer`}
            >
              <Icon className={`w-7 h-7 ${color}`} />
            </div>
            <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/20">
              {name}
            </span>
          </div>
        ))}
      </div>

      {/* Floating Tech Icons - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-10">
        {techIcons.slice(3, 6).map(({ Icon, color, bg, name }, index) => (
          <div
            key={name}
            className="group relative"
            style={{
              transform: `translateY(${
                Math.sin(scrollY * 0.01 + index + 3) * 10
              }px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <div
              className={`p-3 ${bg} backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer`}
            >
              <Icon className={`w-7 h-7 ${color}`} />
            </div>
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/20">
              {name}
            </span>
          </div>
        ))}
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-white">
                Disponibles para nuevos proyectos
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-white drop-shadow-lg">
                Transformamos Ideas en
              </span>
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-gradient-to-r from-cyan-400 via-primary to-secondary bg-clip-text text-transparent drop-shadow-lg">
                  Productos Digitales
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 4 150 2 298 10"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="text-white mt-2 inline-block drop-shadow-lg">
                Exitosos
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 text-center mx-auto mb-10 leading-relaxed">
            Somos una agencia de desarrollo de software especializada en crear{" "}
            <strong className="text-cyan-400 font-semibold">
              aplicaciones web
            </strong>
            , <strong className="text-primary font-semibold">móviles</strong> y{" "}
            <strong className="text-secondary font-semibold">
              soluciones cloud
            </strong>{" "}
            que impulsan el crecimiento de tu negocio.
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {features.map(({ text, icon: Icon }, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-1 bg-primary/30 rounded-full">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-white">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="#contacto"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Iniciar Proyecto
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="#portafolio"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1"
            >
              Ver Portafolio
              <span className="w-2 h-2 bg-primary rounded-full group-hover:animate-ping" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {stats.map(({ value, label }, index) => (
              <div
                key={index}
                className="relative group text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-primary bg-clip-text text-transparent mb-2">
                    {value}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Banner */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-center text-sm text-gray-400 mb-6 uppercase tracking-wider font-medium">
              Tecnologías que dominamos
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {techIcons.map(({ Icon, color, name }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center gap-2"
                >
                  <Icon
                    className={`w-8 h-8 ${color} opacity-60 group-hover:opacity-100 transition-opacity`}
                  />
                  <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-gray-400 uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
