let rules = process.argv.slice(2).map(x => parseInt(x));
const allRules = [3, 5, 7, 11, 13, 17];
if (rules.filter(x => !allRules.includes(x)).length) throw("Invalid CLI argument");
if (!rules.length) rules = allRules;

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question("Enter maximum number: ", (value: string) => {
	readline.close();

	let maxN;
	maxN = parseInt(value);
	if (!maxN && maxN !== 0) console.error("Invalid input");
	else {
		for (let i = 1; i <= maxN; i++ ) {
			let out: string[] = [];
			if (rules.includes(3) && i % 3 == 0) out.push("Fizz");
			if (rules.includes(5) && i % 5 == 0) out.push("Buzz");
			if (rules.includes(7) && i % 7 == 0) out.push("Bang");
			if (rules.includes(11) && i % 11 == 0) out = ["Bong"];
			if (rules.includes(13) && i % 13 == 0) {
				let j = out.findIndex(s => s[0] === "B");
				if (j === -1) j = out.length;
				out.splice(j, 0, "Fezz");
			}
			if (rules.includes(17) && i % 17 == 0) out.reverse();

			if (out.length) console.log(out.join(""));
			else console.log(i);
		}
	}
});
