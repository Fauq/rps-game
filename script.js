function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        return "The result is a tie!";
    } 
    if (playerSelection === "rock"){
        if (computerSelection === "scissors"){
            return "You win! Rock beats scissors!";
        } else {
            return "You lose! Paper beats rock!";
        }
    }
    if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return "You win! Paper beats rock!";
        } else {
            return "You lose! Scissors beats paper!";
        }
    }
    if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            return "You lose! Rock beats scissors!";
        } else {
            return "You win! Scissors beats paper!";
        }
    }
}

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playGame() {
    const playerSelection = prompt("Enter rock, paper, or scissors: ");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i<5; i++){
    playGame();
}