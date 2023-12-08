/* REVEAL TEXT TESTIMONIAL: */
const timeText = 5000;
let currentTextIndex = 0;
let images = document.querySelectorAll(".testimonial-contentSlider h3");
let max = images.length;

function nextText() {
  images[currentTextIndex].classList.remove("selected");

  currentTextIndex++;

  if (currentTextIndex >= max) {
    currentTextIndex = 0;
  }

  images[currentTextIndex].classList.add("selected");
}

function startSlider() {
  setInterval(() => {
    nextText();
  }, timeText);
}

window.addEventListener("load", startSlider);

/* REVEAL BALL TRANSITION */
const timeBall = 5000;
let currentBallIndex = 0;
let divBalls = document.querySelectorAll(".testimonial-carousel div");
let maxBalls = divBalls.length;

function nextBall() {
  divBalls[currentBallIndex].classList.remove("ball-active");

  currentBallIndex++;

  if (currentBallIndex >= maxBalls) {
    currentBallIndex = 0;
  }

  divBalls[currentBallIndex].classList.add("ball-active");
}

function startSliderBall() {
  setInterval(() => {
    nextBall();
  }, timeBall);
}

window.addEventListener("load", startSliderBall);
