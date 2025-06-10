// NUMBER GUESSING GAME

const MIN = 1;
const MAX = 100;
const answer = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${MIN} - ${MAX}`);
    guess = Number(guess);

    if(isNaN(guess) || guess < MIN || guess > MAX){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN");
        }
        else if (guess > answer){
            window.alert("TOO HIGH! TRY AGAIN");
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }

    
}