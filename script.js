// function that generates a random number and returns either rock, paper or scissors depending on the number

function getComputerChoice() {
	let numGen = Math.floor(Math.random() * 3);
	if (numGen == 0) {
		return 'rock';
	} else if (numGen == 1) {
		return 'paper';
	} else return 'scissors'
}

// assigned getComputerChoice to a variable for ease of use
let playerChoice = 'rock';
let computerChoice;

// function that plays one round

function playRound(playerSelection, computerSelection) {
	// if statement will exit the program if rock, paper or scissors is not played by the player
	if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
		return 'That\'s not how you play the game!';
	// going through all options if the player selection is rock	
	} else if (playerSelection == 'rock') {
		console.log(`${playerSelection} vs ${computerSelection}`);
		if (computerSelection == 'rock') {
			return 'It\'s a draw';
		} else if (computerSelection == 'paper') {
			return 'You lose';
		} else if (computerSelection == 'scissors') {
			return 'You win';
		}
	// going though all options if the player selection is paper
	} else if (playerSelection == 'paper') {
		console.log(`${playerSelection} vs ${computerSelection}`);
		if (computerSelection == 'rock') {
			return 'You win';
		} else if (computerSelection == 'paper') {
			return 'It\'s a draw';
		} else if (computerSelection == 'scissors') {
			return 'You lose';
		}
	// going though all options if the player selection is scissors
	} else if (playerSelection == 'scissors') {
		console.log(`${playerSelection} vs ${computerSelection}`);
		if (computerSelection == 'rock') {
			return 'You lose';
		} else if (computerSelection == 'paper') {
			return 'You win';
		} else if (computerSelection == 'scissors') {
			return 'It\'s a draw';
		}
	}
}

function game() {
	// variables to keep track of scores
	let wins = 0;
	let losses = 0;

	for (let i = 0; i < 5; i++) {
		// plays round
		// score will be the string returned by the playRound function
		computerChoice = getComputerChoice();
		let score = playRound(playerChoice, computerChoice);
		console.log(score);
		// if statement to total wins and losses
		if (score === 'You win') {
			++wins;
		} else if (score === 'You lose') {
			++losses;
		} else {
			;
		}
	}
// determines who won the most and logs the result
	if (wins > losses) {
		console.log('You won the best out of 5!')
	} else if (wins < losses) {
		console.log('You lost the best out of 5 to the computer!')
	} else {
		console.log('You and the computer drew the best out of 5!')
	}
}

console.log(game());