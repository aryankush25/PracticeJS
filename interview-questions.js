// Question:

// function task(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     }
//     reject("error");
//   });
// }

// task(true)
//   .then(function (data) {
//     console.log(data);
//     return task(false);
//   })
//   .catch(function (err) {
//     console.log(err);
//     return "Caught-Error";
//   })
//   .then(function (data) {
//     console.log(data);
//     return task(true);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// Question:

// Code A
// function fiveSecondWait(x) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(x);
//     }, 5000);
//   });
// }

// async function adder(x) {
//   const a = fiveSecondWait(2);
//   const b = fiveSecondWait(3);
//   return x + (await a) + (await b);
// }

// console.time("Answer");

// adder(1).then((value) => {
//   console.log(value);
//   console.timeEnd("Answer");
// });

//Code B
// function fiveSecondWait(x) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve(x);
//     }, 5000);
//   });
// }

// async function adder(x) {
//   const a = await fiveSecondWait(2);
//   const b = await fiveSecondWait(3);
//   return x + a + b;
// }

// console.time("Answer");

// adder(1).then((value) => {
//   console.log(value);
//   console.timeEnd("Answer");
// });

// Question:

// function changeObj(a, b, c) {
//   a = a * 10;
//   b.item = "changed";
//   c = { item: "changed" };
// }

// var num = 10;
// var obj1 = { item: "unchanged" };
// var obj2 = { item: "unchanged" };

// changeObj(num, obj1, obj2);

// console.log(num);
// console.log(obj1.item);
// console.log(obj2.item);

// Question:

// console.log(Date());
// console.log(new Date());
