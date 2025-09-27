AOS.init({ duration: 800, once: false, offset: 100 });

// mobile hamburger behavior: show/hide center nav on small screens
const hamburger = document.querySelector(".hamburger");
const center = document.querySelector(".nav-center");
hamburger &&
  hamburger.addEventListener("click", () => {
    if (!center) return;
    center.style.display = center.style.display === "flex" ? "none" : "flex";
  });
