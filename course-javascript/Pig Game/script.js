const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0Btn = document.querySelector('.btn--player-0');
const player1Btn = document.querySelector('.btn--player-1');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  diceEl.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  document.querySelectorAll('.emoji').forEach(emoji => emoji.style.visibility = 'hidden');
  player0Btn.classList.remove('hidden');
  player1Btn.classList.add('hidden');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');

  if (activePlayer === 0) {
    player0Btn.classList.remove('hidden');
    player1Btn.classList.add('hidden');
  } else {
    player1Btn.classList.remove('hidden');
    player0Btn.classList.add('hidden');
  }


};

// Add event listeners to the dice buttons
player0Btn.addEventListener('click', function() {
  if (playing && activePlayer === 0) {
    rollDice();
  }
});
player1Btn.addEventListener('click', function() {
  if (playing && activePlayer === 1) {
    rollDice();
  }
});

// Define the rollDice function to roll the dice for the active player
function rollDice() {
  // Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    // Check if player's score is >= 100
    if (currentScore + scores[activePlayer] >= 100) {
      // Finish the game

      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
      
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

         // Update the crown for the winning player
      const crown = document.querySelector(`.player--${activePlayer} .emoji`);
      crown.style.visibility = 'visible';
    }
    
  } else {
    // Show the number 1 for a short delay before switching to next player
    setTimeout(() => {
      // Switch to next player
      switchPlayer();

      // Hide the dice after switching to next player
      diceEl.classList.add('hidden');
    }, 300);
  }
}


btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
    // 3. Check the highest score and update the crown
    // Get the player with the highest score
    const highestScore = Math.max(...scores);

    // Loop through all the players and show the crown for the one with the highest score
    document.querySelectorAll('.player')
      .forEach((player, index) => {
        const crown = player.querySelector('.emoji');
        crown.style.visibility = scores[index] === highestScore ? 'visible' : 'hidden';
      });
  }
});

btnNew.addEventListener('click', init);