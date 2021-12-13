function solve(input) {
    var nums = input.split(',').map(n => parseInt(n));
    nums.sort((a,b) => a - b);
    var sum = Number.MAX_SAFE_INTEGER;
    var lowest = 0;
    for(var i = nums[0]; i < nums[nums.length - 1]; i++) {
        var currSum = 0;
        var currPos = i;
        for(var j = 0; j < nums.length; j++) {
            var n = nums[j];
            var v = Math.abs(currPos - n);
            currSum += (v * (v + 1) / 2);
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