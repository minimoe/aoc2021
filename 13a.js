function solve(input) {
    var parts = input.split("\n\n");
    var points = parts[0].split('\n').map(x => x.trim().split(',').map(x => parseInt(x)));
    var folds = parts[1].split('\n').map(x => x.split("=").map(y => y.charAt(y.length-1)));

    var minX = points.reduce((p, o) => Math.min(p, o[0]), Number.MAX_SAFE_INTEGER);
    var maxX = points.reduce((p, o) => Math.max(p, o[0]), Number.MIN_SAFE_INTEGER);
    var minY = points.reduce((p, o) => Math.min(p, o[1]), Number.MAX_SAFE_INTEGER);
    var maxY = points.reduce((p, o) => Math.max(p, o[1]), Number.MIN_SAFE_INTEGER);

    var pages = points.reduce(x => p[(x[0] < folds[0][1] ? 0 : 1)].push(x), [[], []]);
    pages[1].forEeach(x => {

        // Ok, if this is the case, we need to figure out the y value modulo fold Y and then negate somehow.
/*
...#..#..#.
....#......
...........
#..........
...#....#.#
...........
...........
-----------
...........
...........
.#....#.##.
....#......
......#...#
#..........
#.#........
*/

W
        var newPoint = [x[0], x[1]]
        pages[0][]
    })
    
}

module.exports = solve;