const modal = document.getElementById("introModal");
const video = document.getElementById("introVideo");

/* Intro popup */
window.onload = () => {
  video.play().catch(() => {});
};

function closeIntro() {
  modal.style.display = "none";
  video.pause();
}

video.addEventListener("ended", closeIntro);

/* Theme toggle */
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}