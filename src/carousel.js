
let currentSlide = 0;
const slides = document.querySelectorAll('#carousel-list > .my-carousel-item');
const carousel = document.getElementById('carousel-list');

const slideWidth = document.getElementById('carousel-view').getBoundingClientRect().width;

console.log(slideWidth);

function goToSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  const offset = -slideWidth * currentSlide;
  carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

document.getElementById('next-btn').addEventListener('click', nextSlide);
document.getElementById('prev-btn').addEventListener('click', prevSlide);

//passa a casa 5 segundos
setInterval(nextSlide, 10000);