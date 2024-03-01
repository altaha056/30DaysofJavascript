var once = function (fn) {
  let call = false;
  return function (...args) {
    if (!call) {
      call = true;
      return fn(...args);
    }
  };
};
let fn = (a, b, c) => a + b + c,
  calls = [
    [1, 2, 3],
    [2, 3, 6],
  ];

console.log(once(fn(...calls)));
