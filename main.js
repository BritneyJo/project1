//what I need to do to get the hangman game running:
//set an array with the word(s) that will be guessed
//create an input field and a button to submit a guess from the user
//create a second array where the user input letter will be stored
//compare each input with all of the letters within the string in the array
//if the letter input within the field matches any of the letters in the answer
//then change the blank image with the ___ to the letter to display
//do this maybe with a style/switch?
//when the complete string has been input by the user
//then give an alert or some other indication that the user won

//additional pseudocode for how to compare input to array

// Run a for loop to generate boxes for the game pieces based on the array length of the word chosen
// Within the click function run another for loop that searches the chosen word array for the guesses letter
// If the guesses letter is found-add the class to that tile to display the letter found
// If not found give a sorry try again message for testing

console.log("javascript running & ready to code! :D");

//set an array with the word(s) that will be guessed
// Make an array of words
const wordArray = ["abcdef"];
// Make another array for the selected word broken into just letters
let letterArray = [];
//create an input field and a button to submit a guess from the user
let guesses = [];
//create event listenener for when submit button is clicked-input the letter input
//into the guesses array
//don't need to store the guesses within the array since each letter will be compared indivudually
const button = document.querySelector("button");
const guessLetter = document.querySelector("#letter-guess");

guessLetter.addEventListener("click", evt => {
  evt.preventDefault();
  guesses.pop(guess.value);
  guesses.push(guess.value);
  console.log(guesses);
  checkLetter(letterArray, guesses[0]);
  checkLetter();
});

//create function to compare each letter input to the answer array and see if a letter input is a
//letter contained within the string
function checkLetter(answerKey, guesses) {
  letterArray.forEach(element => {
    if (letterArray == guesses) console.log("match!");
    return true;
  });
}

//create function to pick a word from the word array, then split it into
//a new array with each character separated
function createLetterArray(wordArray, letterArray) {}
