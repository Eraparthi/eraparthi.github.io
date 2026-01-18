const modal = document.getElementById("introModal");
const video = document.getElementById("introVideo");
const hero = document.querySelector(".hero");

function openIntro() {
  modal.classList.add("show");
  video.play();
}

function closeIntro() {
  modal.classList.remove("show");
  hero.classList.remove("hidden");
  sessionStorage.setItem("introShown", "yes");
}

video.addEventListener("ended", closeIntro);

window.onload = () => {
  if (!sessionStorage.getItem("introShown")) {
    openIntro();
  } else {
    hero.classList.remove("hidden");
  }
};