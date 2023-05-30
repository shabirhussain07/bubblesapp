// / Function to animate the arrow and change the color of the circle
function animateArrow(arrowClass, circleClass) {
  let arrow = document.querySelector(arrowClass);
  let currentPos = 100;
  let animation = setInterval(frame, 1);

  function frame() {
    let circle = document.querySelector(circleClass);

    if (currentPos === 668) {
      clearInterval(animation); // Stop animation at desired pixel
      let randomColor = getRandomColor();
      circle.style.backgroundColor = randomColor; // Change color of circle
    } else {
      currentPos++;
      arrow.style.right = currentPos + "px";
    }
  }
  // Function to generate a random color
  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

// Event listeners for each circle to animate the corresponding arrow
let circle = document.querySelector(".circle");
circle.addEventListener("click", function () {
  animateArrow(".arrow", ".circle");
});

let circle1 = document.querySelector(".circle1");
circle1.addEventListener("click", function () {
  animateArrow(".arrow1", ".circle1");
});

let circle2 = document.querySelector(".circle2");
circle2.addEventListener("click", function () {
  animateArrow(".arrow2", ".circle2");
});

let circle3 = document.querySelector(".circle3");
circle3.addEventListener("click", function () {
  animateArrow(".arrow3", ".circle3");
});

// Event listener for the reset button to reset all arrows and circle color
let resetButton = document.querySelector("button");
resetButton.addEventListener("click", function () {
  // Reset all arrows
  let arrows = document.querySelectorAll(".arrow");
  arrows.forEach(function (arrow) {
    arrow.style.right = "100px";
  });
  let arrows1 = document.querySelectorAll(".arrow1");
  arrows1.forEach(function (arrow) {
    arrow.style.right = "100px";
  });
  let arrows2 = document.querySelectorAll(".arrow2");
  arrows2.forEach(function (arrow) {
    arrow.style.right = "100px";
  });
  let arrows3 = document.querySelectorAll(".arrow3");
  arrows3.forEach(function (arrow) {
    arrow.style.right = "100px";
  });

  // Reset all circle colors
  let circles = document.querySelectorAll(".circle");
  circles.forEach(function (circle) {
    circle.style.backgroundColor = "blue";
  });
  let circles1 = document.querySelectorAll(".circle1");
  circles1.forEach(function (circle) {
    circle.style.backgroundColor = "rgb(255, 0, 0)";
  });
  let circles2 = document.querySelectorAll(".circle2");
  circles2.forEach(function (circle) {
    circle.style.backgroundColor = "rgb(0, 255, 21)";
  });
  let circles3 = document.querySelectorAll(".circle3");
  circles3.forEach(function (circle) {
    circle.style.backgroundColor = "rgb(255, 255, 0)";
  });
});
