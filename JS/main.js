import { initThemeToggle } from "./toggleTheme.js";
import { initFormValidation } from "./formValidation.js";

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();

  initFormValidation(
    [
      { inputId: "email", errorId: "emailError" },
      { inputId: "password", errorId: "passwordError" },
    ],
    "authForm",
    "formError"
  );
});
