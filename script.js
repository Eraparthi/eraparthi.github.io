function toggleTheme() {
  const html = document.documentElement;
  html.setAttribute(
    "data-theme",
    html.getAttribute("data-theme") === "dark" ? "light" : "dark"
  );
}

window.onload = () => {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("introVideo");

  video.play();

  video.onended = () => {
    overlay.style.display = "none";
  };
};

function closeVideo() {
  document.getElementById("videoOverlay").style.display = "none";
}