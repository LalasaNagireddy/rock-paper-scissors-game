const choices = document.querySelectorAll('.choice');
const resultDisplay = document.getElementById('result');

function playGame(playerChoice) {
  const computerChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
  const winner = determineWinner(playerChoice, computerChoice);
  displayResult(winner, computerChoice);
}

function determineWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'player';
  }
  return 'computer';
}

function displayResult(winner, computerChoice) {
  if (winner === 'draw') {
    resultDisplay.textContent = `It's a draw! Computer also chose ${computerChoice}.`;
  } else {
    resultDisplay.textContent = `${winner === 'player' ? 'You win!' : 'Computer wins!'} Computer chose ${computerChoice}.`;
  }
}

choices.forEach(choice => {
  choice.addEventListener('click', function() {
    playGame(this.dataset.choice);
  });
});