const readline = require("readline");

// Setup readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

// Function to prompt the user
const askGuess = () => {
    rl.question("Guess a number between 1 and 10: ", (input) => {
        const guess = parseInt(input);

        // Validate input
        if (isNaN(guess) || guess < 1 || guess > 10) {
            console.log("Invalid input! Please enter a number between 1 and 10.");
            askGuess();
            return;
        }

        attempts++; // Increase attempt count

        // Check the guess
        if (guess === secretNumber) {
            console.log(`🎉 Congratulations! You guessed it right in ${attempts} attempts.`);
            rl.close();
        } else {
            console.log(guess > secretNumber ? "Too high! Try again." : "Too low! Try again.");
            askGuess();
        }
    });
};

// Start the game
console.log("Welcome to the Number Guessing Game!");
askGuess();
