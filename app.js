// CPU choices
const choices = ["rock", "papper", "scissor"];
// keeping track of wins
const winners = [];

let buttonInput = document.querySelectorAll('button')

function resetGame () {
    // play again
}


// get the computers choice
let cpuChoice = () => {
    // return cpu random choice from the array using Math.random
    return choices[Math.floor(Math.random() * choices.length)];
}


function runGame () {
    // listening to buttons input
    buttonInput.forEach((element) => {
        element.addEventListener('click', () => {
            if(element.id) {
                playRound(element.id) 
            }
        })
    })

    winners.push(playRound());
    console.log(winners)
}

function countRounds () {
    let wins = checkWins()
    if (wins >= 5) {
        return
    }
}


function playRound (x) {
    // storing inputs into vars and making it lower case
    let cpu = cpuChoice()
    let player = x
    // for de-bugging
    console.log(`Player throws: ` +player)
    console.log(`CPU throws: ` +cpu)

    // dont start without player input
    if (player == undefined) {
        return
    }

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

function checkWins () {
    let playerWins = winners.filter((item) => item == 'Player').length
    let cpuWins = winners.filter((item) => item == 'CPU').length
    return Math.max(playerWins, cpuWins)
}

// let playerWins = winners.filter((item) => item == 'Player').length
// let cpuWins = winners.filter((item) => item == 'CPU').length
// let ties = winners.filter((item) => item == 'Tie').length

// console logging game
// console.log("Round: ", round + 1)
// console.log("Results: ");
// console.log("> Player Wins: ", playerWins);
// console.log("> CPU Wins: ", cpuWins);
// console.log("> Ties: ", ties);
// console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

// // 
// if (round == 4 && playerWins > cpuWins) {
//     console.log(`You Won! 🥳`)
// } else if (round == 4 && cpuWins > playerWins) {
//     console.log(`You lose 😥`)
// } else if ( round == 4 && playerWins == cpuWins){
//     console.log(`Looks like its a draw 🤖`)
// }



