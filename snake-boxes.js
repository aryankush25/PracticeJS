// Problem: file:///Users/aryan/Projects/javascript/PracticeJS/index.html

const body = document.querySelector("body");

const div = body.appendChild(document.createElement("div"));
div.classList.value =
  "w-full gap-2 flex flex-col p-10 h-screen justify-center items-center";

const container = div.appendChild(document.createElement("div"));
container.classList.value = "border border-black";

const rows = 8;
const columns = 8;
let lastFilled = undefined;

for (let i = 0; i < rows; i++) {
  const row = document.createElement("div");
  row.classList.value = "h-10 flex";
  container.appendChild(row);

  for (let j = 0; j < columns; j++) {
    const column = document.createElement("div");
    column.classList.value = "w-10 h-10 border border-black";
    column.setAttribute("id", `row-${i}-col-${j}`);
    column.classList.add("column");
    row.appendChild(column);
  }
}

const handleMark = (i, j) => {
  const elementToFill = document.getElementById(`row-${i}-col-${j}`);
  elementToFill.classList.add("bg-green-300");
};

const unMarkAll = () => {
  const elementsToUnMark = document.querySelectorAll(".column");
  elementsToUnMark.forEach((el) => {
    el.classList.remove("bg-green-300");
  });
};

setInterval(() => {
  if (!Array.isArray(lastFilled)) {
    lastFilled = [0, 0];
    handleMark(...lastFilled);
  } else {
    let [x, y] = lastFilled;

    if (y < columns - 1 && x % 2 === 0) {
      y++;
    } else if (y > 0 && x % 2 !== 0) {
      y--;
    } else {
      x++;

      if (x % 2 === 0) {
        y = 0;
      }

      if (x === rows) {
        lastFilled = null;
        unMarkAll();
        return;
      }
    }

    lastFilled = [x, y];
    handleMark(...lastFilled);
  }
}, 500);
