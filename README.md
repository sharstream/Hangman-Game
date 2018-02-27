## Welcome to my Hangman Game in JS

**Simple Hangman written in less than 100 lines of JS with random words brought.**

This game has been built in a day of completely boredom after js class. I hope you enjoy.

Needs
--------------
- jQuery 3.3.1
- hangmanLogic javascript file
- style.css file

### Know-How
- Rules of the road
In function chooseWord() create a function that takes the words array and then returns a random element of the array. The returned output should be a string. Make sure to make the random number an integer and use words.length to keep the random number between 0 and the length of the array.
- Blanks for your answer
In the function blanksFromAnswer write a loop that concatenates a '_' to result for every letter in the string answerWord.
- Replacing a Letter
Write the contents of function alterAt() to use a combination of .substr() and concatenation to return a new string with the letter replaced. The position that the letter should be replaced at is the parameter n and the source string is originalString, while parameter c is the character to insert.
- Guess a Letter, Any Letter!
In the function guessLetter() in the code provided use alterAt() to modify the string shown based on the information retrieved by checkLetter.

Next assign checkLetter to the next value of indexOf() using the two argument version. Make sure to increment checkLetter in some fashion, otherwise you will match the same letter over and over again.
- Starting our layout
- Adding some inputs
- Giving some output
- Building the scaffold
- Portrait of a Man
- Show me words!
- UI actions

Usage
--------------
Browse to the folder where you cloned the repository and open the index.html in a browser. And you will be playing the game

Screenshot
--------------
![Screenshot of Random Hangman](https://github.com/sharstream/Hangman-Game/blob/master/assets/images/playHangman.jpg?raw=true)

```markdown
`//Hangman object
var hangman = {
    words: ['cat', 'tree', 'swing', 'around', 'scientist'],
    guessesLeft:0,
    wins:0,
    loss:0,
    letterGuessed:[],
    gameAnswer:'',
    gameShownAnswer:'',
    hangmanState:''
};`

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
