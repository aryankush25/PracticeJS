const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 3000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 1000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = Array(promises.length).fill(0);
    let count = 0;

    promises.forEach((promise, index) => {
      promise
        .then((response) => {
          results[index] = response;
          count++;

          if (count === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

Promise.promiseAll = promiseAll;

console.log(Promise.promiseAll);

console.time("Time");

Promise.promiseAll([p1, p2, p3])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.timeEnd("Time");
  });

console.time("Time2");

Promise.all([p1, p2, p3])
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.timeEnd("Time2");
  });

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
