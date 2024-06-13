function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    computerChoiceDiv.textContent = "Computer Choice: Rock 🪨";
    return "rock";
  }
  else if (choice === 1) {
    computerChoiceDiv.textContent = "Computer Choice: Paper 📃";
    return "paper";
  }
  else {
    computerChoiceDiv.textContent = "Computer Choice: Scissors ✂️";
    return "scissors";
  }  
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    // Draw case
    resultDiv.textContent = "Result: Draw!";
    return "d";
  }
  else if (humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper") {
    // Human win case
    resultDiv.textContent = `Result: You win! ${humanChoice} beats ${computerChoice}!`;
    return "h";
  }
  else {
    // Computer win case
    resultDiv.textContent = `Result: You lose! ${computerChoice} beats ${humanChoice}!`;
    return "c";
  }
}

function changeScores(winner) {
  if (winner === "h") {
    humanScore++;
  }
  else if (winner === "c") {
    computerScore++;
  }
  else {
    humanScore++;
    computerScore++;
  }
  humanScoreDiv.textContent = `Your Score: ${humanScore}`;
  computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
}

function checkGameStatus() {
  if (humanScore === 5 && computerScore === 5) {
    gameWinnerDiv.textContent = "Draw! There is no Game Winner";
    gameWinnerDiv.style.backgroundColor = "rgb(255, 225, 0)";
    setTimeout(restartGame, GAME_RESTART_WAIT_TIME);
  }
  else if (humanScore === 5) {
    gameWinnerDiv.textContent = "Game Winner: You!";
    gameWinnerDiv.style.backgroundColor = "#4CAF50";
    setTimeout(restartGame, GAME_RESTART_WAIT_TIME);
  }
  else if (computerScore === 5) {
    gameWinnerDiv.textContent = "Game Winner: Computer!";
    gameWinnerDiv.style.backgroundColor = "#ff5c50";
    setTimeout(restartGame, GAME_RESTART_WAIT_TIME);
  }  
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreDiv.textContent = "Your Score: 0";
  computerScoreDiv.textContent = "Computer Score: 0";
  gameWinnerDiv.textContent = "";
  gameWinnerDiv.style.backgroundColor = "#f0f0f0";
}


// Variables
let humanScore = 0;
let computerScore = 0;
const GAME_RESTART_WAIT_TIME = 2000;

const computerChoiceDiv = document.querySelector(".computer-choice");
const resultDiv = document.querySelector(".result");
const gameWinnerDiv = document.querySelector(".game-winner");
const humanScoreDiv = document.querySelector(".human-score");
const computerScoreDiv = document.querySelector(".computer-score");

const humanBtns = document.querySelectorAll(".btn");
humanBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();

    // Buttons class structure: "btn rock/paper/scissors"
    const humanSelection = btn.classList[1];

    const winner = playRound(humanSelection, computerSelection);
    
    changeScores(winner);

    checkGameStatus();
  });
});

