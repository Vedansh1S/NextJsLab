"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        px-4 h-9 rounded-lg 
        text-sm font-medium tracking-tight
        border
        border-zinc-200/70 dark:border-zinc-700/70
        bg-white/70 dark:bg-zinc-900/70
        backdrop-blur
        text-zinc-800 dark:text-zinc-200
        shadow-sm
        transition-all duration-200
        hover:shadow-md hover:scale-[1.03]
        active:scale-95
      "
    >
      {isDark ? "Light mode" : "Dark mode"}
    </button>
  );
}
