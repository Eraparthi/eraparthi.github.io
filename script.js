/* THEME */
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

/* VIDEO MODAL */
const modal = document.getElementById("introModal");
const video = document.getElementById("introVideo");

function openIntro() {
  modal.style.display = "flex";
  video.currentTime = 0;
  video.play();
  sessionStorage.setItem("introShown", "yes");
}

function closeIntro() {
  modal.style.display = "none";
  video.pause();
}

window.onload = () => {
  if (!sessionStorage.getItem("introShown")) {
    openIntro();
  }
};

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));