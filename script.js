const modal = document.getElementById("introModal");
const video = document.getElementById("introVideo");
const hero = document.querySelector(".hero");

function closeIntro() {
  modal.style.display = "none";
  hero.classList.remove("hidden");
  sessionStorage.setItem("introPlayed", "yes");
}

window.addEventListener("load", () => {
  if (sessionStorage.getItem("introPlayed")) {
    closeIntro();
    return;
  }

  video.play().catch(() => {
    // autoplay blocked → show content anyway
    closeIntro();
  });

  video.addEventListener("ended", closeIntro);

  // HARD FAILSAFE (10 sec)
  setTimeout(closeIntro, 10000);
});