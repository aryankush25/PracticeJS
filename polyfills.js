const myArr = [1, 2, 3, 4];

Array.prototype.map = function (fn) {
  console.log(this);
};

myArr.map();
