'use strict';

const bodyDOM = document.querySelector('body')
const numberDOM = bodyDOM.querySelector('.number');
const scoreDOM = bodyDOM.querySelector('.score');
const highScoreDOM = bodyDOM.querySelector('.highscore');
const guessDOM = bodyDOM.querySelector('.guess');
const messageDOM = bodyDOM.querySelector('.message');
const checkDOM = document.querySelector('.check');
const againDOM = document.querySelector('.again');
let secretNumber = Math.round(Math.random() * 20) + 1;
let score = 20
let highScore = 0;
const displayMessage = function(message) {
    messageDOM.textContent = message;
};

checkDOM.addEventListener('click', () => {
    const guess = Number(guessDOM.value);

    // When there is no imput
    if (!guess) {
        displayMessage('❌ No number!');

        //when player wins
    } else if (guess === secretNumber) {
        displayMessage('🏆 Correct Number!');
        bodyDOM.style.backgroundColor = '#60b347';
        numberDOM.style.width = '30rem';
        numberDOM.textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            highScoreDOM.textContent = highScore
        }

        //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            scoreDOM.textContent = score;
        } else {
            displayMessage('💥 You lost the game');
            scoreDOM.textContent = 0;
        }
    }
})

againDOM.addEventListener('click', () => {
    score = 20;
    secretNumber = Math.round(Math.random() * 20) + 1;
    scoreDOM.textContent = score;
    numberDOM.textContent = '?';
    guessDOM.value = '';
    bodyDOM.style.backgroundColor = '#222';
    numberDOM.style.width = '15rem';
    displayMessage('Start guessing...');
})