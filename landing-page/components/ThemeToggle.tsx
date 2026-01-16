"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="px-3 sm:px-4 h-8 sm:h-9 rounded-lg border border-zinc-200/70 dark:border-zinc-700/70 bg-white/70 dark:bg-zinc-900/70 backdrop-blur flex items-center justify-center">
        <span className="text-xs sm:text-sm font-medium tracking-tight text-zinc-800 dark:text-zinc-200">
          ...
        </span>
      </div>
    );
  }

  // Use resolvedTheme to handle "system" theme properly, fallback to theme if resolvedTheme is not available
  const currentTheme = resolvedTheme || theme || "light";
  const isDark = currentTheme === "dark";

  const handleToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      type="button"
      className="
        px-3 sm:px-4 h-8 sm:h-9 rounded-lg 
        text-xs sm:text-sm font-medium tracking-tight
        border
        border-zinc-200/70 dark:border-zinc-700/70
        bg-white/70 dark:bg-zinc-900/70
        backdrop-blur
        text-zinc-800 dark:text-zinc-200
        shadow-sm
        transition-all duration-200
        hover:shadow-md hover:scale-[1.03]
        active:scale-95
        cursor-pointer
        whitespace-nowrap
      "
    >
      <span className="hidden sm:inline">
        {isDark ? "Light mode" : "Dark mode"}
      </span>
      <span className="sm:hidden">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
