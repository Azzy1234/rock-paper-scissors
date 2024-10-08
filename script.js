
let playerScore = 0;
let computerScore = 0;

const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

// Choices buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');


rockBtn.addEventListener('click', function() {
    playGame('rock');
});
paperBtn.addEventListener('click', function() {
    playGame('paper');
});
scissorsBtn.addEventListener('click', function() {
    playGame('scissors');
});


function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getWinner(playerChoice, computerChoice);
    
    displayResult(result, playerChoice, computerChoice);
    updateScore(result);
}

// Computer randomly picks rock, paper, or scissors
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Determine the winner
function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Display result
function displayResult(result, playerChoice, computerChoice) {
    if (result === 'draw') {
        resultDisplay.textContent = `It's a draw! You both chose ${playerChoice}.`;
    } else if (result === 'player') {
        resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        resultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

// Update score
function updateScore(result) {
    if (result === 'player') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === 'computer') {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}
