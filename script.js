let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 30);
    console.log(choiceNumber);

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

/*
FUNCTION playRound(humanChoice, computerChoice)
    turn humanChoice string to lowercase
    IF human === "rock":
        IF computer === "paper"
            INCREMENT computer
            RETURN
        IF ELSE  computer === "scissors"
            INCREMENT human
            RETURN
        ELSE
            INCREMENT human and computer
            RETURN
    ELSE IF human === "paper":
        IF computer === ""
....