

const galleries = {
  jilly: ['img/jilly11.jpg', 'img/jilly12.jpg', 'img/jilly10.jpg','img/jilly9.jpg','img/jilly8.jpg'],
  pippo: ['img/pippo12.jpg', 'img/pippo7.jpg', 'img/pippo10.jpg', 'img/pippo11.jpg','img/pippo4.jpg'],
  saverio: ['img/saverio.jpg', 'img/saverio2.jpg', 'img/saverio3.jpg', 'img/saverio5.jpg', 'img/saverio4.jpg']
};

let currentAnimal = '';
let currentIndex = 0;

function openModal(animal) {
  currentAnimal = animal;
  currentIndex = 0;
  showPopupImage();
  document.getElementById('popup-modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('popup-modal').style.display = 'none';
}

function showPopupImage() {
  const modalImg = document.getElementById('modal-image');
  modalImg.src = galleries[currentAnimal][currentIndex];
  modalImg.alt = `${currentAnimal} photo ${currentIndex + 1}`;
}

function nextPopupImage() {
  currentIndex = (currentIndex + 1) % galleries[currentAnimal].length;
  showPopupImage();
}

function prevPopupImage() {
  currentIndex = (currentIndex - 1 + galleries[currentAnimal].length) % galleries[currentAnimal].length;
  showPopupImage();
}

document.getElementById('popup-modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', function(e) {
  if (document.getElementById('popup-modal').style.display === 'flex') {
    if (e.key === 'ArrowRight') nextPopupImage();
    if (e.key === 'ArrowLeft') prevPopupImage();
    if (e.key === 'Escape') closeModal();
  }
});

// Swipe touch support
let startX = 0;
let endX = 0;

const modal = document.getElementById('popup-modal');

modal.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
}, false);

modal.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  const diffX = startX - endX;

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      nextPopupImage(); // swipe sinistra → avanti
    } else {
      prevPopupImage(); // swipe destra → indietro
    }
  }
}, false);