//
// displays game status; feedback
const displayPlayer = document.querySelector('.displayPlayer')
const displayCpu = document.querySelector('.displayCpu')
const displayWins = document.querySelector('.displayWins')
const displayLoss = document.querySelector('.displayLoss')
const displayDraws = document.querySelector('.displayDraws')
const lastResult = document.querySelector('.lastResult')

// player input 
let buttonInput = document.querySelectorAll('.input > *')

// CPU choices
const choices = ["rock", "papper", "scissor"];
// keeping track of wins
let winners = []
// counting rounds for Best of 5
let round = 0

let tieCount = 0
let winCount = 0
let lossCount = 0

let resetButton

// get the computers choice
let cpuChoice = () => {
    // return cpu random choice from the array using Math.random
    return choices[Math.floor(Math.random() * choices.length)];
}

// Main game logic
function runGame () {
    buttonInput.forEach((element) => {
        element.addEventListener('click', () => {
            let userInput = (element.id)
            // plays the round with users input
            winners.push(playRound(userInput))
            console.log(winners)
            round++
            console.log(round)
            checkWins(round)
        })
    })
}

// singular event within the game
function playRound (x) {
    // storing inputs into vars and making it lower case
    let cpu = cpuChoice()
    let player = x
    // for de-bugging
    console.log(`Player throws: ` +player)
    console.log(`CPU throws: ` +cpu)
    
    displayPlayer.textContent = `You picked: ${player}`
    displayCpu.textContent = `CPU picked: ${cpu}`
    
    // dont start without player input
    if (player == undefined) {
        return
    }

    // draw returns tie
    if (cpu === player) {
        displayDraws.textContent = `T : ${tieCount+= 1}`
        return 'Tie'
    // player win senario, returns Player value
    } else if (
    (player === "rock" && cpu === "scissor") || 
    (player === "papper" && cpu === "rock") || 
    (player === "scissor" && cpu === "papper"))
    {   
        displayWins.textContent = `W : ${winCount+= 1}`
        return 'Player'
    // !win = loss, returns CPU value
    } else {
        displayLoss.textContent = `L : ${lossCount+= 1}`
        return 'CPU'
    }    
    
}

function checkWins (round) {
    let playerWins = winners.filter((item) => item == 'Player').length
    let cpuWins = winners.filter((item) => item == 'CPU').length
    let ties = winners.filter((item) => item == 'Tie').length

    // 
    if (round == 5 && playerWins > cpuWins) {
        lastResult.textContent = `You Won! 🥳`
        setGameOver()
    } else if (round == 5 && cpuWins > playerWins) {
        lastResult.textContent = `You lost 😥`
        setGameOver()
    } else if ( round == 5 && playerWins == cpuWins){
        lastResult.textContent = `Looks like its a draw 🤖`
        setGameOver()
    }

}

function setGameOver() {
    buttonInput.forEach(element => {
        element.disabled = true
    })

    resetButton = document.createElement('button')
    resetButton.textContent = 'Start a new game'
    document.body.append(resetButton)
    resetButton.addEventListener('click', resetGame)    
}

function resetGame() {
    //
    round = 0
    tieCount = 0
    winCount = 0
    lossCount = 0

    winners = []
    
    // reseting display information 
    const resetResults = document.querySelectorAll('.results p')
    for (const resetResult of resetResults) {
        resetResult.textContent = ''
    }

    // 
    resetButton.parentNode.removeChild(resetButton)

    buttonInput.forEach(element => {
        element.disabled = false
    })
    
    displayPlayer.textContent = 'Pick a choice to begin !'
}


runGame()