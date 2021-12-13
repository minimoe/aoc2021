function solve(input) {
    var lines = input.split("\n").map(x => x.split('|').map(y => y.trim().split(" ")));
    var out = lines.reduce((p, o) => {
         p += o[1].reduce((r, q) => {
            if(q.length < 5 || q.length == 7) {
                r++;
            }

            return r;
        }, 0)
        return p;
    }, 0);

    return out;
}

module.exports = solve;