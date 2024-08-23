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
    let humanChoice = String(prompt("Enter your choice: ")).toLowerCase();
    return humanChoice;
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(`Computer Choice: ${computerChoice}`);
console.log(`Human Choice: ${humanChoice}`);

