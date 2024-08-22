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

function numberToWords(num) {
    switch(num){

        case 2:
            return("rock");
            break;
        
        case 3:
            return("paper");
            break;

        case 1:
            return("scissors");
            break;
        default:
            return(-1)
            break
        
    }
}

function startGame() {
    let wantToPlay = prompt("Welcome! Do you want to play? (y/n)");

    if(wantToPlay == "y" || wantToPlay == 'Y') {
        wantToPlay = true
    }
    else if(wantToPlay == 'n' || wantToPlay == 'N') {
        wantToPlay = false
    }
    else {
        console.log("Only 'y' or 'n'!!!!");
        return 0;
    }

    let wins;
    let loses;

    if(wantToPlay == true) {
        for(let i = 0; i < 5; i++) {
            let userChoice = getUserChoice();
            let cpuChoice = getComputerChoice();
  

            if(userChoice - cpuChoice == 0){
                console.log("You won! the computer chose " + numberToWords(cpuChoice));
                wins += 1;
            }
            else {
                console.log("You lost... the computer chose " + numberToWords(cpuChoice));
                loses += 1;
            }
        }
        console.log("The game has ended! you won " + wins + " times and lost " + loses + " times.")
    }


}