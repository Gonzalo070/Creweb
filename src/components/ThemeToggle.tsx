"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Alterna data-theme="light" | "dark" en <html> y lo persiste en
 * localStorage. El valor inicial real lo aplica un script inline en
 * layout.tsx antes del primer paint (evita el flash del tema incorrecto);
 * acá solo leemos ese resultado ya aplicado al montar.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light" | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("creweb-theme", next);
  };

  return (
    <button
      type="button"
      aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
      onClick={toggle}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-[var(--overlay-2)] hover:text-ink"
    >
      {/* Placeholder invisible hasta montar, para no mostrar el ícono equivocado un instante */}
      {theme === null ? (
        <span className="block h-4 w-4" />
      ) : theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}