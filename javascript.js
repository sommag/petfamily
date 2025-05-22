const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function updateSlidePosition() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlidePosition();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlidePosition();
}
