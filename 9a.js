function solve(input) {
    let matrix = input.split("\n").map(x => x.trim().split("").map(y => parseInt(y)));
    var lowPoints = [];
    for(var i = 0; i < matrix.length; i++) {

      for(var j = 0; j < matrix[i].length; j++) {
        if(i != 0)
          if(matrix[i][j] >= matrix[i-1][j])
            continue;
        if(i != matrix.length-1)
          if(matrix[i][j] >= matrix[i+1][j])
            continue;
        if(j != 0)
            if(matrix[i][j] >= matrix[i][j-1])
              continue;
        if(j != matrix[i].length-1)
            if(matrix[i][j] >= matrix[i][j+1])
              continue;
        lowPoints.push(matrix[i][j] + 1);
      }
    }

    return lowPoints.reduce((a,b) => a+b, 0);
}

module.exports = solve;
