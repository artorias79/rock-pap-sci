function getComputerChoice() {
	let numGen = Math.floor(Math.random() * 3);
	console.log(numGen);
	if (numGen == 0) {
		return 'rock';
	} else if (numGen == 1) {
		return 'paper';
	} else return 'scissors'
}

console.log(getComputerChoice());