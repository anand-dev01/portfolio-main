const sections = document.querySelectorAll(".home, .section");
const achievementItems = document.querySelectorAll(".achievement__item");
const projectItems = document.querySelectorAll(".work__img");

const observer = new IntersectionObserver((entries, observerInstance) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observerInstance.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach((section) => {
  observer.observe(section);
});

achievementItems.forEach((item) => {
  observer.observe(item);
});

projectItems.forEach((item) => {
  observer.observe(item);
});

const navToggle = document.getElementById("nav-toggle");
const navList = document.querySelector(".nav__list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
}

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navList?.classList.remove("show");
  });
});
