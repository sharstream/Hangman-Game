/* ------ Hangman JS logic -------- *
*       JS Hangman Game             *
*       Author: David Perez         *
*       GT bootcamps                *
* --------------------------------- */
// You don't need to touch these. Skip down to doKeypress()

/* --Hangman Game variables ---------- */

var gameAnswer = "";
var gameShownAnswer = "";
var hangmanState = "";
// array holds the words we are going to choose from.
var words = ['cat', 'tree', 'swing', 'around', 'scientist'];
var guessesLeft = 0;
var wins = 0;
var loss = 0;
var letterGuessed = '';
//Hangman object
var hangman = {
    words: ['cat', 'tree', 'swing', 'around', 'scientist'],
    guessesLeft:0,
    wins:0,
    loss:0,
    letterGuessed:[],
    gameAnswer:'',
    gameShownAnswer:'',
    hangmanState:''
};

/* --Hangman Game rules -------------- *
*                                      *
* ----------------------------------- */

function resetGame() {
    resetUI();
    gameAnswer = chooseWord();
    gameShownAnswer = blanksFromAnswer(gameAnswer);
    hangmanState = 0;
    drawWord(gameShownAnswer);
}

$(document).ready(resetGame);

function win() { alert('You win!'); resetGame(); }

function lose() { alert('Oh no, you lose!'); resetGame(); }

//
/// Start working here!
function doKeypress() {
    var tempChar = $('#letter-input').val().toLowerCase();
    var tempString = "";
    $('#letter-input').val("");
}

// You shouldn't have to touch this!
$('#letter-input').keypress(doKeypress);

document.onload(function name(params) {
    var userGuess = document.onkeyup(function (event) {
        return event.key;
        console.log('Event Key pressed: ' + event.key);
    });

    //write a regex to validate 
    document.getElementById("word_underscore").innerHTML = "";
});
    
/* --Hangman game string manipulation--------- *
*                                              *
* -------------------------------------------- */

function chooseWord() {
    // Write code here
    if (words.length() > -1) {
        return words[Math.floor(Math.random() * combinations.length)].toLowerCase();
    }

    console.log('The random word is: '+words[Math.floor(Math.random() * combinations.length)].toLowerCase());
}

//return (userGuess === computerGuess) ? userGuess : computerGuess;
function blanksFromAnswer(answerWord) {

    var result = ""; // This is the variable we want to use

    // Write a loop here to concatanate a '_' to result for
    // every letter in answerWord.

    for (i in answerWord) {
        result = "_" + result;
    }

    console.log('The answer word is: '+result);

    return result.toLowerCase();
}

//replacing strings modules

function alterAt(n, c, originalString) {
    return originalString.substr(0, n) + c + originalString.substr(n + 1, originalString.length);
}
function guessLetter(letter, shown, answer) {
    var checkIndex = 0;

    checkIndex = answer.indexOf(letter);
    while (checkIndex >= 0) {
        shown = alterAt(checkIndex, letter, shown);
        checkIndex = answer.indexOf(letter, checkIndex + 1);
    }
    return shown;
}

/* --UI reset event and listener-------- *
*                                        *
* -------------------------------------- */

function drawHead() {
    $('.draw-area').append($('<div/>').addClass("body-part head"));
}
function drawTorso() {
    $('.draw-area').append(
        $('<div/>').addClass("body-part armbox").append(
            $('<div/>').addClass("body-part torso")));
    $('.draw-area').append(
        $('<div/>').addClass("body-part legbox").append(
            $('<div/>').addClass("body-part pelvis")));
}
function drawLeftArm() {
    $('.armbox').prepend($('<div/>').addClass("body-part leftarm"));
}
function drawRightArm() {
    $('.armbox').prepend($('<div/>').addClass("body-part rightarm"));
}
function drawLeftLeg() {
    $('.legbox').prepend($('<div/>').addClass("body-part leftleg"));
}
function drawRightLeg() {
    $('.legbox').prepend($('<div/>').addClass("body-part rightleg"));
}
var drawSequence = [drawHead, drawTorso, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg];
function wrongLetter(letter) {
    $('#wrong-letters').append(
        $('<span/>').addClass('guessed-letter').text(letter));
}
function resetUI() {
    $('.body-part').remove();
    $('.guessed-letter').remove();
    $('.shown-letter').remove();
}
function drawWord(answer) {
    for (i in answer) {
        $('.word-display').append(
            $('<span/>').addClass('shown-letter').html('&nbsp;'));
    }
}
function updateWord(answer) {
    $k = $('.shown-letter:first');
    for (i in answer) {
        if (answer.charAt(i) != '_') {
            $k.text(answer.charAt(i));
        } else {
            $k.html('&nbsp;');
        }
        $k = $k.next();
    }
}