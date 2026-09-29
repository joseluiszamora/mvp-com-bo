"use client";

import dynamic from "next/dynamic";
import IconArrowRight from "@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs";
import IconRocket from "@tabler/icons-react/dist/esm/icons/IconRocket.mjs";
import IconDeviceDesktop from "@tabler/icons-react/dist/esm/icons/IconDeviceDesktop.mjs";
import IconShieldCheck from "@tabler/icons-react/dist/esm/icons/IconShieldCheck.mjs";
import Header from "./Header";
import ActionLink from "./ActionLink";

const HeroShader = dynamic(() => import("./HeroShader"), { ssr: false });

const proofPoints = [
  { value: "8+", label: "años creando software", delay: "delay-150", icon: IconRocket },
  { value: "45+", label: "productos digitales", delay: "delay-300", icon: IconDeviceDesktop },
  { value: "99%", label: "foco en estabilidad", delay: "delay-500", icon: IconShieldCheck },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col overflow-hidden bg-canvas"
    >
      <HeroShader />
      <Header />
      <main className="relative z-10 mx-auto flex w-full max-w-studio flex-1 flex-col items-center justify-end px-5 pb-8 pt-24 text-center sm:px-8 sm:pb-9 lg:px-12">
        <div className="mb-5 inline-flex animate-hero-in items-center gap-2 rounded-md border border-primary/20 bg-white/75 px-3.5 py-2 text-xs font-medium text-ink shadow-sm backdrop-blur-sm sm:mb-6 sm:text-sm motion-reduce:animate-none">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden="true">
            <IconArrowRight size={14} />
          </span>
          Diseño, desarrollo & estrategia digital
        </div>
        <h1 className="max-w-5xl animate-hero-in font-sans text-hero font-medium text-ink motion-reduce:animate-none">
          <span className="block">Ideas claras. Productos digitales.</span>
          <span className="mt-1 block delay-150 animate-hero-in motion-reduce:animate-none">
            Tu negocio, <span className="font-serif italic text-primary">hacia delante.</span>
          </span>
        </h1>
        <p className="mt-5 max-w-xl animate-hero-soft text-base leading-relaxed text-gray-600 delay-300 motion-reduce:animate-none sm:mt-6 sm:text-lg">
          Diseñamos y construimos plataformas web, apps y sistemas para que tu equipo pueda crecer con confianza.
        </p>
        <div className="mt-7 flex w-full animate-hero-soft flex-col items-stretch gap-3 delay-500 motion-reduce:animate-none sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <ActionLink mobileFullWidth href="#contacto">Solicitar un diagnóstico</ActionLink>
          <a href="#servicios" className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-full border border-ink/15 bg-white/65 px-6 text-sm font-medium text-ink shadow-sm backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-white sm:w-auto">
            Explorar servicios
            <IconArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
        <div aria-hidden="true" className="mt-9 hidden animate-hero-soft delay-500 sm:block motion-reduce:animate-none">
          <span className="block h-8 w-px bg-gradient-to-b from-primary/70 to-transparent" />
        </div>
        <div className="mt-9 grid w-full max-w-4xl animate-hero-soft grid-cols-1 gap-4 border-t border-ink/10 pt-6 delay-500 motion-reduce:animate-none sm:mt-2 sm:grid-cols-3 sm:gap-5 sm:pt-5">
          {proofPoints.map((point) => (
            <div key={point.label} className={`flex animate-hero-stat items-center justify-center gap-3 text-left ${point.delay} motion-reduce:animate-none sm:justify-center`}>
              <point.icon aria-hidden="true" size={21} stroke={1.5} className="shrink-0 text-primary" />
              <p className="text-sm leading-snug text-gray-600">
                <span className="font-semibold text-ink">{point.value}</span> {point.label}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
