function solve(input) {
    const matrix = input.split('\n').map(l => l.trim().split('').map(n => parseInt(n)));

    let flashCounter = 0;
    for(let step = 0; step < 1000; step++) {
        //console.log("in", matrix.map(x => x.join("")).join("\n"));

        var flashes = [];
        for(let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] += 1;
                if(matrix[i][j] > 9) {
                    flashes.push([i, j]);
                    flashCounter++;
                }
            }
        }

        while(flashes.length > 0) {
            var point = flashes.pop();
            let i = point[0];
            let j = point[1];

            // Are we along the top edge?
            if(i != 0) {
                if(j != 0) {
                    if(increaseNeighbor(matrix, i-1, j-1, flashes)) {
                        flashCounter++;
                    };
                }
                
                if(j != matrix[i].length - 1) {
                    if(increaseNeighbor(matrix, i-1, j+1, flashes)){
                        flashCounter++;
                    }
                }

                if(increaseNeighbor(matrix, i-1, j, flashes)){
                    flashCounter++;
                }
            }

            // Are we along the bottom edge?
            if(i != matrix.length - 1) {
                if(j != 0) {
                    if(increaseNeighbor(matrix, i+1, j-1, flashes)){
                        flashCounter++;
                    }
                }

                if(j != matrix[i].length - 1) {
                    if(increaseNeighbor(matrix, i+1, j+1, flashes)){
                        flashCounter++;
                    }
                }

                if(increaseNeighbor(matrix, i+1, j, flashes)){
                    flashCounter++;
                }
            }

            // Are we along the left edge?
            if(j != 0) {
                if(increaseNeighbor(matrix, i, j-1, flashes)){
                    flashCounter++;
                }
            }

            // Are we along the right edge?
            if(j != matrix[i].length - 1) {
                if(increaseNeighbor(matrix, i, j+1, flashes)){
                    flashCounter++;
                }
            }
        }

        
        for(let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] > 9 || matrix[i][j] < 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        //console.log("Return!");
    }
    
    return flashCounter;
}

function increaseNeighbor(matrix, m, n, points) {
    if(matrix[m][n] < 0 || matrix[m][n] > 9) {
        // Already large, let's reset.
        matrix[m][n] = -1;
        return false;
    }

    matrix[m][n] += 1;
    if(matrix[m][n] > 9) {
        points.push([m, n]);
        return true;
    }
    return false;
}

module.exports = solve;