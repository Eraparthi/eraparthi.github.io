function toggleTheme() {
  const html = document.documentElement;
  html.setAttribute(
    "data-theme",
    html.getAttribute("data-theme") === "dark" ? "light" : "dark"
  );
}

function enableSound() {
  const video = document.getElementById("introVideo");
  video.muted = false;
  document.getElementById("soundBtn").style.display = "none";
}

window.onload = () => {
  const video = document.getElementById("introVideo");
  const overlay = document.getElementById("videoOverlay");

  video.play();

  video.onended = () => {
    overlay.style.display = "none";
  };
};

function closeVideo() {
  document.getElementById("videoOverlay").style.display = "none";
}