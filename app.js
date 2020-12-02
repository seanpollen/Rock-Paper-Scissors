//variables to store each score
let userScore = 0;
let computerScore = 0;
//by doing this we don't have to type out the references every time (caching the dom)
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convert(choice) {
    switch (choice) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors"
    }
}
function win(user, cpu) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convert(user) + " beats " + convert(cpu) + "! You win!"
    document.getElementById(user).classList.add('green-glow')
    setTimeout(function() { document.getElementById(user).classList.remove('green-glow')}, 1000);
}
function lose(user, cpu) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convert(cpu) + " beats " + convert(user) + "! You lose!"
    document.getElementById(user).classList.add('red-glow')
    setTimeout(function() { document.getElementById(user).classList.remove('red-glow')}, 1000);
}

function draw(user, cpu) {
    result_div.innerHTML = "You both played " + convert(user) + "! It's a draw!"
    document.getElementById(user).classList.add('grey-glow')
    setTimeout(function() { document.getElementById(user).classList.remove('grey-glow')}, 1000);

}

function compare(userChoice, computerChoice) {
    switch (userChoice+computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            console.log("Calling win");
            win(userChoice, computerChoice); //call the win function (the user beat the computer)
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice); //call the lose function (the computer beat the loser)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice); //call the draw function (tie)
            break;
    }
}
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)]; //return a random number between 0-2
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    compare(userChoice, computerChoice);
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();