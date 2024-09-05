/* function getUserChoice() {
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
 */
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

    const userChoiceOutput = document.querySelector('.userChoiceImg');
    const cpuChoiceOutput = document.querySelector('.cpuChoiceImg');

    switch(input.user){
        case 1:
            userChoiceOutput.src = 'images/rock.png';
            break;
        
        case 2:
            userChoiceOutput.src = 'images/paper.png';
            break;
             
        case 3:
            userChoiceOutput.src = 'images/scissors.png';
            break;
    }

    switch(input.cpu){
        case 1:
            cpuChoiceOutput.src = 'images/rock.png';
            break;
        
        case 2:
            cpuChoiceOutput.src = 'images/paper.png';
            break;
             
        case 3:
            cpuChoiceOutput.src = 'images/scissors.png';
            break;
    }

    resultOutput.textContent = input.result;
    

    if(input.result == 'draw') {
        resultOutput.style.color = "yellow"
        resultHistoryOutput.textContent += '🤝🏻'
    }
    if(input.result == 'loss') {
        resultOutput.style.color = "red"
        resultHistoryOutput.textContent += '❌'
    }

    if(input.result == 'win') {
        resultOutput.style.color = "green"
        resultHistoryOutput.textContent += '🏅'
    }
}

function checkScores(user, cpu){

    const toggle = document.querySelector(".toggle");
    const winner = document.querySelector(".winner");
    const content = document.querySelector('.content');
    const restart = document.createElement('button');
    restart.textContent = 'Restart';
    
    restart.addEventListener('click', () =>{
        location.reload();
    })
    if(cpu > 4){
        
        toggle.style.display = 'none';
        winner.textContent = "The CPU Won! Too bad..";
        winner.style.margin = '8px';
        content.appendChild(restart);

    }
    if(user > 4){

        toggle.style.display = 'none';
        winner.textContent = "You won!!";
        winner.style.margin = '8px';
        content.appendChild(restart);

    }
}

//

const rockButton = document.querySelector('button#rock');
const paperButton = document.querySelector('button#paper');
const scissorsButton = document.querySelector('button#scissors');

const resultOutput = document.querySelector('.result');
const resultHistoryOutput = document.querySelector('.resultHistory');

let userWins = 0;
let cpuWins = 0;

rockButton.addEventListener('click', () =>{
    let result = startGame(1)
    drawGame(result);

    if(result.result == 'win') {
        userWins += 1;
    }
    else if(result.result == 'loss'){
        cpuWins += 1;
    }

    checkScores(userWins, cpuWins);

})
paperButton.addEventListener('click', () =>{
    let result = startGame(2)
    drawGame(result);

    if(result.result == 'win') {
        userWins += 1;
    }
    else if(result.result == 'loss'){
        cpuWins += 1;
    }

    checkScores(userWins, cpuWins);

})
scissorsButton.addEventListener('click', () =>{
    let result = startGame(3)
    drawGame(result);

    if(result.result == 'win') {
        userWins += 1;
    }
    else if(result.result == 'loss'){
        cpuWins += 1;
    }

    checkScores(userWins, cpuWins);
    
})
