// ===========================
// 🌿 DevBhumi Horizons JS File
// ===========================

// 1️⃣ Sticky Navbar on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// 2️⃣ Smooth Scroll for all Navbar Links (Extra polish)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// 3️⃣ Back to Top Button Functionality
const topButton = document.querySelector(".button");
topButton.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// 4️⃣ Highlight Current Section in Navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// 5️⃣ Small Animation on Scroll (fade-in effect)
const fadeElements = document.querySelectorAll(
  ".package-card, .why-proof-text-box, .transport-box, .hotel-circle"
);

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => appearOnScroll.observe(el));

// 6️⃣ Console Greeting (for you as Developer 😉)
console.log("✨ Welcome to DevBhumi Horizons – Explore Uttarakhand with heart!");
