for (let i = 1; i <= 200; i++ ) {
	let out = "";
	if (i % 3 == 0) out += "Fizz";
	if (i % 5 == 0) out += "Buzz";
	if (i % 7 == 0) out += "Bang";
	if (i % 11 == 0) out = "Bong";

	if (i % 13 == 0) {
		let j = out.indexOf("B");
		if (j === -1) j = out.length;
		out = out.slice(0, j) + "Fezz" + out.slice(j);
	}

	if (out) console.log(out);
	else console.log(i);
}
