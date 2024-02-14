function memoize(fn) {
  let memo = {};

  return function (...args) {
    const argString = JSON.stringify(args);

    if (argString in memo) {
      return memo[argString];
    } else {
      let temp = fn(...args);
      memo[argString] = temp;
      return temp;
    }
  };
}
