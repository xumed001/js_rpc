//
// ~~~~~~~~~~~~~~~~~~~ Rock papper scissor game ~~~~~~~~~~~~~~~~~
// 

// CPU choices
const choices = ["rock", "papper", "scissor"];
// keeping track of wins
const winners = [];

// USER input
let buttonInput = document.querySelectorAll('.input > *')
console.log(buttonInput)
buttonInput.forEach((element) => {
    element.addEventListener('click', () => {
        if(element.id) {
            console.log(playRound(element.id))
            //console.log(playRound())
        }
    })

})

// get the computers choice
let cpuChoice = () => {
    // return cpu random choice from the array using Math.random
    return choices[Math.floor(Math.random() * choices.length)];
}

// get the players input
// let playerInput = () => {
    
//     // promt input save it in var
//     let input = prompt("Enter: ")
//     // conver to lowercase
//     return input;
// }

// function that plays a round of RPS
// main game logic
function playRound (x) {
    // storing inputs into vars and making it lower case
    let cpu = cpuChoice()
    let player = x
    // for de-bugging
    console.log(`Player throws: ` +player);
    console.log(`CPU throws: ` +cpu);
    // draw returns tie
    if (cpu === player) {
        return 'Tie'
    // player win senario, returns Player value
    } else if (
    (player === "rock" && cpu === "scissor") || 
    (player === "papper" && cpu === "rock") || 
    (player === "scissor" && cpu === "papper"))
    {
        return 'Player'
    // !win = loss, returns CPU value
    } else {
        return 'CPU'
    }
}

//functions that loops the game 3 times and picks the winner
function runGame () {
    // run the game 5 times
    let totalRounds = 0

    while (totalRounds < 5) {
        winners.push(playRound());

        totalRounds++
    }

}

// keeping track of win-loss logic 
// function logScore(round) {
//     //console.log(winners);

//     // counting wins-losses-ties storing it into winners array and counting them
//     let playerWins = winners.filter((item) => item == 'Player').length;
//     let cpuWins = winners.filter((item) => item == 'CPU').length;
//     let ties = winners.filter((item) => item == 'Tie').length;

//     // console logging game
//     console.log("Round: ", round + 1)
//     console.log("Results: ");
//     console.log("> Player Wins: ", playerWins);
//     console.log("> CPU Wins: ", cpuWins);
//     console.log("> Ties: ", ties);
//     console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

//     // 
//     if (round == 4 && playerWins > cpuWins) {
//         console.log(`You Won! ????`)
//     } else if (round == 4 && cpuWins > playerWins) {
//         console.log(`You lose ????`)
//     } else if ( round == 4 && playerWins == cpuWins){
//         console.log(`Looks like its a draw ????`)
//     }
// }

runGame();



