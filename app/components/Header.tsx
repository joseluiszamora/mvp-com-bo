"use client";

import { useEffect, useRef, useState } from "react";
import IconClock from "@tabler/icons-react/dist/esm/icons/IconClock.mjs";
import IconMenu2 from "@tabler/icons-react/dist/esm/icons/IconMenu2.mjs";
import IconX from "@tabler/icons-react/dist/esm/icons/IconX.mjs";
import ActionLink from "./ActionLink";

const links = [
  { href: "#portafolio", label: "Proyectos" },
  { href: "#estudio", label: "Estudio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Conversemos" },
];

export default function Header() {
  const [time, setTime] = useState("--:--");
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("es-BO", {
          timeZone: "America/La_Paz",
          hour: "2-digit",
          minute: "2-digit",
          hourCycle: "h23",
        }).format(new Date()),
      );
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (!open) return;
    const sheet = dialog.current;
    const opener = trigger.current;
    sheet?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      sheet?.close();
      document.body.style.overflow = overflow;
      desktop.removeEventListener("change", closeOnDesktop);
      opener?.focus();
    };
  }, [open]);
  return (
    <header className="relative z-20 mx-auto w-full max-w-studio p-2 sm:p-3">
      <nav
        aria-label="Navegación principal"
        className="flex items-center justify-between rounded-full bg-white p-1.5"
      >
        <div className="flex items-center gap-7">
          <a
            href="#inicio"
            aria-label="MVP, inicio"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-xs font-bold tracking-tighter text-white"
          >
            MVP
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-gray-500"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <span className="hidden text-xs text-gray-600 xl:block">
            De tu primera idea al lanzamiento
          </span>
          <span className="hidden items-center gap-1.5 text-xs text-gray-600 lg:flex">
            <IconClock aria-hidden="true" size={14} />
            {time} en La Paz
          </span>
          <ActionLink dark>Hablemos de tu idea</ActionLink>
        </div>
        <button
          ref={trigger}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-white md:hidden"
        >
          Menú
          <IconMenu2 aria-hidden="true" size={18} />
        </button>
      </nav>
      <dialog
        id="mobile-menu"
        ref={dialog}
        aria-labelledby="menu-title"
        onCancel={() => setOpen(false)}
        onKeyDown={(event) => {
          if (event.key === "Escape") setOpen(false);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-transparent p-3 text-ink backdrop:bg-black/60"
      >
        <div
          className={`absolute inset-x-3 bottom-3 rounded-2xl bg-white p-6 transition-transform duration-500 ease-roll motion-reduce:transition-none starting:translate-y-full ${open ? "translate-y-0" : "translate-y-full"}`}
        >
          <div className="mb-8 flex items-center justify-between">
            <p id="menu-title" className="text-sm text-gray-500">
              MVP Studio · {time} en La Paz
            </p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="rounded-full bg-mist p-3"
            >
              <IconX size={20} />
            </button>
          </div>
          <nav
            aria-label="Navegación móvil"
            className="mb-8 flex flex-col gap-5"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-medium tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-primary px-6 py-4 text-center font-medium text-white"
          >
            Empezar un proyecto ↗
          </a>
        </div>
      </dialog>
    </header>
  );
}
