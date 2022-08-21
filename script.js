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
let playerChoice;

// function that plays one round

function playRound(playerSelection, computerSelection) {
	// if statement will exit the program if rock, paper or scissors is not played by the player
	if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
		console.log('That\'s not how you play the game!');
	// going through all options if the player selection is rock	
	} else if (playerSelection == 'rock') {
		document.querySelector('div.versus').textContent = (`${playerSelection} vs ${computerSelection}`);
		if (computerSelection == 'rock') {
			return ('It\'s a draw');
		} else if (computerSelection == 'paper') {
			return 'You lose';
		} else if (computerSelection == 'scissors') {
			return 'You win';
		}
	// going though all options if the player selection is paper
	} else if (playerSelection == 'paper') {
		document.querySelector('div.versus').textContent = (`${playerSelection} vs ${computerSelection}`);
		if (computerSelection == 'rock') {
			return 'You win';
		} else if (computerSelection == 'paper') {
			return 'It\'s a draw';
		} else if (computerSelection == 'scissors') {
			return 'You lose';
		}
	// going though all options if the player selection is scissors
	} else if (playerSelection == 'scissors') {
		document.querySelector('div.versus').textContent = (`${playerSelection} vs ${computerSelection}`);
		if (computerSelection == 'rock') {
			return 'You lose';
		} else if (computerSelection == 'paper') {
			return 'You win';
		} else if (computerSelection == 'scissors') {
			return 'It\'s a draw';
		}
	}
}

let wins = 0;
let losses = 0;
let score;

const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
	button.addEventListener("click", () => {
		document.querySelector('div.round').textContent = playRound(button.classList, getComputerChoice());
		if (document.querySelector('div.round').textContent === 'You lose') {
			losses++;
		} else if (document.querySelector('div.round').textContent === 'You win') wins++;
		console.log(wins, losses);
		document.querySelector('div.scores').textContent = `${wins} - ${losses}`
		if (checkWin() != null) {
			score = checkWin();
			document.querySelector('div.result').textContent = `Result: ${score}`;
		}
	});
});


// determines who won the most and logs the result
function checkWin() {
	if (wins == 5) {
		return 'You got to 5 points and won'
	} else if (losses == 5) {
		return ('The computer got to 5 points and wins')
	} else return;
}