for (let i = 1; i <= 100; i++ ) {
	let out = "";
	if (i % 3 == 0) out += "Fizz";
	if (i % 5 == 0) out += "Buzz";
	if (i % 7 == 0) out += "Bang";
	if (i % 11 == 0) out = "Bong";

	if (out) console.log(out);
	else console.log(i);
}
