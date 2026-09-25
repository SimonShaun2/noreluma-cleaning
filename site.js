const quoteForm = document.getElementById("quoteForm");
const formStatus = document.getElementById("formStatus");
const showcaseSlides = [...document.querySelectorAll(".showcase-slide")];
const showcaseDots = [...document.querySelectorAll(".showcase-dot")];
let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + showcaseSlides.length) % showcaseSlides.length;
  showcaseSlides.forEach((slide, slideIndex) => {
    slide.hidden = slideIndex !== currentSlide;
  });
  showcaseDots.forEach((dot, dotIndex) => {
    const active = dotIndex === currentSlide;
    dot.classList.toggle("is-active", active);
    if (active) dot.setAttribute("aria-current", "true");
    else dot.removeAttribute("aria-current");
  });
}

document.getElementById("showcasePrev").addEventListener("click", () => showSlide(currentSlide - 1));
document.getElementById("showcaseNext").addEventListener("click", () => showSlide(currentSlide + 1));
showcaseDots.forEach((dot) => dot.addEventListener("click", () => showSlide(Number(dot.dataset.go))));

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!quoteForm.reportValidity()) return;

  const value = (id) => document.getElementById(id).value.trim();
  document.getElementById("crmDescription").value = [
    "Business type: " + value("businessType"),
    "Cleaning frequency: " + value("frequency"),
    "Approximate size: " + (value("size") || "Not sure"),
    "Cleaning details: " + (value("details") || "Not provided"),
  ].join("\n");

  formStatus.textContent = "Sending your request…";
  quoteForm.querySelector(".submit-button").disabled = true;
  HTMLFormElement.prototype.submit.call(quoteForm);
});
