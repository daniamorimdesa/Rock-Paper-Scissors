let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("player-choice").innerText = `You chose: ${playerChoice}`;
    document.getElementById("computer-choice").innerText = `Computer chose: ${computerChoice}`;

    let result = '';
    let resultClass = '';

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
        resultClass = "tie";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
        resultClass = "win";
        playerScore++;
    } else {
        result = "Computer wins!";
        resultClass = "lose";
        computerScore++;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("result").className = resultClass;
    document.getElementById("score").innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}