'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const disableGame = function () {
  document.querySelector('.check').disabled = true;
  document.querySelector('.check').style.backgroundColor = '#c4c4c4';
  document.querySelector('.check').style.cursor = 'not-allowed';
  document.removeEventListener('keydown', handleKeyPress);
};

const enableGame = function () {
  document.querySelector('.check').disabled = false;
  document.querySelector('.check').style.backgroundColor = '#60b347';
  document.querySelector('.check').style.cursor = 'pointer';
  document.addEventListener('keydown', handleKeyPress);
};

const handleKeyPress = function (event) {
  if (event.key === 'Enter') {
    document.querySelector('.check').click();
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.guess').disabled = true;
    disableGame();

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#8B0000';
      document.querySelector('.number').style.width = '30rem';

      document.querySelector('.guess').disabled = true;
      disableGame();
    }
  }

});
document.querySelector('.guess').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    document.querySelector('.check').click();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').disabled = false; // Enable input box
});
