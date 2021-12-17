function solve(input) {
    var parts = input.split("\n\n");
    var points = parts[0].split('\n').map(x => x.trim().split(',').map(x => parseInt(x)));
    var folds = parts[1].split('\n').map(x => x.replace('fold along ', '').split("="));

    var minX = points.reduce((p, o) => Math.min(p, o[0]), Number.MAX_SAFE_INTEGER);
    var maxX = points.reduce((p, o) => Math.max(p, o[0]), Number.MIN_SAFE_INTEGER);
    var minY = points.reduce((p, o) => Math.min(p, o[1]), Number.MAX_SAFE_INTEGER);
    var maxY = points.reduce((p, o) => Math.max(p, o[1]), Number.MIN_SAFE_INTEGER);
console.log(folds);
    var pages = points.reduce((p, o) =>
    {
        var pageIndex = folds[0][0] == 'x' ?
            (o[0] < folds[0][1] ? 0 : 1):
            (o[1] < folds[0][1] ? 0 : 1);

            p[pageIndex].push(o);
        return p;
    }, [[], []]);
    //console.log(pages);

    pages[1].forEach(point => {

        if(folds[0][0] == 'x') {
            pages[0].push([folds[0][1] - (point[0] - folds[0][1]), point[1]]);
        } else {
            pages[0].push([point[0], folds[0][1] - (point[1] - folds[0][1])]);
        }
        // Ok, if this is the case, we need to figure out the y value modulo fold Y and then negate somehow.
    });

    //console.log(pages);
    return Object.keys(pages[0].reduce((p, o) => { p[o] = true; return p;}, {})).length;
    
}

module.exports = solve;