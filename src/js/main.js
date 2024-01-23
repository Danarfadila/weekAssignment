function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (const i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function reveal2() {
  const reveals = document.querySelectorAll(".reveal2");

  for (const i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal2);

function reveal3() {
  const reveals = document.querySelectorAll(".reveal3");

  for (const i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal3);

import confetti from "canvas-confetti";
const myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10;
document.body.append(myCanvas);

const confettiBtn = document.getElementById("confettiBtn");
confettiBtn.addEventListener("click", () => {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  myConfetti({
    particleCount: 100,
    spread: 360,
  });
});
