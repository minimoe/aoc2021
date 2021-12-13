
function solve(input) {
    var cleaned = input.split("\n")
        .map(x => x.split(" -> ")
            .map(y => y.split(",")
                .map(z => {
                    var i = parseInt(z);
                    return i;
                })));


    var points = {};
    for(var i = 0; i < cleaned.length; i++) {
        p1 = cleaned[i][0];
        p2 = cleaned[i][1];

        var x = p1[0], y = p1[1];
        for(var j = 0; true; j++) {
            var point = x + "," + y;
            if(!points.hasOwnProperty(point)) {
                points[point] = 0;
            }
            points[point] += 1;

            if(x == p2[0] && y == p2[1]) {
                break;
            }

            if(p1[0] < p2[0]) {
                x++;
            } else if(p1[0] > p2[0]) {
                x--;
            }

            if(p1[1] < p2[1]) {
                y++;
            } else if(p1[1] > p2[1]) {
                y--;
            }
        }
    }
    return Object.keys(points).filter(x => points[x] >= 2).length;
}

module.exports = solve;