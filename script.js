//const playerSelection = prompt("What's your weapon?","ROCK? PAPER? SCISSORS?").toLowerCase();
let playerScore = 0;
let computerScore = 0;
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


function playRound(player, computer) {
    console.log(player,computer)
    if(player === computer) {
        alert("Draw!");
        alert(`Player choice: ${player} Computer choice: ${computer}`);
        return "Draw!"
    }
    else if(player === "rock" && computer === "scissors" || 
    player === "paper" && computer === "rock" ||
    player === "scissors" && computer === "paper") {
        alert("You Win!");
        alert(`Player choice: ${player} Computer choice: ${computer}`);
        return "You Win!"
    }
    else if(player === "rock" && computer === "paper" || 
    player === "paper" && computer === "scissors" ||
    player === "scissors" && computer === "rock") {
        alert("You Lost!");
        alert(`Player choice: ${player} Computer choice: ${computer}`);
        return "You Lose!"
    }
}

function showScore() {
    alert(`Round: ${roundScore} Player score: ${playerScore} Computer score: ${computerScore}`)
}

function finalResult() {

}


function keepScore(score) {
    if (score === "Draw!") {
        roundScore++;
        showScore();
    }
    else if (score === "You Win!") {
        roundScore++;
        showScore();
    }
    else if (score === "You Lose!") {
        roundScore++;
        showScore();
    }
    //alert(`round score:${roundScore}` ` ` `player score:${playerScore}` ` ` `computer score:${computerScore}`)
}


function game() {
    for (let i = 0; i < 5; i++) {
       let playerSelection = prompt("What's your weapon?","ROCK? PAPER? SCISSORS?").toLowerCase();
       keepScore(playRound(playerSelection, computerSelection()));
     }
}

game();