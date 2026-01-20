"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandYoutube,
  IconArrowRight,
} from "@tabler/icons-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-900"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <Image
          src="/images/12690.jpg"
          alt="MVP Team"
          fill
          className="object-cover"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large White Circle - Left */}
        <div className="absolute -left-32 top-1/4 w-96 h-96 border-[40px] border-white/10 rounded-full" />

        {/* Large Orange Circle - Right */}
        <div className="absolute -right-32 top-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

        {/* Dot Grid - Top Right */}
        <div className="absolute top-20 right-20 w-32 h-32 opacity-30 hidden lg:block">
          <div className="grid grid-cols-8 gap-2">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
        </div>

        {/* Circular Dot Grid - Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 hidden lg:block">
          {[...Array(8)].map((_, ring) => (
            <div
              key={ring}
              className="absolute inset-0 flex items-center justify-center"
            >
              {[...Array(ring * 8 + 8)].map((__, dot) => {
                const angle = (dot / (ring * 8 + 8)) * Math.PI * 2;
                const radius = (ring + 1) * 20;
                return (
                  <div
                    key={dot}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                      top: `calc(50% + ${Math.sin(angle) * radius}px)`,
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Number "01." - Bottom Right */}
        <div className="absolute bottom-20 right-20 text-[200px] font-bold leading-none opacity-10 hidden lg:block">
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "2px white" }}
          >
            01.
          </span>
        </div>
      </div>

      {/* Social Media Bar - Left Side */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="bg-primary rounded-full p-4 flex flex-col gap-4 shadow-2xl">
          <Link
            href="#"
            className="text-white hover:scale-110 transition-transform"
            aria-label="Twitter"
          >
            <IconBrandTwitter size={20} />
          </Link>
          <Link
            href="#"
            className="text-white hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <IconBrandFacebook size={20} />
          </Link>
          <Link
            href="#"
            className="text-white hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <IconBrandInstagram size={20} />
          </Link>
          <Link
            href="#"
            className="text-white hover:scale-110 transition-transform"
            aria-label="YouTube"
          >
            <IconBrandYoutube size={20} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Welcome Text */}
          <p className="text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 sm:mb-8 animate-fade-in font-medium">
            WELCOME
          </p>

          {/* Main Heading with Outline */}
          <h1
            className="mb-6 sm:mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-2 sm:mb-3 text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Creando
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-2 sm:mb-3 text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Soluciones
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-2 sm:mb-3 text-transparent"
              style={{ WebkitTextStroke: "2px white" }}
            >
              Digitales
            </span>
          </h1>

          {/* Subtitle with Orange Accent */}
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-white">Liderando </span>
            <span className="text-primary">Cambios</span>
          </h2>

          {/* Description */}
          <p
            className="text-white/70 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl animate-fade-in-up leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Nos especializamos en transformar ideas innovadoras en productos
            digitales excepcionales. Desde modernas aplicaciones web hasta
            soluciones móviles, impulsamos su negocio para prosperar en el
            futuro digital.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 sm:gap-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="#contacto"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold uppercase text-xs sm:text-sm hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-md tracking-wider"
            >
              Contact Us
            </Link>
            <Link
              href="#servicios"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-semibold uppercase text-xs sm:text-sm hover:bg-secondary transition-all duration-300 rounded-md inline-flex items-center gap-2 group tracking-wider shadow-lg shadow-primary/30"
            >
              Our Services
              <IconArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Service Cards - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-8 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Orange */}
            <div className="bg-primary p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                Desarrollo Web
              </h3>
              <p className="text-white/80 text-sm">
                Aplicaciones web modernas y escalables con las últimas
                tecnologías
              </p>
            </div>

            {/* Card 2 - Light Gray */}
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-2xl">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">
                Consultoría Tech
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Asesoramiento estratégico para transformación digital exitosa
              </p>
            </div>

            {/* Card 3 - Dark Gray */}
            <div className="bg-gray-800 p-8 rounded-2xl transform hover:-translate-y-2 transition-all duration-300 shadow-2xl">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                UX/UI Design
              </h3>
              <p className="text-white/80 text-sm">
                Interfaces intuitivas y atractivas que mejoran la experiencia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
