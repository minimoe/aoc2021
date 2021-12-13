function solve(input) {
  var lines = input.split("\n").map((x) =>
    x.split("|").map((y) =>
      y
        .trim()
        .split(" ")
        .map((x) =>
          x
            .split("")
            .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
            .join("")
        )
    )
  );

  var out = lines.reduce((p, o) => {
    var nums = o[0].sort((a, b) => a.length - b.length);
    var digits = Array.from(new Array(10));
    var segments = Array.from(new Array(10));
    var stats = nums.reduce((r, q) => {
        if(q.length == 2) {
          digits[1] = q;
        } else if(q.length == 3) {
          digits[7] = q;
        } else if(q.length == 4) {
          digits[4] = q;
        } else if(q.length == 7) {
          digits[8] = q;
        }

        var letters = q.split("");
        letters.forEach(l => {
          if(!r.hasOwnProperty(l)) {
            r[l] = 0;
          }
          r[l] += 1;
        });

        return r;
      }, {});

      // Identify segments for 1.
      digits[1].split("").forEach(d => {
        if(stats[d] == 8) {
          segments[3] = d;
        } else if(stats[d] == 9) {
          segments[6] = d;
        }
      });

      // Identify 7
      digits[7].split("").forEach(d => {
        if(digits[1].indexOf(d) < 0) {
          segments[0] = d;
        }
      });


      // Identify 4
      digits[4].split("").forEach(d => {
        if(digits[1].indexOf(d) < 0) {
          // What segment is it?
          if(stats[d] == 6) {
            segments[1] = d;
          } else if(stats[d] == 7) {
            segments[2] = d;
          }
        }
      });

      // Identify 0, 6, 9 (length = 7)
      nums.filter(x => x.length == 6)
        .forEach(n => {
          if(n.indexOf(segments[2]) < 0) {
            // 0
            digits[0] = n;
          } else if(n.indexOf(segments[3]) < 0) {
            // 6
            digits[6] = n;
          } else {
            // 9
            digits[9] = n;
          }
      });

      // Identify 2, 3, 5 (length = 5)
      nums.filter(x => x.length == 5)
        .forEach(n => {
          if(n.indexOf(segments[3]) < 0) {
            // 5
            digits[5] = n;
          } else if(n.indexOf(segments[6]) < 0) {
            // 2
            digits[2] = n;
          } else {
            // 3
            digits[3] = n;
          }
      });
    var res = parseInt(o[1].map(x => digits.indexOf(x)).join(""));
    // console.log(res);
      p += res;
    // console.log(nums, stats, digits,segments);
    return p;
  }, 0);

  return out;
}

module.exports = solve;
