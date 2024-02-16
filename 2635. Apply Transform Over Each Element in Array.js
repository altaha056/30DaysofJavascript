var map = function (arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i);
  }
  return arr;
};
console.log(
  [1, 2, 3],
  (plusone = (n) => {
    return n + 1;
  })
);
