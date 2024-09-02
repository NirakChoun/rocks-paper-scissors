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

// function playGame() {
//     let rounds = 1;
//     let playerScore = 0;
//     let computerScore = 0;

//     let playerScoreDisplay = document.querySelector("#playerScore");
//     let computerScoreDisplay = document.querySelector("#computerScore");
//     playerScoreDisplay.textContent = playerScore;
//     computerScoreDisplay.textContent = playerScore;

//     let buttons = document.querySelector(".buttons");

//     while (rounds <= 5) {
//         let playerChoice = document.querySelector("#playerChoice");
//         let computerChoice = document.querySelector("#computerChoice");

//         buttons.addEventListener("click", (event) => {
//             let target = event.target;
//             let computerChoiceResult = getComputerChoice();
//             let playerChoiceResult = "";
//             switch(target.id) {
//                 case "rockBtn":
//                     playerChoice.textContent = "🪨";
//                     playerChoiceResult = target.value;
//                     computerChoice.textContent = computerChoiceResult;
//                     break;
//                 case "paperBtn":
//                     playerChoice.textContent = "📝";
//                     playerChoiceResult = target.value;
//                     computerChoice.textContent = computerChoiceResult;
//                     break;
//                 case "scissorsBtn":
//                     playerChoice.textContent = "✂️";
//                     playerChoiceResult = target.value;
//                     computerChoice.textContent = computerChoiceResult;
//                     break;
//             }
            
//         });

//         console.log("\n");
//         console.log(`Human Choice: ${humanChoice}`);
//         console.log(`Computer Choice: ${computerChoice}`);

//         let result = playRound(playerChoiceResult, computerChoiceResult);
//         if (result === "Player") {
//             alert(`You win! ${humanChoice} beats ${computerChoice}`);
//             playerScore++;
//             playerScoreDisplay.textContent = playerScore;
//         } 
//         else if (result === "Computer") {
//             alert(`You lose! ${computerChoice} beats ${humanChoice}`);
//             computerScore++;
//             computerScoreDisplay.textContent = playerScore;
//         }
//         else { // result === "Draw"
//             alert("It's a draw!");
//         }

//         console.log(`Human Score: ${playerScore}`);
//         console.log(`Computer Score: ${computerScore}`);
//         rounds++;
//     }

    // let winner = getWinner(playerScore, computerScore);
    // if (winner === "Draw") {
    //     alert(`It's a draw!`);
    // }
    // else {
    //     alert(`The winner is ${winner}!`);
    // }
//     // playerScore = 0;
//     // computerScore = 0;
//     // playerScoreDisplay.textContent = playerScore;
//     // computerScoreDisplay.textContent = playerScore;
//     // console.log("\n");
// }

// playGame();


// let buttons = document.querySelector(".buttons");

// let playerChoice = document.querySelector("#playerChoice");
// let computerChoice = document.querySelector("#computerChoice");

// buttons.addEventListener("click", (event) => {
//     let target = event.target;
//     let playerChoiceResult = target.value;
//     let computerChoiceResult = getComputerChoice();
//     let result = playRound(playerChoiceResult, computerChoiceResult);
//     switch(target.id) {
//         case "rockBtn":
//             playerChoice.textContent = "🪨";
//             computerChoice.textContent = computerChoiceResult;
//             if (result === "Player") {
//                 setTimeout(() => {
//                     alert(`You win! ${playerChoiceResult} beats ${computerChoiceResult}`);
//                 }, 1000);
//             } else if (result === "Computer") {
//                 setTimeout(() => {
//                     alert(`You lose! ${playerChoiceResult} beats ${computerChoiceResult}`);
//                 }, 1000);
//             } else {
//                 setTimeout(() => {
//                     alert("It's a draw!");
//                 }, 1000);  
//             } 
//             break;
//         case "paperBtn":
//             playerChoice.textContent = "📝";
//             computerChoice.textContent = computerChoiceResult;
//             if (result === "Player") {
//                 setTimeout(() => {
//                     alert(`You win! ${playerChoiceResult} beats ${computerChoiceResult}`);
//                 }, 1000);
//             } else if (result === "Computer") {
//                 setTimeout(() => {
//                     alert(`You lose! ${playerChoiceResult} beats ${computerChoiceResult}`);
//                 }, 1000);
//             } else {
//                 setTimeout(() => {
//                     alert("It's a draw!");
//                 }, 1000);  
//             }
//             break;
//         case "scissorsBtn":
//             playerChoice.textContent = "✂️";
//             computerChoice.textContent = computerChoiceResult;
//             if (result === "Player") {
//                 setTimeout(() => {
//                     alert(`You win! ${playerChoiceResult} beats ${computerChoiceResult}`);
//                 }, 1000);
//             } else if (result === "Computer") {
//                 setTimeout(() => {
//                     alert(`You lose! ${playerChoiceResult} beats ${computerChoiceResult}`);
//                 }, 1000);
//             } else {
//                 setTimeout(() => {
//                     alert("It's a draw!");
//                 }, 1000);  
//             }
//             break;
//     }
// });

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "🪨";
    } else if (randomChoice === 1) {
        return "📝";
    }
    return "✂️";
}

// function playGame() {
//     let rounds = 1;
//     let playerScore = 0;
//     let computerScore = 0;

//     let playerScoreDisplay = document.querySelector("#playerScore");
//     let computerScoreDisplay = document.querySelector("#computerScore");
//     playerScoreDisplay.textContent = playerScore;
//     computerScoreDisplay.textContent = playerScore;

//     let buttons = document.querySelector(".buttons");

//     let playerChoice = document.querySelector("#playerChoice");
//     let computerChoice = document.querySelector("#computerChoice");

//     while (rounds <= 5) {
        
//     }
    
// }

let currentRound = 1;
const maxRounds = 5;
let playerScore = 0;
let computerScore = 0;

let playerScoreDisplay = document.querySelector("#playerScore");
let computerScoreDisplay = document.querySelector("#computerScore");
playerScoreDisplay.textContent = playerScore;
computerScoreDisplay.textContent = playerScore;

let buttons = document.querySelector(".buttons");

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
    }    
});







// playGame();