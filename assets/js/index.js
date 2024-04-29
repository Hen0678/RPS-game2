// ROCK PAPER SCISSORS

const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
// target the html with a preset of 0
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const tieScoreDisplay = document.getElementById("tieScoreDisplay");
// start of game both player and computer have 0
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function playGame(playerChoice) {
// Creates a randon number between 1-3 which correlates to rock, paper or scissors     
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "IT'S A TIE";
    }
    else {
        // switch cane be used instead of multiple if statements
        switch(playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!"
                // break terminates the loop
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!"
                break;              

        }
    }
    
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // This will remove green and red text and display black text if tie
    resultDisplay.classList.remove("greenText", "redText", "blueText");

    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            // Will add 1 to the player score
            playerScore++;
             // Will display the player score
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
             // Will add 1 to the computer score
            computerScore++;
            // Will display the computer score
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE":
            resultDisplay.classList.add("blueText");
                // Will add 1 to the computer score
            tieScore++;
            // Will display the computer score
            tieScoreDisplay.textContent = tieScore;
            break;  
    }

}