playGame();


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (humanScore < computerScore) {
        console.log("You lost the game!");
    }
    else {
        console.log("It's a draw!");
    }


    function getComputerChoice() {
        let choiceNumber = Math.floor(Math.random() * 30);

        if (choiceNumber >= 20) {
            return "rock";
        }
        else if (choiceNumber >= 10) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }


    function getHumanChoice() {
        let choice = prompt("What's your choice? ", "");
        return choice;
    }


    function playRound(humanChoice, computerChoice) {
        human = humanChoice.toLowerCase();
        computer = computerChoice;

        if (human === "rock" && computer === "scissors") {
            console.log("You win!");
            humanScore++;
        }
        else if (human === "paper" && computer === "stone") {
            console.log("You win!");
            humanScore++;
        }
        else if (human === "scissors" && computer === "paper") {
            console.log("You win!");
            humanScore++;
        }
        else if (human === "rock" && computer === "paper") {
            console.log("You lose!");
            computerScore++;
        }
        else if (human === "paper" && computer === "scissors") {
            console.log("You lose!");
            computerScore++;
        }
        else if (human === "scissors" && computer === "rock") {
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("Draw!");
            humanScore++;
            computerScore++;
        }
    }
}
