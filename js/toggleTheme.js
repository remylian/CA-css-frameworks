import { applyTheme, getPreferredTheme, toggleTheme } from "./theme.js";

export function initThemeToggle(buttonId = "toggleTheme") {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  const syncButton = (theme) => {
    const isDark = theme === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
  };

  const initial = getPreferredTheme();
  applyTheme(initial);
  syncButton(initial);

  btn.addEventListener("click", () => {
    const next = toggleTheme();
    syncButton(next);
  });
}