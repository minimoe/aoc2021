function solve(stringInput) {
    var input = stringInput.split("\n").map(x => Array.from(x).map(y => parseInt(y)));

    for(var i = 0; i < input[0].length; i++) {
        var sum = 0;
        for(var j = 0; j < input.length; j++) {
            sum += input[j][i] == 0 ? -1 : 1;
        }

        input = input.filter(x => x[i] == (sum >= 0 ? 1 : 0));

        if(input.length == 1) break;
    }

    var oxygen = parseInt(input[0].join(""), 2);

    input = stringInput.split("\n").map(x => Array.from(x).map(y => parseInt(y)));
    for(var i = 0; i < input[0].length; i++) {
        var sum = 0;
        for(var j = 0; j < input.length; j++) {
            sum += input[j][i] == 0 ? -1 : 1;
        }

        input = input.filter(x => x[i] == (sum >= 0 ? 0 : 1));

        if(input.length == 1) break;
    }
    
    var co2scrubber = parseInt(input[0].join(""), 2);

    return oxygen * co2scrubber;
}