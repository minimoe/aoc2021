function solve(input) {
    var result = input.reduce((p, o) => {
        var parts = o.split(" ");
        if(parts[0][0] == "f") {
            p[0] += parseInt(parts[1]);
            p[1] += parseInt(parts[1]) * p[2];
        } else if (parts[0][0] == "u") {
            p[2] -= parseInt(parts[1]);
        } else if (parts[0][0] == "d") {
            p[2] += parseInt(parts[1]);
        }
        return p;
    }, [0, 0, 0]);

    return result[0] * result[1];
}
