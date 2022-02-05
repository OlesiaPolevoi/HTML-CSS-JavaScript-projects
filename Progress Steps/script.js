"use strict";
// blue -fill progress line
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
// get Node list of class .circle - can be treated similar to an array
const circles = document.querySelectorAll(".circle");

//variable that represents current active step - set to 1 by default
let currentActive = 1;

next.addEventListener("click", () => {
  //each click adds 1 to currentActive variable
  currentActive++;

  // if variable currentActive becomes greater than Node list circles which is 4 make variable currentActive = 4;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  //run function update here
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  //take Node list circles and apply .forEach loop that receives as arguments each element(circle) and also i -index.
  //Logic: if i < currentActive then add class "active" to the current circle. else remove class "active"

  circles.forEach((circle, i) => {
    // i = 0 currentActive=2
    // i = 1 currentActive=2
    // i = 2 currentActive=2

    if (i < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  //receive NodeList of elements with class .active

  const actives = document.querySelectorAll(".active");

  console.log(actives);
  //calculate percentages based on the number of elements in the Node list. Set resulting percentage to the progress bar WIDTH 33% 66% 100%

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //disable buttons based on the currentActive value
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
