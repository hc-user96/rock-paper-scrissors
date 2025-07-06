
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
