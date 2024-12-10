// Create a function to reverse a string.

const reverse = (str) => {
  if (typeof str != "string" || !str || str.length < 2) {
    return str;
  }

  let reversedStr = "";

  for (let i = 0; i < str.length; i++) {
    reversedStr = reversedStr + str[str.length - i - 1];
  }

  return reversedStr;
};

console.log(reverse(null));
