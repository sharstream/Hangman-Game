/* ------ Hangman JS logic -------- *
*       JS Hangman Game             *
*       Author: David Perez         *
*       GT bootcamps                *
* --------------------------------- */
// You don't need to touch these. Skip down to doKeypress()

/* --Hangman Game variables ---------- */
//regex expression to avoid any symbols or numbers
var regex = /^[a-zA-Z\s]+$/;
var colors = ["red","blue","green"];
//Hangman object
var hangman = {
    words: ['cat', 'tree', 'swing', 'around', 'scientist'],
    guessesLeft:0,
    wins:0,
    missed:0,   
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
    hangman.gameAnswer = chooseWord();
    hangman.gameShownAnswer = blanksFromAnswer(hangman.gameAnswer);
    hangman.hangmanState = 0;
    drawWord(hangman.gameShownAnswer);
}

$(document).ready();

function win() { alert('You win!'); resetGame(); }

function lose() { alert('Oh no, you lose!'); resetGame(); }

function smoothTrans() {

    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    //set initial body color
    $('.word-background-color-change').css('background', randomColor);
    setTimeout(function(){
        smoothTrans();
    }, 1000);
};

console.log(smoothTrans());

// $(document).ready(function () {
//     var audioElement = document.createElement('audio');
//     audioElement.setAttribute('src', 'assets/sounds/captainplanet24.mp3');

//     audioElement.addEventListener('ended', function () {
//         this.play();
//     }, false);

//     audioElement.addEventListener("canplay", function () {
//         $("#length").text("Duration:" + audioElement.duration + " seconds");
//         $("#source").text("Source:" + audioElement.src);
//         $("#status").text("Status: Ready to play").css("color", "green");
//     });

//     audioElement.addEventListener("timeupdate", function () {
//         $("#currentTime").text("Current second:" + audioElement.currentTime);
//     });

//     $('#play').click(function () {
//         audioElement.play();
//         $("#status").text("Status: Playing");
//     });

//     $('#pause').click(function () {
//         audioElement.pause();
//         $("#status").text("Status: Paused");
//     });
// });

function doKeypress() {
    var tempChar = $('#letter-input').val().toLowerCase();
    var tempString = "";
    $('#letter-input').val("");
    
    // Write here!
    if (regex.test(tempChar)) {
    // if(tempChar.match(regex)) {
        
        tempString = guessLetter(tempChar, hangman.gameShownAnswer, hangman.gameAnswer);
        if (tempString != hangman.gameShownAnswer) {
            updateWord(tempString);
            hangman.gameShownAnswer = tempString;
            // Gets Link for Theme Song
            // $("#stream").('stream', function () {
            //     $("#stream").html("Play");
            // });
            if (hangman.gameShownAnswer === hangman.gameAnswer) {
                win();
            }
        } else {
            wrongLetter(tempChar);
            drawSequence[hangman.hangmanState++]();
            if (hangman.hangmanState === drawSequence.length) {
                lose();
            }
        }
    }
    else{
        alert('Is not a letter: '+tempChar);
    }
}
$('#letter-input').keyup(doKeypress);
    
/* --Hangman game string manipulation--------- *
*                                              *
* -------------------------------------------- */

function chooseWord() {
    // Write code here
    if (hangman.words.length > -1) {
        return hangman.words[Math.floor(Math.random() * hangman.words.length)];
    }

    console.log('The random word is: ' + hangman.words[Math.floor(Math.random() * hangman.words.length)]);
}

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
//originalString source string
//n position that the letter should be replaced
//c character to insert.

function alterAt(n, c, originalString) {
    return originalString.substr(0, n) + c + originalString.substr(n + 1, originalString.length);
}
function guessLetter(letter, shown, answer) {
    var checkIndex = 0;

    checkIndex = answer.indexOf(letter);
    console.log(answer.indexOf(letter));
    if (regex.test(letter)) {
        while (checkIndex >= 0) {

        // var n = checkIndex;
        // for (var index = checkIndex; index < answer.length; index++) {
        //     shown = answer.substr(0, index) + letter + answer.substr(letter, index++);
        //     checkIndex = answer.indexOf(letter, index++);
        // }
        
            shown = alterAt(checkIndex, letter, shown);
            console.log(answer.indexOf(letter, checkIndex + 1));
            checkIndex = answer.indexOf(letter, checkIndex + 1);
        }
    }
    return shown;
}

/* ------ UI browser interactions ------ *
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