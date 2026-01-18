const modal = document.getElementById("introModal");
const video = document.getElementById("introVideo");

function closeIntro() {
  modal.style.display = "none";
  video.pause();
}

video.addEventListener("ended", closeIntro);

// safety fallback
setTimeout(closeIntro, 15000);