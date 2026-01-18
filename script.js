// THEME
const savedTheme = localStorage.getItem("theme") || "dark";
document.documentElement.setAttribute("data-theme", savedTheme);

function toggleTheme() {
  const next = document.documentElement.getAttribute("data-theme") === "dark"
    ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

// INTRO MODAL
window.onload = () => {
  document.getElementById("introModal").style.display = "flex";
};

function closeIntro() {
  document.getElementById("introModal").style.display = "none";
  document.getElementById("introVideo").pause();
}

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));

// CONTACT
function sendMail(e) {
  e.preventDefault();
  window.location.href =
    "mailto:eswararao.raparthi@gmail.com?subject=Portfolio Contact";
}