Array.prototype.sum = function() { return this.reduce((p, o) => p + o, 0); }
input.reduce(
  (p, o) => {
      if(p[0].length < 3){
          p[0].push(o);
          return p;
      }
      if((o + p[0].slice(1).sum()) > (p[0].sum()))
      {
        return [p[0].slice(1).concat(o), p[1]+1];
      }
      return [p[0].slice(1).concat(o), p[1]];
  },
  [[], 0]
)[1];