playGame();


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    let resultsRound = document.querySelector(".results #round");
    let resultsGame = document.querySelector(".results #game");
    let score = document.querySelector(".results #score");

    let selection = document.querySelectorAll(".selection button");
    selection.forEach(button => {
        button.addEventListener("click", (e) => {
            playRound(e.target.id, getComputerChoice());
        });
    });

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

    function playRound(humanChoice, computerChoice) {
        human = humanChoice;
        computer = computerChoice;

        if (human === "rock" && computer === "scissors") {
            resultsRound.textContent = "You win!";
            humanScore++;
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (human === "paper" && computer === "rock") {
            resultsRound.textContent = "You win!";
            humanScore++;
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (human === "scissors" && computer === "paper") {
            resultsRound.textContent = "You win!";
            humanScore++;
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (human === "rock" && computer === "paper") {
            resultsRound.textContent = "You Lose!";
            computerScore++;
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (human === "paper" && computer === "scissors") {
            resultsRound.textContent = "You Lose!";
            computerScore++;
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (human === "scissors" && computer === "rock") {
            resultsRound.textContent = "You Lose!";
            computerScore++;
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else {
            resultsRound.textContent = "Draw!";
            humanScore++;
            computerScore++;
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
    }
}
