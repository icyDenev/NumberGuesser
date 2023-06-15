let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.round(Math.random() * 9);

const compareGuesses = (human, computer, secret) => {
    if (Math.abs(human - secret) <= Math.abs(computer - secret)) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (winner) => {
    if (winner === 'human') {
        ++humanScore;
    } else {
        ++computerScore;
    }
};

const advanceRound = () => ++currentRoundNumber;

let randomNum = generateTarget(), computerNum = generateTarget();

// console.log(randomNum);
// console.log(computerNum);
// console.log(compareGuesses(5, computerNum, randomNum));
// updateScore(compareGuesses(5, computerNum, randomNum) ? 'human' : 'computer');
// advanceRound();
// console.log (`Human: ${humanScore} | Computer: ${computerScore} | Round: ${currentRoundNumber - 1}`);