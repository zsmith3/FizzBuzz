for (let i = 1; i <= 1000; i++ ) {
	let out: string[] = [];
	if (i % 3 == 0) out.push("Fizz");
	if (i % 5 == 0) out.push("Buzz");
	if (i % 7 == 0) out.push("Bang");
	if (i % 11 == 0) out = ["Bong"];
	if (i % 13 == 0) {
		let j = out.findIndex(s => s[0] === "B");
		if (j === -1) j = out.length;
		out.splice(j, 0, "Fezz");
	}
	if (i % 17 == 0) out.reverse();

	if (out.length) console.log(out.join(""));
	else console.log(i);
}
