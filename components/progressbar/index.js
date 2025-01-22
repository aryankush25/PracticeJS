const body = document.body;

const progressbarContainer = document.createElement("div");

progressbarContainer.classList.add("progressbar-container");
body.appendChild(progressbarContainer);

const progressbar = document.createElement("div");
progressbar.classList.add("progressbar");
progressbarContainer.appendChild(progressbar);
progressbar.setAttribute("aria-label", "Progress Bar");
progressbar.setAttribute("role", "progressbar");
progressbar.setAttribute("aria-valuenow", "0");
progressbar.setAttribute("aria-valuemin", "0");
progressbar.setAttribute("aria-valuemax", "100");

let intervalId = null;

const startInterval = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    const width = progressbar.style.width;
    const widthNumber = Number(width.replace("%", ""));
    progressbar.style.width = `${widthNumber + 1}%`;
    progressbar.setAttribute("aria-valuenow", `${widthNumber + 1}`);

    if (intervalId && widthNumber + 1 >= 100) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 100);
};

const actions = document.createElement("div");
actions.classList.add("actions");
body.appendChild(actions);

const start = document.createElement("button");
start.classList.add("start");
start.innerText = "Start";
actions.appendChild(start);
start.onclick = () => startInterval();

const pause = document.createElement("button");
pause.classList.add("pause");
pause.innerText = "Pause";
actions.appendChild(pause);
pause.onclick = () => {
  intervalId && clearInterval(intervalId) && (intervalId = null);
};

const reset = document.createElement("button");
reset.classList.add("reset");
reset.innerText = "Reset";
actions.appendChild(reset);
reset.onclick = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  progressbar.style.width = "0%";
  progressbar.setAttribute("aria-valuenow", "0");
  input.value = 0;
};

const input = document.createElement("input");
input.classList.add("input");
input.type = "number";
input.min = 0;
input.max = 100;
input.value = 0;
input.setAttribute("aria-label", "Progress Bar Value");
input.name = "progressbar";
input.addEventListener("input", (e) => {
  progressbar.style.width = `${e.target.value}%`;
  progressbar.setAttribute("aria-valuenow", `${e.target.value}`);
});
actions.appendChild(input);
