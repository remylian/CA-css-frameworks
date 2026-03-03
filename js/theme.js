const STORAGE_KEY = "theme";

/** @returns {"dark"|"light"} */
export function getPreferredTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

/** @param {"dark"|"light"} theme */
export function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  localStorage.setItem(STORAGE_KEY, theme);
}

/** @returns {"dark"|"light"} */
export function toggleTheme() {
  const isDarkNow = document.documentElement.classList.contains("dark");
  const next = isDarkNow ? "light" : "dark";
  applyTheme(next);
  return next;
}