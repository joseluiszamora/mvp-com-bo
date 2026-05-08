"use client";

import { useCallback, useSyncExternalStore } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

type Theme = "light" | "dark";

const getTheme = (): Theme => {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const getServerTheme = (): Theme => "light";

const subscribeToTheme = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener("themechange", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("themechange", callback);
  };
};

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme
  );

  const handleToggle = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    window.dispatchEvent(new Event("themechange"));
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-gray-700 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-950"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? (
        <IconSun className="h-5 w-5 text-accent" strokeWidth={2} />
      ) : (
        <IconMoon className="h-5 w-5 text-primary" strokeWidth={2} />
      )}
    </button>
  );
}
