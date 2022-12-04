const fs = require('fs');
const elves = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\n\n');

/**
 * @param  {String[]} elfInventories
 */
function getMaximumCalories(elfInventories) {
	const inventories = elfInventories.map((elf) => {
		const inventory = elf.split('\n').map(Number);
		return inventory.reduce((a, b) => a + b, 0);
	});

	return Math.max(...inventories);
}

/**
 * @param  {String[]} elfInventories
 */
function getThreeHighestCalories(elfInventories) {
	const inventories = elfInventories.map((elf) => {
		const inventory = elf.split('\n').map(Number);
		return inventory.reduce((a, b) => a + b, 0);
	});

	const highestCalories = inventories.sort((a, b) => b - a);
	return highestCalories.slice(0, 3).reduce((a, b) => a + b, 0);
}

console.log(`Most calories on one elf: ${getMaximumCalories(elves)}`);
console.log(`Calories on top three elves: ${getThreeHighestCalories(elves)}`);

