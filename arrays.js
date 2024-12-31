// Create a function to reverse a string.

// const reverse = (str) => {
//   if (typeof str != "string" || !str || str.length < 2) {
//     return str;
//   }

//   let reversedStr = "";

//   for (let i = 0; i < str.length; i++) {
//     reversedStr = reversedStr + str[str.length - i - 1];
//   }

//   return reversedStr;
// };

// console.log(reverse(null));

// Merge sorted array

// const mergeSortedArrays = (arr1, arr2) => {
//   if (
//     !(arr1 && typeof arr1.length === "number") ||
//     !(arr2 && typeof arr2.length === "number")
//   ) {
//     return "Oops! please send a proper array with values.";
//   }

//   if (arr1.length === 0) {
//     return arr2;
//   }

//   if (arr2.length === 0) {
//     return arr1;
//   }

//   const mergedArray = [];
//   let i = 0;
//   let j = 0;

//   while (i < arr1.length || j < arr2.length) {
//     console.log(arr1[i], arr2[j]);
//     console.log("mergedArray", mergedArray);

//     if (arr2[j] === undefined || arr1[i] < arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   return mergedArray;
// };

// console.log(mergeSortedArrays([1, 10, 99], [-111, 0]));

const flat = function (arr, depth = 1) {
  console.log(arr);

  for (let k = 0; k < depth; k++) {
    let newArr = [];

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];

      if (i in arr) {
        if (Array.isArray(el)) {
          el.forEach((element, idx) => {
            if (idx in el) {
              newArr.push(element);
            }
          });
        } else {
          count++;
          newArr.push(el);
        }
      }
    }

    if (count === arr.length) {
      break;
    }

    arr = newArr;
  }

  return arr;
};

const arr = [1, 2];
arr[4] = undefined;
arr[5] = [3, 4];
arr[5][4] = [5, 6, [7, 8, [9, 10]]];

console.log(flat(arr, Infinity)); // [1, 2, undefined, 3, 4, 5, 6, 7, 8, 9, 10]
