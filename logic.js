// Rock papper scissor game
// 

// get the computers choice
let CpuChoice = () => {
    // store 3 choices in an array
    let choices = ["rock", "papper", "scissor"]
    // return a random choice from the array using Math.random
    return choices[Math.floor(Math.random() * 3)];
}

//
//console.log(CpuChoice())

// get the players input
let playerInput = () => {
    // promt input save it in var
    let input = prompt("Enter: ")
    // conver to lowercase
    return input.toLowerCase();
}

//
//console.log(playerInput())

// function that plays the game, takes 2 input
function playGame () {
    let a = CpuChoice();
    let b = playerInput();

    if (a === b) {
        console.log(`It's a Draw! CPU also picked ${a}`);
    } else if (a === "rock" && b === "scissor") {
        console.log(`You lose! ${a} beats ${b}`);
    } else if (a === "rock" && b === "papper") {
        console.log(`You win! ${a} loses to ${b}`);
    } else if (a === "papper" && b == "scissor") {
        console.log(`You Win! ${a} loses to ${b}`);
    } else if (a === "papper" && b == "rock") {
        console.log(`You lose! ${a} beats ${b}`);
    } else if (a === "scissor" && b == "papper") {
        console.log(`You lose! ${a} beats ${b}`);
    } else if (a === "scissor" && b == "rock") {
        console.log(`You Win! ${a} loses to ${b}`);
    } else {
        console.log(`Invalid input! only accepts: rock, papper, scissor`)
    }
}

playGame();