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
    console.log(player,computer)
    if(player === computer) {
        alert("This round is draw!");
        alert(`Computer Selected: ${computer.toUpperCase()}`);
        return "Draw!"
    }
    else if(player === "rock" && computer === "scissors" || 
    player === "paper" && computer === "rock" ||
    player === "scissors" && computer === "paper") {
        alert("You win this round!");
        alert(`Computer Selected: ${computer.toUpperCase()}`);
        return "You Win!"
    }
    else if(player === "rock" && computer === "paper" || 
    player === "paper" && computer === "scissors" ||
    player === "scissors" && computer === "rock") {
        alert("You lost this round!");
        alert(`Computer Selected: ${computer.toUpperCase()}`);
        return "You Lose!"
    }
}

function showScore() {
    alert(`
    Round: ${roundScore}
    Player score: ${playerScore} 
    Computer score: ${computerScore}`)
}

function finalResult() {
    if (playerScore === computerScore) {
        alert("DRAW!")
    }
    else if(playerScore > computerScore) {
        alert("YOU WON!")
    }
    else {
        alert("YOU LOST!")
    }
}


function keepScore(score) {
    if (score === "Draw!") {
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
    //alert(`round score:${roundScore}` ` ` `player score:${playerScore}` ` ` `computer score:${computerScore}`)
}


function game() {
    for (let i = 0; i < 5; i++) {
       keepScore(playRound(playerSelection(), computerSelection()));
     }
     finalResult()
}

game();