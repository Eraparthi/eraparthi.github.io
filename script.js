const modal = document.getElementById("introModal");
const video = document.getElementById("introVideo");

window.onload = () => {
  modal.style.display = "flex";
  video.play();
};

video.onended = closeIntro;

function closeIntro() {
  video.pause();
  modal.style.display = "none";
}

function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
}