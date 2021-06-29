import * as readline from 'readline';


function validateRules(cliArgs: number[], validRules: number[]) {
	if (cliArgs.some(x => !validRules.includes(x))) throw("Invalid CLI argument");
	if (cliArgs.length) return cliArgs;
	else return validRules;
}

const cliArgs = process.argv.slice(2).map(x => parseInt(x));
const validRules = [3, 5, 7, 11, 13, 17, 19, 23];
const userRules = validateRules(cliArgs, validRules);


function fizzBuzz(num: number, rules: number[]): string {
	let out: string[] = [];
	if (rules.includes(3) && num % 3 == 0) out.push("Fizz");
	if (rules.includes(5) && num % 5 == 0) out.push("Buzz");
	if (rules.includes(7) && num % 7 == 0) out.push("Bang");
	if (rules.includes(11) && num % 11 == 0) out = ["Bong"];
	if (rules.includes(13) && num % 13 == 0) {
		let bWordIndex = out.findIndex(word => word[0] === "B");
		if (bWordIndex === -1) bWordIndex = out.length;
		out.splice(bWordIndex, 0, "Fezz");
	}
	if (rules.includes(17) && num % 17 == 0) out.reverse();
	if (rules.includes(19) && num % 19 == 0) {
		for (let i = 0; i < out.length; i++) {
			out[i] = out[i].slice(0, out[i].length - 1);
		}
	}
	if (rules.includes(23) && num % 23 == 0) {
		for (let i = 0; i < out.length; i++) {
			if (out[i][0] === "F") out[i] += "e";
			else out[i] += "o";
		}
	}

	if (out.length) return out.join("");
	else return num.toString();
}


const readLineInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

readLineInterface.question("Enter maximum number: ", value => {
	readLineInterface.close();

	const maxNumber = parseInt(value);
	if (isNaN(maxNumber)) throw("Invalid input");

	for (let i = 1; i <= maxNumber; i++) {
		console.log(fizzBuzz(i, userRules));
	}
});
