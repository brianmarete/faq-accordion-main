document.addEventListener("DOMContentLoaded", function () {
  function determineHeightOfAHiddenDivElement(elem) {
    elem.style.position = "absolute";
    elem.style.top = "-5000px";
    elem.style.display = "initial";
    const height = elem.clientHeight;
    elem.style.display = "";
    elem.style.top = "";
    elem.style.position = "";
    return height;
  }

  function toggleExpansion(question) {
    const parent = document.querySelector(".faq");
    const answer = question.nextElementSibling;
    const expanded = question.getAttribute("aria-expanded") === "true";

    question.setAttribute("aria-expanded", !expanded);
    answer.classList.toggle("active", !expanded);

    const images = question.querySelectorAll("img");
    images.forEach(function (image) {
      image.classList.toggle("active");
    });

    // Adjust margin for both expanded and collapsed states
    // const offset = answer.offsetHeight; // The problem with this is we can't get the height of an element with display: none
    // const offset = determineHeightOfAHiddenDivElement(answer); // This doesn't return the right value for some reason

    // const currentMargin = parent.style.marginTop
    //   ? Number(parent.style.marginTop.replace("px", ""))
    //   : 0;

    // if (expanded) {
    //   parent.style.marginTop = currentMargin - offset + "px";
    // } else {
    //   parent.style.marginTop = currentMargin + offset + "px";
    // }
  }

  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const question = item.querySelector(".question");
    question.addEventListener("click", function () {
      toggleExpansion(this);
    });

    item.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleExpansion(question);
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
