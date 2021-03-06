var solve = require('../12a');
var assert = require("assert");

describe('Day 12a', () => {
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

    it('should not throw exception', () => {
        var input = `we-NX
        ys-px
        ys-we
        px-end
        yq-NX
        px-NX
        yq-px
        qk-yq
        pr-NX
        wq-EY
        pr-oe
        wq-pr
        ys-end
        start-we
        ys-start
        oe-DW
        EY-oe
        end-oe
        pr-yq
        pr-we
        wq-start
        oe-NX
        yq-EY
        ys-wq
        ys-pr`;
        
        assert.equal(solve(input), 0);
    })
});