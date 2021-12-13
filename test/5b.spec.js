var solve = require("../5b");

var assert = require('assert');
describe("Day 5.2", function() {
    it('should count to 12', function() {
        var input = `0,9 -> 5,9
        8,0 -> 0,8
        9,4 -> 3,4
        2,2 -> 2,1
        7,0 -> 7,4
        6,4 -> 2,0
        0,9 -> 2,9
        3,4 -> 1,4
        0,0 -> 8,8
        5,5 -> 8,2`;
        assert.equal(solve(input), 12);
    })
})