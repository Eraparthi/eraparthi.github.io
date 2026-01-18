function toggleTheme() {
  const html = document.documentElement;
  html.setAttribute(
    "data-theme",
    html.getAttribute("data-theme") === "dark" ? "light" : "dark"
  );
}

window.onload = () => {
  document.getElementById("introModal").style.display = "flex";
};

function closeIntro() {
  const video = document.getElementById("introVideo");
  video.pause();
  document.getElementById("introModal").style.display = "none";
}