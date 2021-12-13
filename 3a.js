function solve(stringInput) {
    var input = stringInput.split("\n").map(x => Array.from(x).map(y => parseInt(y)));

    var gammaArray = input.reduce((p, o) => {
        for(var i = 0; i < p.length; i++) {
            p[i] = o[i] == 0 ? p[i] - 1 : p[i] + 1;
        }
        return p;
    }, Array.from(Array(input[0].length)).map(x => 0)).map(x => x < 0 ? 0 : 1);

    var epsilon = parseInt(gammaArray.map(x => x == 0 ? 1 : 0).join(""), 2)

    var gamma = parseInt(gammaArray.join(""), 2)

    return gamma * epsilon;
}