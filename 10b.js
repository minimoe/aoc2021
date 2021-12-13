function solve(input) {
	var lines = input.split("\n")
		.map(l => l.split(""));
	var starters = { '{': '}', '[': ']', '<': '>', '(': ')' };
	var enders = { '}': '{', ']': '[', '>': '<', ')': '(' };

	var scores = { ')': 3, ']': 57, '}': 1197, '>': 25137 };
	var autoCompleteScores = { ')': 1, ']': 2, '}': 3, '>': 4 };

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

			return 0;
		}

		return context.reverse().reduce((p, o) => {
			return p * 5 + autoCompleteScores[starters[o]];
		}, 0);

	}).filter(x => x > 0).sort((a,b) => a - b);
	// console.log(errorLines);
	return errorLines[Math.floor(errorLines.length/2)];
}
