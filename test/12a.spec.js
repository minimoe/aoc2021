var solve = require('../12a');
var assert = require("assert");

describe('Day 12', () => {
    it('should be 10 paths', () => {
            var input = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;
            assert.equal(solve(input), 10);    
        }
    );

    it('should be 19 paths', () => {
        var input = `dc-end
        HN-start
        start-kj
        dc-start
        dc-HN
        LN-dc
        HN-end
        kj-sa
        kj-HN
        kj-dc`;

        assert.equal(solve(input), 19); 
    });

    it('should be 226 paths', () => {
        var input = `fs-end
        he-DX
        fs-he
        start-DX
        pj-DX
        end-zg
        zg-sl
        zg-pj
        pj-he
        RW-he
        fs-DX
        pj-RW
        zg-RW
        start-pj
        he-WI
        zg-he
        pj-fs
        start-RW`;

        assert.equal(solve(input), 226); 
    })
});