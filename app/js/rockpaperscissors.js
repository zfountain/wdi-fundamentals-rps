////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var playerMove;
var computerMove;
var winner;

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if ((playerMove === 'rock') && (computerMove === 'scissors')) {
        winner = 'player';
    } else if ((playerMove === 'scissors') && (computerMove === 'paper')) {
        winner = 'player';

    } else if ((playerMove === 'paper') && (computerMove === 'rock')) {
        winner = 'player';
    } else if ((computerMove === 'rock') && (playerMove === 'scissors')) {
        winner = 'computer';
    } else if ((computerMove === 'scissors') && (playerMove === 'paper')) {
        winner = 'computer';
    } else if ((computerMove === 'paper') && (playerMove === 'rock')) {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    while ((playerWins < 5) && (computerWins < 5)) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);
        
        if (winner === 'player') {
            playerWins += 1;
            console.log("Player chooses " + playerMove + "\n" + "Computer chooses " + computerMove + "\n" + "Human Player has won the round!");
        } else if (winner === 'computer') {
            computerWins += 1;
            console.log("Player chooses " + playerMove + "\n" + "Computer chooses " + computerMove + "\n" + "Skynet Computer has won the round!");
        } else {
            console.log("Player chooses " + playerMove + "\n" + "Computer chooses " + computerMove + "\n" + "It is a tie!");
        }
    console.log("The score is now: " + "Player " + playerWins + " to " + "Computer " + computerWins + "\n");
}
    if (playerWins === 5)
            console.log("Oh Yeah! Humanity wins!");
    else if (computerWins === 5)
            console.log("Oh no! Skynet Computer wins!");
    return [playerWins, computerWins];
}
    playToFive();