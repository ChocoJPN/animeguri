"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "animeguri-theme";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.classList.toggle("light", theme === "light");
  root.style.colorScheme = theme;
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(theme);
    localStorage.setItem(storageKey, theme);
  }, [mounted, theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "ライトモードに切り替え" : "ダークモードに切り替え"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-8 items-center gap-1 rounded-full border border-gray-200 bg-gray-100 p-1 text-xs font-semibold text-gray-700 transition-colors hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:focus:ring-offset-gray-950"
    >
      <span
        className={`rounded-full px-2 py-1 transition-colors ${
          !isDark
            ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        ライト
      </span>
      <span
        className={`rounded-full px-2 py-1 transition-colors ${
          isDark
            ? "bg-gray-950 text-white shadow-sm dark:bg-white dark:text-gray-950"
            : "text-gray-500 dark:text-gray-400"
        }`}
      >
        ダーク
      </span>
    </button>
  );
}
