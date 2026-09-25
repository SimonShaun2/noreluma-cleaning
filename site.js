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

  const fields = new FormData(quoteForm);
  const value = (name) => String(fields.get(name) || "").trim();
  const subject = "Cleaning quote request — " + value("business");
  const body = [
    "Hello Noreluma,",
    "",
    "I'd like to discuss cleaning for my business.",
    "",
    "Business: " + value("business"),
    "Contact: " + value("name"),
    "Email: " + value("email"),
    "Phone: " + value("phone"),
    "City: " + value("city"),
    "Business type: " + value("businessType"),
    "Frequency: " + value("frequency"),
    "Approximate size: " + (value("size") || "Not sure"),
    "",
    "Details:",
    value("details") || "Not provided",
  ].join("\n");
  const mailto = "mailto:cleaningquotes3@gmail.com?subject=" +
    encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

  formStatus.replaceChildren();
  formStatus.append("Your email app should open now. Review and send the draft to complete your request. If it does not open, ");
  const fallback = document.createElement("a");
  fallback.href = mailto;
  fallback.textContent = "open the prepared email here";
  formStatus.append(fallback, ".");
  window.location.href = mailto;
});
