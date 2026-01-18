// THEME
function toggleTheme() {
  const html = document.documentElement;
  html.setAttribute(
    "data-theme",
    html.getAttribute("data-theme") === "dark" ? "light" : "dark"
  );
}

// VIDEO POPUP
window.onload = () => {
  const modal = document.getElementById("introModal");
  const video = document.getElementById("introVideo");

  modal.style.display = "flex";
  video.play();

  video.onended = () => {
    modal.style.display = "none";
  };
};