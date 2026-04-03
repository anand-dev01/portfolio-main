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

// Removed auto-close for mobile menu on nav click to prevent hiding
// const navLinks = document.querySelectorAll(".nav__link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     navList?.classList.remove("show");
//   });
// });

const themeToggle = document.getElementById("theme-toggle");
const themePanel = document.getElementById("theme-panel");
const themeOptions = document.querySelectorAll(".theme-option");
const themeStorageKey = "portfolio-theme";

function setTheme(themeName) {
  document.body.setAttribute("data-theme", themeName);
  localStorage.setItem(themeStorageKey, themeName);

  themeOptions.forEach((option) => {
    option.classList.toggle("is-active", option.dataset.theme === themeName);
  });
}

const savedTheme = localStorage.getItem(themeStorageKey) || "dark";
setTheme(savedTheme);

if (themeToggle && themePanel) {
  themeToggle.addEventListener("click", () => {
    const isHidden = themePanel.hasAttribute("hidden");
    if (isHidden) {
      themePanel.removeAttribute("hidden");
    } else {
      themePanel.setAttribute("hidden", "");
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideSettings = event.target.closest(".theme-settings");
    if (!clickedInsideSettings) {
      themePanel.setAttribute("hidden", "");
    }
  });
}

themeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setTheme(option.dataset.theme);
  });
});
