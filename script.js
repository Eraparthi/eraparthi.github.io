// THEME TOGGLE
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
}

// VIDEO MODAL
window.onload = () => {
  document.getElementById("introModal").style.display = "flex";
};

function closeIntro() {
  const video = document.getElementById("introVideo");
  video.pause();
  document.getElementById("introModal").style.display = "none";
}