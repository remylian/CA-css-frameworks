import { initThemeToggle } from "./toggleTheme.js";
import { initFormValidation } from "./formValidation.js";

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();

  // Only run validation on pages that actually have the form
  if (document.getElementById("authForm")) {
    initFormValidation(
      [
        { inputId: "email", errorId: "emailError" },
        { inputId: "password", errorId: "passwordError" },
      ],
      "authForm",
      "formError",
    );
  }
});