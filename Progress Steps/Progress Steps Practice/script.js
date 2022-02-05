"use strict";

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  console.log(currentActive);
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log(currentActive);

  update();
});

function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add("active");
    } else if (i >= currentActive) {
      circle.classList.remove("active");
    }
  });

  let actives = document.querySelectorAll(".active");
  console.log(actives);

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === circles.length) {
    next.disabled = true;
  } else if (currentActive <= 1) {
    prev.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
