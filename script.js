const buttons = document.querySelectorAll(".btn");
const user_score = document.querySelector(".user-score");
const pc_score = document.querySelector(".pc-score");
const user_final = document.querySelector(".user-final");
const pc_final = document.querySelector(".pc-final");
const final_score = document.querySelector(".final-text");
const first_screen = document.querySelector("#first-screen");
const second_screen = document.querySelector("#second-screen");
const third_screen = document.querySelector("#third-screen");
const screen_image = document.getElementById("screen-image");
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
    first_screen.classList.add('hidden');
    second_screen.classList.remove('hidden');
    if (playerScore === 5 || computerScore === 5) {
        second_screen.classList.add('hidden');
        third_screen.classList.remove('hidden');
        pc_final.textContent = `${computerScore}`
        user_final.textContent = `${playerScore}`
        return;
    }
    if(player === computer) {
        screen_image.src = "images/todd.png"
        return "Draw!"
    }
    else if(player === "rock" && computer === "scissors" || 
    player === "paper" && computer === "rock" ||
    player === "scissors" && computer === "paper") {
        screen_image.src = "images/win.png"
        return "You Win!"
    }
    else if(player === "rock" && computer === "paper" || 
    player === "paper" && computer === "scissors" ||
    player === "scissors" && computer === "rock") {
        screen_image.src = "images/lost.png"
        return "You Lose!"
    }
}

function showScore() {
    pc_score.textContent = `${computerScore}`
    user_score.textContent = `${playerScore}`
}

function finalResult() {
    if (playerScore === computerScore) {
        final_score.textContent = "DRAW!"
    }
    else if(playerScore > computerScore) {
        final_score.textContent = "Congratz you won!"
    }
    else {
        final_score.textContent = "Sadly you lost!"
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
        keepScore(playRound(button.id, computerSelection()));
    });
  });