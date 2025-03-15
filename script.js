const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
let score = 0;
let timeLeft = 30;

function moveTarget() {
  const gameArea = document.getElementById('game');
  const maxX = window.innerWidth - target.offsetWidth;
  const maxY = window.innerHeight - target.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);
  target.style.left = `${newX}px`;
  target.style.top = `${newY}px`;
}

function updateScore() {
  score += 1;
  scoreDisplay.textContent = score;
  moveTarget();
}

function countdown() {
  timeLeft -= 1;
  timeDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timer);
    target.removeEventListener('click', updateScore);
    alert(`Game Over! Your score: ${score}`);
  }
}

target.addEventListener('click', updateScore);


moveTarget();
const timer = setInterval(countdown, 1000);