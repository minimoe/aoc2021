function solve(input) {
	var lines = input.split("\n")
		.map(l => l.split(""));
	var starters = { '{': '}', '[': ']', '<': '>', '(': ')' };
	var enders = { '}': '{', ']': '[', '>': '<', ')': '(' };

	var scores = { ')': 3, ']': 57, '}': 1197, '>': 25137 };

	var errorLines = lines.map(line => {
		let context = [];
		for(let i = 0; i < line.length; i++) {
			
			var currChar = line[i];
			if(context.length == 0 || starters.hasOwnProperty(currChar)) {
				context.push(currChar);
				continue;
			}

			if(enders[currChar] === context[context.length - 1]) {
				context.pop();
				continue;
			}

			// console.log(context.join(""), currChar, scores[currChar]);
			return scores[currChar];
		}

		return 0;
	}).reduce((a, b) => a + b, 0);

	return errorLines;
}
