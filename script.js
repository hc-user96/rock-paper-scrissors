/* 
Computer function:

CREATE random number 0-1 * 10 and round to integer

IF number % 3 === 0:
    RETURN "rock"
ELSE IF number % 2 === 0:
    RETURN "paper"
ELSE:
    RETURN "scissors"
*/

function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 30);
    console.log(choiceNumber);

    if (choiceNumber >= 20) {
        console.log("rock");
        return "rock";
    }
    else if (choiceNumber >= 10) {
        console.log("paper");
        return "paper";
    }
    else {
        console.log("scissors");
        return "scissors";
    }
}

getComputerChoice();