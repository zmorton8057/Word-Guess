var library = ["bookkeeper", "madonna", "vatican", 'zebra'];
//Randomly Selects a string from library
var randomLibrary
var currentGuessWord = [];
var randomLibrarySplit
//Logs user input into a function
var initGame = function () {
    currentGuessWord = []
    var randomNumber = Math.floor(Math.random() * library.length);
    randomLibrary = library[randomNumber];
    //Splits RandomLibrary String into an array with each letter as a string
    randomLibrarySplit = randomLibrary.split("");
    for (var i = 0; i < randomLibrarySplit.length; i++) {
        currentGuessWord.push('_')
    }
    drawGameState()
}
var drawGameState = function () {
    document.getElementById('placeH').textContent = currentGuessWord.join(' ')
}
document.onkeyup = function (e) {
    var userGuess = e.key;
    console.log(userGuess)

initGame()
//check to see if user guessed correct letter
//which checks against an array
//if element at that index is equal to the userGuess return userGuess to that index
if (randomLibrarySplit.includes(userGuess)) {
    for (var j = 0; j < library.length; j++) {
        if (userGuess === randomLibrarySplit[j]){
            currentGuessWord.replaceChild(j, i)
        }
    }
}
}

console.log(library);
console.log(currentGuessWord);
console.log(randomLibrary);
console.log(randomLibrarySplit);
