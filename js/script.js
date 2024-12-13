let button1 = document.querySelectorAll(".control");
let slide = document.querySelectorAll(".slide");
let prev = 0;
let count = 0;
let carosel = document.querySelector(".carousel");
let images = document.querySelectorAll(".background");
let interval;

button = Array.from(button1);

// Initial setup: Apply the "active-slide" class to the first slide and image
slide[0].classList.add("active-slide");
images[0].classList.add("active-slide");

carosel.addEventListener("mouseover", () => {
  clearInterval(interval);
});

carosel.addEventListener("mouseleave", () => {
  interval = setInterval(() => {
    next(count == 3 ? 0 : count + 1);
  }, 3500);
});

button.map((btn, index) => {
  btn.addEventListener("click", () => {
    next(index);
    clearInterval(interval);
  });
});

// Automatically switch slides every 3.5 seconds
interval = setInterval(() => {
  next(count == 3 ? 0 : count + 1);
}, 3500);

function next(index) {
  clearInterval(interval);

  // Remove the active class and reset the opacity for all slides and images
  slide[prev].classList.remove("active-slide");
  images[prev].classList.remove("active-slide");

  // Apply fade-in to the next slide and image
  slide[index].classList.add("active-slide");
  images[index].classList.add("active-slide");

  // Update the prev and count variables
  prev = index;
  count = index;

  // Restart the interval for automatic slide transition
  interval = setInterval(() => {
    next(count == 3 ? 0 : count + 1);
  }, 3500);

  // Ensure the clicked button is checked
  button[index].checked = true;
}
