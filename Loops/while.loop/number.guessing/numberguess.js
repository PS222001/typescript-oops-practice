import * as readlineSync from "readline-sync";
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessedCorrectly = false;
console.log("Number Guessing Challenge");
console.log("Guess a number between 1 and 100.");
console.log("You have maximum 7 attempts.");
while (attempts < 7 && !guessedCorrectly) {
    const guess = Number(readlineSync.question("Enter your guess: "));
    attempts++;
    if (guess === secretNumber) {
        console.log("Correct!");
        console.log("Attempts:", attempts);
        guessedCorrectly = true;
    }
    else if (guess > secretNumber) {
        console.log("Too High!");
    }
    else {
        console.log("Too Low!");
    }
}
if (!guessedCorrectly) {
    console.log("Game Over!");
    console.log("You used all 7 attempts.");
    console.log("Secret Number:", secretNumber);
}
