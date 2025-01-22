const body = document.body;

const progressbarContainer = document.createElement("div");

progressbarContainer.classList.add("progressbar-container");
body.appendChild(progressbarContainer);

const progressbar = document.createElement("div");
progressbar.classList.add("progressbar");
progressbarContainer.appendChild(progressbar);

let intervalId = null;

const startInterval = () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    const width = progressbar.style.width;
    const widthNumber = Number(width.replace("%", ""));
    progressbar.style.width = `${widthNumber + 1}%`;

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

const resume = document.createElement("button");
resume.classList.add("resume");
resume.innerText = "Resume";
actions.appendChild(resume);
resume.onclick = () => startInterval();

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
};
