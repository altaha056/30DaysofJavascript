Array.prototype.groupBy = function (fn) {
  let ans = {};
  for (let i = 0; i < this.length; i++) {
    if (ans[fn(this[i])]) {
      ans[fn(this[i])].push(this[i]);
    } else ans[fn(this[i])] = [this[i]];
  }
  return ans;
};
let array = [{ id: "1" }, { id: "1" }, { id: "2" }];
let fn = function (item) {
  return item.id;
};
console.log(array.groupBy(fn));
