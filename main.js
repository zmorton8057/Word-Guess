var library = ["bookkeeper", "madonna", "vatican", 'zebra'];
//Randomly Selects a string from library
var randomLibrary
var currentGuessWord = [];
var randomLibrarySplit
var guessCounter = 10;
//Logs user input into a function
var initGame = function () {
    currentGuessWord = []
    var randomNumber = Math.floor(Math.random() * library.length);
    randomLibrary = library[randomNumber];
    //Splits RandomLibrary String into an array with each letter as a string
    randomLibrarySplit = randomLibrary.split("");
    for (var i = 0; i < randomLibrarySplit.length; i++) {
        currentGuessWord.push('_')
        console.log(currentGuessWord)
        console.log(randomLibrarySplit)
        console.log(randomLibrary)
    }
    drawGameState()
    if (randomLibrarySplit.includes(userGuess)) {
    for (var j = 0; j < randomLibrarySplit.length; j++) {
        if(userGuess===randomLibrarySplit[j]){
            currentGuessWord.splice(j, 1, userGuess)
        }
            
        }
    }
}


//Joins blank array to print in the DOM
var drawGameState = function () {
    document.getElementById('placeH').textContent = currentGuessWord.join(' ')
    document.getElementById('guess').textContent = guessCounter
}
//Press Space Bar to Initialize game    
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        initGame()//your code
    }
}
//Log User Key
document.onkeyup = function (e) {
    var userGuess = e.key;
    console.log(userGuess)

 

 
 
//check to see if user guessed correct letter
//which checks against an array
//if element at that index is equal to the userGuess return userGuess to that index
if (randomLibrarySplit.includes(userGuess)) {
    for (var j = 0; j < randomLibrarySplit.length; j++) {
        if(userGuess===randomLibrarySplit[j]){
            currentGuessWord.splice(j, 1, userGuess)
        } guessCounter--
            
        }
    }
}


