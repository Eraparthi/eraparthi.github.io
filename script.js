const popup = document.getElementById("videoPopup");
const video = document.getElementById("introVideo");

function closePopup() {
  popup.style.display = "none";
  video.pause();
}

video.addEventListener("ended", closePopup);