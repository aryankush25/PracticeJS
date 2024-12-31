function curry(fn) {
  const funcLength = fn.length;

  return function curried(...args) {
    args = args.filter((val) => val != curry.placeholder);

    if (args.length >= funcLength) {
      return fn(...args.slice(0, funcLength));
    }

    return function (...args1) {
      args1 = args1.filter((val) => val != curry.placeholder);
      return curried(...args, ...args1);
    };
  };
}

curry.placeholder = Symbol();
const _ = curry.placeholder;

const sum = (a, b, c) => {
  return a + b + c;
};

const multiply = (a, b, c) => {
  return a * b * c;
};

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedSum = curry(sum);
console.log(curriedSum(_, 10, _, 2, 3)); // => 15
console.log(curriedSum(10, 2)(3)); // => 15
console.log(curriedSum(10)(2, 3)); // => 15
console.log(curriedSum(10)(2)(3)); // => 15

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(10, 2, 3)); // => 60
console.log(curriedMultiply(10, 2)(3)); // => 60
console.log(curriedMultiply(10)(2, 3)); // => 60
console.log(curriedMultiply(10)(2)(3)); // => 60

const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(_, 2)(1, 3)); // '2_1_3'
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_3_2'
