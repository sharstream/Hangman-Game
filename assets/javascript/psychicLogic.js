// Whenever a key is pressed, alert "pressed a button".
// var win, loss, guessLeft
var guesses = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var gameStatus = document.getElementById("statement");

document.onkeyup = function () {
    alert("pressed a button");

    var userGuess = event.key;

    //freeze key only pass r,s,p
    var computerGuess = combinations[Math.floor(Math.random() * combinations.length)];

    // Alerts the key the user pressed (userGuess).
    alert("User guess: " + userGuess);

    // Alerts the Computer's guess.
    alert("Computer guess: " + computerGuess);
    if (combinations.length > -1) {

        //choice.forEach(function(item, index, array) {

        if (userGuess === computerGuess) {
            wins++;
            guessesLeft--;
            console.log('wins: ' + wins);
        } else if (userGuess !== computerGuess) {
            losses++;
            guessesLeft--;
            console.log('losses: ' + losses);
        }
        else {
            guessesLeft--;
        }
        //});
    }

    gameStatus.innerHTML = `
                <p>Wins: ${wins}</p>
                <p>Losses: ${losses}</p>
                <p>Guesses Left: ${guessesLeft}</p>
                <p>losses: ${userGuess}</p>
                `;
};

        //