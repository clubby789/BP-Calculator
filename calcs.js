const moneyPerLevel = [5*4000, 7*4000, 9*4000, 10*4000, 13*4000, 20*4000];

// Calculates the bps until you reach a certain level
bpsUntilLevel = (current, goal) => {
	let total = 0;
	for (let i = current; i < goal; i++) {
		total += bpsToNextLevel(i);
	}
	return total;
}

// Calculates the bps until the next level
bpsToNextLevel = current => {
	let levelGroup = Math.floor(current/10);
	return moneyPerLevel[levelGroup];
}
