const startBtn = document.getElementById('start-btn');
const music = document.getElementById('music'); // sadece bir kez tanımla
const mainContent = document.getElementById('main-content');

startBtn.addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';
  mainContent.style.display = 'block';

  music.volume = 0.3;
  music.play().catch(() => {
    console.log("Tarayıcı otomatik çalmayı engelledi.");
  });
});

// Müzik kontrol
let musicPlaying = true;
const control = document.querySelector('.music-control');
control.addEventListener('click', () => {
  if (musicPlaying) {
    music.pause();
    musicPlaying = false;
    control.textContent = "🎵";
  } else {
    music.play();
    musicPlaying = true;
    control.textContent = "⏸️";
  }
});

// Fotoğraf değiştirici
const photoIndexes = {};
function changePhoto(id, images) {
  if (!photoIndexes[id]) photoIndexes[id] = 0;
  photoIndexes[id] = (photoIndexes[id]+1) % images.length;
  document.getElementById(id).src = images[photoIndexes[id]];
}
