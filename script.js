function closeVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("introVideo");
  video.pause();
  overlay.style.display = "none";
}

document.getElementById("introVideo").addEventListener("ended", closeVideo);

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}