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
            return "Player";
        }
        else if (computerChoice === "paper") {
            return "Computer";
        }   
        else { // computerChoice === "rock"
            return "Draw";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer"
        }
        else if (computerChoice === "paper") {
            return "Draw";
        }   
        else { // computerChoice === "rock"
            return "Player"
        }
    }
    else { // humanChoice === "Scissors"
        if (computerChoice === "scissors") {
            return "Draw";
        }
        else if (computerChoice === "paper") {
            return "Player";
        }   
        else { // computerChoice === "rock"
            return "Computer";
        }
    }
}

function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        return "Player";
    }
    else if (humanScore < computerScore) {
        return "Computer";
    }
    else {
        return "Draw";
    }
}

function playGame() {
    let rounds = 1;
    let humanScore = 0;
    let computerScore = 0;

    while (rounds <= 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log("\n");
        console.log(`Human Choice: ${humanChoice}`);
        console.log(`Computer Choice: ${computerChoice}`);

        let result = playRound(humanChoice, computerChoice);
        if (result === "Player") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } 
        else if (result === "Computer") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else { // result === "Draw"
            console.log("It's a draw!");
        }

        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        rounds++;
    }

    let winner = getWinner(humanScore, computerScore);
    if (winner === "Draw") {
        console.log(`It's a draw!`);
    }
    else {
        console.log(`The winner is ${winner}!`);
    }
    
    console.log("\n");
}

playGame();







