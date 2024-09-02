function playRound(humanChoice, computerChoice) {
    if (humanChoice === "🪨") {
        if (computerChoice === "✂️") {
            return "Player";
        }
        else if (computerChoice === "📝") {
            return "Computer";
        }   
        else { // computerChoice === "rock"
            return "Draw";
        }
    }
    else if (humanChoice === "📝") {
        if (computerChoice === "✂️") {
            return "Computer"
        }
        else if (computerChoice === "📝") {
            return "Draw";
        }   
        else { // computerChoice === "rock"
            return "Player"
        }
    }
    else { // humanChoice === "Scissors"
        if (computerChoice === "✂️") {
            return "Draw";
        }
        else if (computerChoice === "📝") {
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


function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "🪨";
    } else if (randomChoice === 1) {
        return "📝";
    }
    return "✂️";
}

function playGame() {
    let currentRound = 1;
    const maxRounds = 5;
    let playerScore = 0;
    let computerScore = 0;

    let playerScoreDisplay = document.querySelector("#playerScore");
    let computerScoreDisplay = document.querySelector("#computerScore");
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = playerScore;

    let buttons = document.querySelector(".buttons");
    let resetBtn = document.querySelector("#resetBtn");
    let rockBtn = document.querySelector("#rockBtn");
    let paperBtn = document.querySelector("#paperBtn");
    let scissorsBtn = document.querySelector("#scissorsBtn");

    let playerChoice = document.querySelector("#playerChoice");
    let computerChoice = document.querySelector("#computerChoice");

    buttons.addEventListener("click", (event) => {
        let target = event.target;
        let playerChoiceResult = target.value;
        let computerChoiceResult = getComputerChoice();
        let result = playRound(playerChoiceResult, computerChoiceResult);
        switch(target.id) {
            case "rockBtn":
                playerChoice.textContent = "🪨";
                computerChoice.textContent = computerChoiceResult;
                if (result === "Player") {
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    setTimeout(() => {
                        alert(`You win! ${playerChoiceResult} beats ${computerChoiceResult}`);
                    }, 1000);
                    currentRound++;
                } else if (result === "Computer") {
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    setTimeout(() => {
                        alert(`You lose! ${playerChoiceResult} beats ${computerChoiceResult}`);
                    }, 1000);
                    currentRound++;
                } else {
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    setTimeout(() => {
                        alert("It's a draw!");
                    }, 1000); 
                    currentRound++; 
                } 
                break;
            case "paperBtn":
                playerChoice.textContent = "📝";
                computerChoice.textContent = computerChoiceResult;
                if (result === "Player") {
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    setTimeout(() => {
                        alert(`You win! ${playerChoiceResult} beats ${computerChoiceResult}`);
                    }, 1000);
                    currentRound++;
                } else if (result === "Computer") {
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    setTimeout(() => {
                        alert(`You lose! ${playerChoiceResult} beats ${computerChoiceResult}`);
                    }, 1000);
                    currentRound++;
                } else {
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    setTimeout(() => {
                        alert("It's a draw!");
                    }, 1000);  
                    currentRound++;
                }
                break;
            case "scissorsBtn":
                playerChoice.textContent = "✂️";
                computerChoice.textContent = computerChoiceResult;
                if (result === "Player") {
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    setTimeout(() => {
                        alert(`You win! ${playerChoiceResult} beats ${computerChoiceResult}`);
                    }, 1000);
                    currentRound++;
                } else if (result === "Computer") {
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    setTimeout(() => {
                        alert(`You lose! ${playerChoiceResult} beats ${computerChoiceResult}`);
                    }, 1000);
                    currentRound++;
                } else {
                    playerScore++;
                    playerScoreDisplay.textContent = playerScore;
                    computerScore++;
                    computerScoreDisplay.textContent = computerScore;
                    setTimeout(() => {
                        alert("It's a draw!");
                    }, 1000); 
                    currentRound++; 
                }
                break;
        }
        if (currentRound > maxRounds) {
            let winner = getWinner(playerScore, computerScore);
            if (winner === "Draw") {
                setTimeout(() => {
                    alert("Game Over! It's a draw!");
                }, 2000);
            }
            else {
                setTimeout(() => {
                    alert(`Game Over! The winner is ${winner}!`);
                }, 2000);
            }
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            rockBtn.style.opacity = 0.5;
            paperBtn.style.opacity = 0.5;
            scissorsBtn.style.opacity = 0.5;
        }    
    });

    resetBtn.addEventListener("click", () => {
        playerScore = 0;
        computerScore = 0;
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
        rockBtn.style.opacity = 1;
        paperBtn.style.opacity = 1;
        scissorsBtn.style.opacity = 1;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = playerScore;
        playerChoice.textContent = "?";
        computerChoice.textContent = "?";
        currentRound = 1;
        maxRounds = 5;
        
    });
}

playGame();