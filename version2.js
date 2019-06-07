//////////////////////////////////////////////Beginning of Game
//word bank
var wordBank = ["bookkeeper", "madonna", "vatican", 'zebra'];

//win counter
var wins = 0;
console.log(wins);



//this will randomize the choice of word from wordbank and saving it in wordCorrect varaiable
var wordCorrect = wordBank[Math.floor(Math.random() * wordBank.length)];

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
function off() {
    document.getElementById("overlay").style.display = "none";
  }

on();

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

//Finds var guesses equal to the length of the string
var guess = wordCorrect.length
document.getElementById('chancesDiv').textContent = ("Remainder of Guesses:" +guess)
if (guess === 0){
    alert("You Lose, Try Again")
} 


//Empty array to store incorrect guesses
var incorrectGuess = [];
console.log

////////////////////////////////////////////////// Invocation of Game

document.onkeyup = function (e) {

    var userGuess = e.key.toLowerCase();


    //checking wordCorrectArray if userGuess exists within any index. If correct splice into the blank array
    for (i = 0; i < wordCorrectArray.length; i++) {
        if (userGuess === wordCorrectArray[i]) {
    //takes empty array and splices the userGuess at that index and repeats through the loop
            wordArrayChanged.splice(i, 1, userGuess)
    
        } 
    
    }
    //taking an array and displaying it as a string
    var displayWord = wordArrayChanged.join("")
//printing that string to a dom
    document.getElementById('placeH').textContent = displayWord.toUpperCase() 

//displays you win message if the original string matches the new string
if (displayWord == wordCorrect){
    alert("You Win! The answer is " + wordCorrect)
    off();
    wins++
} 

//checks to see if the correct array includes the userGuess returns true or false stores in var n
var n = wordCorrect.includes(userGuess, n);
//for developer reference
//console.log(n)

//if variable 'n' is false then push userGuess to blank array
if (n === false) {
         incorrectGuess.push(userGuess)
        
     }  guess--

console.log(incorrectGuess)
// //taking an array and displaying it as a string
var displayWord2 = incorrectGuess.join(" ")

// //printing that string to a dom
 document.getElementById('placeH2').textContent = displayWord2 












} ////////////end of onkeyup function