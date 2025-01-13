const func = () => {
  this.a = "hello";

  console.log(this);
};

function func1() {
  this.a = "hello world";

  console.log(this);
}

func();
func1();
console.log(this.a);
