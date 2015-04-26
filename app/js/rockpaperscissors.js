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
    return move || getInput();
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

function getComputerMove(move) {
    return move || randomPlay();
}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')) {
    winner = 'player';
    } else if ((computerMove === 'rock' && playerMove === 'scissors') || (computerMove === 'scissors' && playerMove === 'paper') || (computerMove === 'paper' && playerMove === 'rock')) {
    winner = 'computer';
    }
    return winner;
}
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
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
    console.log("The score is now " + "Player " + playerWins + " to " + "Computer " + computerWins + "\n");
}
    if (playerWins === 5)
            console.log("Oh Yeah! Humanity wins!");
    else if (computerWins === 5)
            console.log("Oh no! Skynet Computer wins!");
    return [playerWins, computerWins];
}
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

playToFive();