Array.prototype.last = function () {
  return this.length === 0 ? -1 : this[this.length - 1];
};

let nums = [null, {}, 3];
console.log(nums.last());
