// ROCK PAPER SCISSORS

const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const finalResult = document.getElementById("finalResult");
// target the html with a preset of 0
const currentPlayerScore = document.getElementById("currentPlayerScore");
const currentComputerScore = document.getElementById("currentComputerScore");
const currentTieScore = document.getElementById("currentTieScore");
// start of game both player and computer have 0
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function selectChoice(playerChoice) {
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
    
    playerResult.textContent = `Player: ${playerChoice}`;
    computerResult.textContent = `Computer: ${computerChoice}`;
    finalResult.textContent = result;

    // Removes the green, red or white text when a new guess is selected
    finalResult.classList.remove("greenText", "redText", "whiteText");

    switch(result) {
        case "YOU WIN!":
            finalResult.classList.add("greenText");
            // Will add 1 to the player score
            playerScore++;
             // Will display the player score
            overallPlayerTotal.textContent = playerScore;
            break;
        case "YOU LOSE!":
            finalResult.classList.add("redText");
             // Will add 1 to the computer score
            computerScore++;
            // Will display the computer score
            overallComputerTotal.textContent = computerScore;
            break;
        case "IT'S A TIE":
            finalResult.classList.add("whiteText");
                // Will add 1 to the tie score
            tieScore++;
            // Will display the tie score
            overallTieTotal.textContent = tieScore;
            break;  
    }
}