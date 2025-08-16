// components/toggle.tsx
"use client";
import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  // ícono seguro antes de montar (no condiciona por theme)
  const icon = !mounted
    ? <Sun className="h-4 w-4" />
    : (resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />);

  const next = mounted
    ? (resolvedTheme === "dark" ? "light" : "dark")
    : "light";

  return (
    <button
      onClick={() => setTheme(next)}
      className="inline-flex items-center rounded-md border px-2 py-1"
      aria-label="Toggle theme"
    >
      {icon}
    </button>
  );
}
