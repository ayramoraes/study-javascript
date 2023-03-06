'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 20

// document.querySelector('.guess').value 


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
  
    // When there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔️ No number!';
      displayMessage('⛔️ No number!');