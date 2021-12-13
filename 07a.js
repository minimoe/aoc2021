function solve(input) {
    var nums = input.split(',').map(n => parseInt(n));
    nums.sort((a,b) => a - b);
    var sum = Number.MAX_SAFE_INTEGER;
    var lowest = 0;
    for(var i = 0; i < nums.length; i++) {
        var currSum = 0;
        var currPos = nums[i];
        for(var j = 0; j < nums.length; j++) {
            var n = nums[j];
            currSum += Math.abs(currPos - n);
        }

        if(sum > currSum)
        {
            sum = currSum;
            lowest = currPos;
        }
    }
    return sum;
}

module.exports = solve;