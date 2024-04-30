// ROCK PAPER SCISSORS

const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
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
// Creates a randon computer choice between 1-5 which correlates to rock, paper, scissors, Lizard or Spock    
    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    if(playerChoice === computerChoice) {
        result = "IT'S A TIE";
    }
    else {
        // switch cane be used instead of multiple if statements
        switch(playerChoice) {
            case "Rock":
                result = (computerChoice == "Scissors" || computerChoice == "Lizard") ? "YOU WIN!" : "YOU LOSE!"
                // break terminates the loop
                break;
  

            case "Paper":
                result = (computerChoice === "Rock" || computerChoice == "Spock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "Scissors":
                result = (computerChoice == "Paper" || computerChoice == "Lizard") ? "YOU WIN!" : "YOU LOSE!"
                break;    
            case "Lizard":
                result = (computerChoice == "Paper" || computerChoice == "Spock" ) ? "YOU WIN!" : "YOU LOSE!"
                break; 
            case "Spock":
                result = (computerChoice == "Scissors" || computerChoice == "Rock") ? "YOU WIN!" : "YOU LOSE!"
                break; 
                          

        }
    }
    
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // This will remove green and red text and display white text if tie
    resultDisplay.classList.remove("greenText", "redText");

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