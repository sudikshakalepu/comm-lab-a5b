const carZone = document.getElementById('carZone');
const vroom   = document.getElementById('vroom');

carZone.addEventListener('click', () => {
  vroom.currentTime = 0;
  vroom.play();
});