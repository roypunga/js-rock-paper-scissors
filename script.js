function getUserChoice() {
    let choice = prompt("Rock, paper or scissors?");

    if(choice == "Rock" || choice == "ROCK" || choice == "rock") {
        return 1;
    }
    else if (choice == "Paper" || choice == "PAPER" || choice == "paper") {
        return 2;
    }
    else if(choice == "Scissors" || choice == "SCISSORS" || choice == "scissors"){
        return 3;
    }

}

function getComputerChoice() {
    let choice = Math.random();

    if(choice < 0.33){
        return 2;
    }
    else if(choice < 0.66){
        return 3;
    }
    else {
        return 1;
    }
}
