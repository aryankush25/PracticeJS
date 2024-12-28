const sum = (a, b) => {
  return a + b;
};

function curry(fn) {}

const curriedSum = curry(sum);

console.log("1", curriedSum(1, 2, 3)); // => 6
console.log("2", curriedSum(1, 2, 3, 4)); // => 10
console.log("3", curriedSum(1, 2, 3, 4, 5)); // => 10
console.log("4", curriedSum(1)(2)(3)); // => 6
console.log("5", curriedSum(1)(2)(3)(4)); // => 10
console.log("6", curriedSum(1)(2)(3)(4)(5)); // => 15
