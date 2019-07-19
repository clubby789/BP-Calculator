var moneyPerLevel = [5*4000, 7 * 4000, 10*4000, 15 * 4000, 20 * 4000, 30 * 4000];

function bpsUntilLevel(current, goal) {
	var total = 0;
	for (var counter = current; counter < goal; counter++) {
		total += bpsToNextLevel(counter);
	}
	return total;
}

function bpsToNextLevel(current) {
	var levelGroup = Math.floor(current/10);
	return moneyPerLevel[levelGroup];
}