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
            paths.push(path);
            return;
        }

        if(!lookup.hasOwnProperty(vertice)) {
            return;
        }

        var nextVertices = lookup[vertice]
            .filter(x => {
                if(x == 'start') {
                    return false;
                }
                
                // Check if it's a small cave.
                if(smallCaves.indexOf(x) >= 0) {
                    // Check if it's in the current path.
                    if(path.indexOf(x) >= 0) {
                        var currentPathSmallCaves = path.filter(sc => smallCaves.indexOf(sc) >= 0);
                        var hasDoubleSmallCaveVisit = Object.values(currentPathSmallCaves.reduce((p, o) => {
                            if(!p.hasOwnProperty(o)) {
                                p[o] = 0;
                            }

                            p[o]++;

                            return p;
                        }, {})).filter(y => y > 1).length > 0;

                        if(!hasDoubleSmallCaveVisit) {
                            return true;
                        }

                        return false;
                    }
                }
                
                return true;
            });
            
        nextVertices.forEach(v => {
                var p = path.concat(v);
                getSubGraphs(v, p);
            });

        return;
    }
    getSubGraphs('start', ['start']);

    return paths.length;
}

module.exports = solve;
