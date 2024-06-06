function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice == 0 ? "rock" :
  choice == 1 ? "paper" :
  "scissors";
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    choice = prompt("Rock, Paper or Scissors?").toLowerCase();
  }
  return choice; 
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    // Draw case
    console.log("Draw!");
    return "d";
  }
  else if (humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "scissors" && computerChoice === "paper") {
    // Human won
    console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
    return "h";
  }
  else {
    // Computer won
    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    return "c";
  }
}

function playGame() {
  // Init computer and human scores
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    // Get computer and human choices
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const winner = playRound(humanSelection, computerSelection);
    if (winner === "h") {
      humanScore++;
    }
    else if (winner === "c") {
      computerScore++;
    }
  }

  console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
}

playGame();

