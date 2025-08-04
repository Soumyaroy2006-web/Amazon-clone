const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentSlide = 0;

function updateSlide() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  // ✅ Loop back to first if at last
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
});

prevButton.addEventListener('click', () => {
  // ✅ Loop to last if at first
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
});

window.addEventListener('resize', updateSlide);