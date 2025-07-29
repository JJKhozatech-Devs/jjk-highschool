const slides = document.querySelectorAll(".hero-slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("opacity-0", "translate-y-10");
      slide.classList.add("opacity-100", "translate-y-0", "relative");
      slide.classList.remove("absolute");
    } else {
      slide.classList.add("opacity-0", "translate-y-10", "absolute");
      slide.classList.remove("opacity-100", "translate-y-0", "relative");
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 5000); // change every 5 seconds

// Preloader - Wait for full page load before hiding preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("opacity-0", "transition-opacity", "duration-700");

  // Remove after fade out
  setTimeout(() => {
    preloader.style.display = "none";
  }, 700);
});

//Scroll To Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.classList.remove("opacity-0", "invisible");
      scrollToTopBtn.classList.add("opacity-100", "visible");
    } else {
      scrollToTopBtn.classList.add("opacity-0", "invisible");
      scrollToTopBtn.classList.remove("opacity-100", "visible");
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Add AOS
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // whether animation should happen only once
  });
