// /js/toggleTheme.js
export function initThemeToggle(buttonId = "toggleTheme") {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  btn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
}
