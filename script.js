

const galleries = {
  jilly: ['img/jilly11.jpg', 'img/jilly2.jpg', 'img/jilly3.jpg'],
  pippo: ['img/pippo12.jpg', 'img/pippo2.jpg', 'img/pippo3.jpg'],
  saverio: ['img/saverio.jpg', 'img/saverio2.jpg', 'img/saverio3.jpg']
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
