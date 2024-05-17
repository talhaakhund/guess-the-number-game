import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const askQuestion = () => {
    rl.question('Guess the number (1-100): ', (answer) => {
        const guess = parseInt(answer, 10);
        attempts++;

        if (isNaN(guess)) {
            console.log('Please enter a valid number...');
        } else if (guess > randomNumber) {
            console.log('Too high!');
        } else if (guess < randomNumber) {
            console.log('Too low!');
        } else {
            console.log(`Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts.`);
            rl.close();
            return;
        }
        askQuestion();
    });
};

askQuestion();