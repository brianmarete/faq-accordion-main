document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  function toggleExpansion(question) {
    const answer = question.nextElementSibling;
    const expanded = question.getAttribute("aria-expanded") === "true";

    question.setAttribute("aria-expanded", !expanded);
    answer.classList.toggle("active", !expanded);
  }

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      toggleExpansion(this);
    });

    question.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleExpansion(this);
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const focusedElement = document.activeElement;
      focusedElement.blur();
    }
  });
});
