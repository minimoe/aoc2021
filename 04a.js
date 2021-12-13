function solve(input) {
    var parts = input.split("\n\n");
    var numbers = parts.shift().split(",").map(x => parseInt(x));

    var cubes = parts.map(cube => cube.split("\n").map(row => row.trim().replace(/\s+/g, ",").split(",").map(cell => [parseInt(cell), false])));
    console.log(numbers);
    console.log(cubes[0].map(row => row.map(c => c[0]).join(",")).join("\n"));
    for(var nix = 0; nix < numbers.length; nix++) {
        // mark cubes
        for(var cix = 0; cix < cubes.length; cix++) {
            var cube = cubes[cix];
            for(var rix = 0; rix < cube.length; rix++) {
                for(var cellix = 0; cellix < cube[rix].length; cellix++) {
                    if(cube[rix][cellix][0] == numbers[nix])
                        cube[rix][cellix][1] = true;
                }
            }
        }

        // check cubes
        if(nix < 4)
            continue;

        for(var cix = 0; cix < cubes.length; cix++) {
            var cube = cubes[cix];
            var cols = [0,0,0,0,0];
            var rows = [0,0,0,0,0];
            var sum = 0;
            for(var rix = 0; rix < cube.length; rix++) {
                for(var cellix = 0; cellix < cube[rix].length; cellix++) {
                    if(cube[rix][cellix][1] == true) {
                        cols[cellix] += 1;
                        rows[rix] += 1;
                    } else {
                        sum += parseInt(cube[rix][cellix][0]);
                    }

                }
            }
            console.log(`cube ${cix}`, cols, rows);
            if(cols.filter(x => x == 5).length == 1
                || rows.filter(x => x == 5).length == 1) {
                    return [numbers[nix], sum, numbers[nix] * sum];
            }
        }
    }
}