function solve(input) {
    var fishes = input.split(",").map(y => parseInt(y));
    fishesOfAge = Array.from(new Array(9)).map(x => 0);
    fishes.forEach(f => fishesOfAge[f]++);

    for(var day = 0; day < 256; day++) {
        var spawn = fishesOfAge[0];
        for(var i = 0; i < fishesOfAge.length-1; i++) {
            fishesOfAge[i] = fishesOfAge[i+1];
        }
        fishesOfAge[6] += spawn;
        fishesOfAge[8] = spawn;
    }

    return fishesOfAge.reduce((a, b) => a+b, 0);
}

module.exports = solve;