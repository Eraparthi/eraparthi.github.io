const modal = document.getElementById("introModal");
const video = document.getElementById("introVideo");

function closeIntro() {
  modal.style.display = "none";
  video.pause();
}

video.addEventListener("ended", closeIntro);

// failsafe in case autoplay is blocked
setTimeout(closeIntro, 15000);