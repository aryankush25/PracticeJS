function curry(fn) {
  const funcLength = fn.length;

  return function curried(...args) {
    if (args.length >= funcLength) {
      return fn(...args);
    }

    return function (...args1) {
      return curried(...args, ...args1);
    };
  };
}

const sum = (a, b, c) => {
  return a + b + c;
};

const multiply = (a, b, c) => {
  return a * b * c;
};

const curriedSum = curry(sum);
console.log(curriedSum(10, 2, 3)); // => 15
console.log(curriedSum(10, 2)(3)); // => 15
console.log(curriedSum(10)(2, 3)); // => 15
console.log(curriedSum(10)(2)(3)); // => 15

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(10, 2, 3)); // => 60
console.log(curriedMultiply(10, 2)(3)); // => 60
console.log(curriedMultiply(10)(2, 3)); // => 60
console.log(curriedMultiply(10)(2)(3)); // => 60
