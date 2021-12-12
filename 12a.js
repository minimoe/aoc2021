function solve(input) {
    var vertices = input.split('\n').map(l => l.trim().split('-'));
    var lookup = vertices.reduce((p, o) => {
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

    
    console.log(lookup);

    return 0;
}

module.exports = solve;