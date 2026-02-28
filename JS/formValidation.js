export function initFormValidation(
  fields = [],
  formId = "authForm",
  formErrorId = "formError",
) {
  const form = document.getElementById(formId);
  const formError = document.getElementById(formErrorId);
  const formSuccess = document.getElementById("formSuccess");
  const loadingSpinner = document.getElementById("loadingSpinner");

  fields.forEach(({ inputId, errorId }) => {
    const input = document.getElementById(inputId);
    const errorElement = document.getElementById(errorId);

    if (!input || !errorElement) return;

    const toggleError = () => {
      const hasValue = input.value.trim().length > 0;
      const isValid = input.validity.valid;

      if (hasValue && !isValid) {
        errorElement.classList.remove("hidden", "opacity-0", "invisible");
        input.classList.add("border-red-500", "ring-2", "ring-red-500");
        input.classList.remove("border-green-500", "ring-green-500");
      } else if (hasValue && isValid) {
        errorElement.classList.add("hidden", "opacity-0", "invisible");
        input.classList.remove("border-red-500", "ring-red-500");
        input.classList.add("border-green-500", "ring-2", "ring-green-500");

        if (formError) {
          formError.classList.add("opacity-0", "invisible");
        }
      } else {
        errorElement.classList.add("hidden", "opacity-0", "invisible");
        input.classList.remove(
          "border-red-500",
          "ring-red-500",
          "border-green-500",
          "ring-green-500",
          "ring-2",
        );
      }
    };

    input.addEventListener("blur", toggleError);
    input.addEventListener("input", toggleError);
  });

  // Handle form submit
  if (form) {
    form.addEventListener("submit", (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        if (formError) formError.classList.remove("opacity-0", "invisible");
        if (formSuccess) formSuccess.classList.add("hidden");
        if (loadingSpinner) loadingSpinner.classList.add("hidden");
      } else {
        e.preventDefault();

        // Hide error, show success + loading
        if (formError) formError.classList.add("opacity-0", "invisible");
        if (formSuccess) formSuccess.classList.remove("hidden");
        if (loadingSpinner) loadingSpinner.classList.remove("hidden");

        // Simulate loading → redirect
        setTimeout(() => {
          window.location.href = "/profile/index.html";
        }, 2000);
      }
    });
  }
}
