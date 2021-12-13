input.reduce(
  (p, o) => {
    if (o > p[0]) {
      return [o, p[1] + 1];
    }
    return [o, p[1]];
  },
  [Number.MAX_VALUE, 0]
)[1];
