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

function startGame(userChoice) {

    let cpuChoice = getComputerChoice();


    if(userChoice == cpuChoice){
        return {
            user: userChoice,
            cpu: cpuChoice,
            result: 'draw',
        }
    }

    else if(userChoice - cpuChoice == 1 || userChoice - cpuChoice == -2){
        return {
            user: userChoice,
            cpu: cpuChoice,
            result: 'win',
        }
    }
    else {
        return {
            user: userChoice,
            cpu: cpuChoice,
            result: 'loss',
        }
    }
}

function drawGame(input){
    cpuChoiceOutput.textContent = numberToWords(input.cpu);
    userChoiceOutput.textContent = numberToWords(input.user);
    resultOutput.textContent = input.result;
}
//

const rockButton = document.querySelector('button#rock');
const paperButton = document.querySelector('button#paper');
const scissorsButton = document.querySelector('button#scissors');

const userChoiceOutput = document.querySelector('.userChoice');
const cpuChoiceOutput = document.querySelector('.cpuChoice');
const resultOutput = document.querySelector('.result')

rockButton.addEventListener('click', () =>{
    let result = startGame(1)
    drawGame(result);
})
paperButton.addEventListener('click', () =>{
    let result = startGame(2)
    drawGame(result);
})
scissorsButton.addEventListener('click', () =>{
    let result = startGame(3)
    drawGame(result);
})
