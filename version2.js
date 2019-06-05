//////////////////////////////////////////////Beginning of Game
//word bank
var wordBank = ["bookkeeper", "madonna", "vatican", 'zebra'];

//this will randomize the choice of word from wordbank and saving it in wordCorrect varaiable
var wordCorrect = wordBank[Math.floor(Math.random() * wordBank.length)];

//for developer reference
console.log(wordCorrect)

//saving wordcorrect as an array as a variable in word correct array
var wordCorrectArray = wordCorrect.split("")

//for developer reference of the split array
console.log(wordCorrectArray)

//where the word the user is guessing will be saved and modified
var wordArrayChanged = [];

for (i = 0; i < wordCorrectArray.length; i++) {
    wordArrayChanged.push("_ ")
}
//Changes array back into a string and gits rid of commas between
var wordArrayChangedString = wordArrayChanged.join("")


//prints array to the DOM
document.getElementById("placeH").innerHTML = wordArrayChangedString



////////////////////////////////////////////////// Invocation of Game

document.onkeyup = function (e) {

    var userGuess = e.key;


    //checking wordCorrectArray if userGuess exists within any index. If correct splice into the blank array
    for (i = 0; i < wordCorrectArray.length; i++) {
        if (userGuess === wordCorrectArray[i]) {

            wordArrayChanged.splice(i, 1, userGuess)
        }
    }
    //taking an array and displaying it as a string
    var displayWord = wordArrayChanged.join("")
//printing that string to a dom
    document.getElementById('placeH').textContent = displayWord




























} ////////////end of onkeyup function