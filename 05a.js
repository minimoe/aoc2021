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
        if(p1[0] == p2[0]) {
            var start = Math.min(p1[1], p2[1]);
            var end = Math.max(p1[1], p2[1]);
            for(var j = start; j <= end; j++) {
                var point = p1[0] + "," + j;
                if(!points.hasOwnProperty(point)) {
                    points[point] = 0;
                }
                points[point] += 1;
            }
        } else if (p1[1] == p2[1]) {
            var start = Math.min(p1[0], p2[0]);
            var end = Math.max(p1[0], p2[0]);
            for(var j = start; j <= end; j++) {
                var point = j + "," + p1[1];
                if(!points.hasOwnProperty(point)) {
                    points[point] = 0;
                }
                points[point] += 1;
            }
        }
    }
    
    // console.log(points);

    return Object.keys(points).filter(x => points[x] >= 2).length;
}