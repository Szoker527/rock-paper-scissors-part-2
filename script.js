const buttons = document.querySelectorAll("button");
const display_choice = document.querySelector(".display_choice");
const comp_choice = document.querySelector(".comp_choice");
const score = document.querySelector(".score");
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
let roundScore = 0;



function randomNumber() {
    return Math.floor((Math.random() * 3) + 1);
}



function computerSelection() {
let random = randomNumber();
    if(random === 1) {
        return "rock"
    }
    else if (random === 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playerSelection() {
    let userChoice = prompt("What's your weapon?","ROCK? PAPER? SCISSORS?").toLowerCase();

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    }
    else {
        alert("Wrong choice, select again!");
        return playerSelection();
    }
}



function playRound(player, computer) {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }
    if(player === computer) {
        display_choice.textContent = `Computer Selected: ${computer.toUpperCase()}`;
        comp_choice.textContent = "This round is draw!";
        return "Draw!"
    }
    else if(player === "rock" && computer === "scissors" || 
    player === "paper" && computer === "rock" ||
    player === "scissors" && computer === "paper") {
        display_choice.textContent = `Computer Selected: ${computer.toUpperCase()}`;
        comp_choice.textContent = "You win this round!"; 
        return "You Win!"
    }
    else if(player === "rock" && computer === "paper" || 
    player === "paper" && computer === "scissors" ||
    player === "scissors" && computer === "rock") {
        display_choice.textContent = `Computer Selected: ${computer.toUpperCase()}`;
        comp_choice.textContent = "You lost this round!"
        return "You Lose!"
    }
}

function showScore() {
    score.textContent = `
    Round: ${roundScore}
    Player: ${playerScore}  
    Computer: ${computerScore}
    Draw: ${drawScore}`
}

function finalResult() {
    if (playerScore === computerScore) {
        comp_choice.textContent = "DRAW!"
    }
    else if(playerScore > computerScore) {
        comp_choice.textContent = "YOU WON!"
    }
    else {
        comp_choice.textContent = "YOU LOST!"
    }
}


function keepScore(score) {
    if (score === "Draw!") {
        drawScore++;
        roundScore++;
        showScore();
    }
    else if (score === "You Win!") {
        roundScore++;
        playerScore++;
        showScore();
    }
    else if (score === "You Lose!") {
        roundScore++;
        computerScore++;
        showScore();
    }
    if (playerScore === 5 || computerScore === 5) {
        finalResult()
    }
    //alert(`round score:${roundScore}` ` ` `player score:${playerScore}` ` ` `computer score:${computerScore}`)
}



buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        keepScore(playRound(button.className, computerSelection()));
    });
  });