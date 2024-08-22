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
        return 1;
    }
    else if(choice < 0.66){
        return 2;
    }
    else {
        return 3;
    }
}

function numberToWords(num) {
    switch(num){

        case 1:
            return("rock");
            break;
        
        case 2:
            return("paper");
            break;

        case 3:
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

    let wins = 0;
    let loses = 0;
    let draw = 0;

    if(wantToPlay == true) {
        for(let i = 0; i < 5; i++) {
            let userChoice = getUserChoice();
            let cpuChoice = getComputerChoice();
  

            if(userChoice == cpuChoice){
                console.log("It's a draw! both of you chose " + numberToWords(cpuChoice));
                draw += 1
            }

            else if(userChoice - cpuChoice == 1 || userChoice - cpuChoice == -2){
                console.log("You won! the computer chose " + numberToWords(cpuChoice));
                wins += 1;
            }
            else {
                console.log("You lost... the computer chose " + numberToWords(cpuChoice));
                loses += 1;
            }
        }
        console.log("The game has ended! you won " + wins + " times, lost " + loses + " times and there were " + draw + "draws")
    }


}