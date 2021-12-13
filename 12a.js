function solve(input) {
    var edges = input.split('\n').map(l => l.trim().split('-'));

    var lookup = edges.reduce((p, o) => {
        if(!p.hasOwnProperty(o[0])) {
            p[o[0]] = [];
        }
        p[o[0]].push(o[1]);

        if(!p.hasOwnProperty(o[1])) {
            p[o[1]] = [];
        }
        p[o[1]].push(o[0]);

        return p;
    }, { });

    var smallCaves = Object.keys(lookup).filter(x => x !== 'start' && x !== 'end' && /^[a-z]+$/.test(x));
    var paths = [];

    function getSubGraphs(vertice, path)
    {
        if(vertice == 'end') {
            if(paths.indexOf(paths) < 0) {
                paths.push(path);
            }

            return;
        }

        if(!lookup.hasOwnProperty(vertice)) {
            return;
        }

        var nextVertices = lookup[vertice]
            .filter(x => x != 'start'
                && !(path.indexOf(x) >= 0 && smallCaves.indexOf(x) >= 0));

        nextVertices.forEach(v => {
                var p = path + "," + v;
                getSubGraphs(v, p);
            });

        return;
    }
    getSubGraphs('start', 'start');

    return paths.length;
}

module.exports = solve;
