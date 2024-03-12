var chunk = function (arr, size) {
  let ans = [];
  let cur = [];
  for (let i = 0; i < arr.length; i++) {
    cur.push(arr[i]);
    if ((i + 1) % size == 0 || i == arr.length - 1) {
      ans.push(cur);
      cur = [];
    }
  }
  return ans;
};

let arr = [1, 9, 6, 3, 2];
let size = 3;
console.log(chunk(arr, size));
