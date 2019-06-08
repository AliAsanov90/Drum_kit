
const keys = document.querySelectorAll('.key');

function playSound(e) {
  let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

window.addEventListener('keyup', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
