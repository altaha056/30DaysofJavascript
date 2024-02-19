/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let curVal = init;
  return {
    reset: () => {
      curVal = init;
      return curVal;
    },
    increment: () => {
      return ++curVal;
    },
    decrement: () => {
      return --curVal;
    },
  };
};
const counter = createCounter(10);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());
