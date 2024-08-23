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
        }
        else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock");
        }   
        else { // computerChoice === "rock"
            console.log("It's a draw!");
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper");
        }
        else if (computerChoice === "paper") {
            console.log("It's a draw!");
        }   
        else { // computerChoice === "rock"
            console.log("You win! Paper beats Rock");
        }
    }
    else { // humanChoice === "Scissors"
        if (computerChoice === "scissors") {
            console.log("It's a draw!");
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
        }   
        else { // computerChoice === "rock"
            console.log("You lose! Rock beats Scissors");
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


