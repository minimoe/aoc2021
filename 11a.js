function solve(input) {
    const matrix = input.split('\n').map(l => l.trim().split('').map(n => parseInt(n)));

    let flashCounter = 0;
    for(let step = 0; step < 3; step++) {

        for(let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] > 0) {
                    matrix[i][j] += 1;
                }
            }
        }

        let foundFlash = 1;
        while(foundFlash > 0) {
            foundFlash = 0;
        console.log(matrix.map(x => x.join("")).join("\n"));
            
            for(let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    if(matrix[i][j] <= 9) {
                        continue;
                    }

                    // Are we along the top edge?
                    if(i != 0) {
                        if(j != 0) {
                            foundFlash = increaseNeighbor(matrix, i-1, j-1, foundFlash);
                        }
                        
                        if(j != matrix[i].length - 1) {
                            foundFlash = increaseNeighbor(matrix, i-1, j+1, foundFlash);
                        }

                        foundFlash = increaseNeighbor(matrix, i-1, j, foundFlash);
                    }

                    // Are we along the bottom edge?
                    if(i != matrix.length - 1) {
                        if(j != 0) {
                            foundFlash = increaseNeighbor(matrix, i+1, j-1, foundFlash);
                        }

                        if(j != matrix[i].length - 1) {
                            foundFlash = increaseNeighbor(matrix, i+1, j+1, foundFlash);
                        }

                        foundFlash = increaseNeighbor(matrix, i+1, j, foundFlash);
                    }

                    // Are we along the left edge?
                    if(j != 0) {
                        foundFlash = increaseNeighbor(matrix, i, j-1, foundFlash);
                    }

                    // Are we along the right edge?
                    if(j != matrix[i].length - 1) {
                        foundFlash = increaseNeighbor(matrix, i, j+1, foundFlash);
                    }

                    matrix[i][j] = 0;
                }
            }

            flashCounter += foundFlash;
        }

        for(let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] > 9) {
                    matrix[i][j] = 0;
                }
            }
        }
        console.log("Return!");

    }
    return flashCounter;
}

function increaseNeighbor(matrix, m, n, foundFlash) {
    if(matrix[m][n] > 0) {
        matrix[m][n] += 1;
    }

    return matrix[m][n] >= 9 ? foundFlash + 1 : foundFlash;
}

module.exports = solve;