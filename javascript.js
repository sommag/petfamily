const galleries = {
  jilly: ['img/jilly1.jpg', 'img/jilly2.jpg', 'img/jilly3.jpg'],
  pippo: ['img/pippo1.jpg', 'img/pippo2.jpg', 'img/pippo3.jpg'],
  saverio: ['img/saverio1.jpg', 'img/saverio2.jpg', 'img/saverio3.jpg']
};

const currentIndices = {
  jilly: 0,
  pippo: 0,
  saverio: 0
};

function showImage(animal) {
  const imgElement = document.getElementById(`${animal}-image`);
  imgElement.src = galleries[animal][currentIndices[animal]];
}

function nextImage(animal) {
  currentIndices[animal] = (currentIndices[animal] + 1) % galleries[animal].length;
  showImage(animal);
}

function prevImage(animal) {
  currentIndices[animal] = (currentIndices[animal] - 1 + galleries[animal].length) % galleries[animal].length;
  showImage(animal);
}
