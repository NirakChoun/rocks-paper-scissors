function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = String(prompt("Enter your choice: "));
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
        else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }   
        else { // computerChoice === "rock"
            console.log("It's a draw!");
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
        else if (computerChoice === "paper") {
            console.log("It's a draw!");
        }   
        else { // computerChoice === "rock"
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
    }
    else { // humanChoice === "Scissors"
        if (computerChoice === "scissors") {
            console.log("It's a draw!");
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }   
        else { // computerChoice === "rock"
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(`Human Choice: ${humanChoice}`);
console.log(`Computer Choice: ${computerChoice}`);

playRound(humanChoice, computerChoice);


