function throttle(func, wait) {
  let latestArguments = [];
  let isScheduled = false;

  const schedule = () => {
    isScheduled = true;

    setTimeout(() => {
      isScheduled = false;

      if (latestArguments.length !== 0) {
        func(...latestArguments);
        latestArguments = [];
        schedule();
      }
    }, wait);
  };

  return function (...args) {
    if (!isScheduled) {
      func.call(this, ...args);
      schedule();
    } else {
      latestArguments = [...args];
    }
  };
}

let currentTime = 0;
const run = (input) => {
  currentTime = 0;

  const intervalId = setInterval(() => {
    console.log("currentTime", currentTime);
    if (currentTime === 10) {
      clearInterval(intervalId);
    }

    currentTime++;
  }, 10);

  const calls = [];

  const throttled = throttle((arg) => {
    const data = `${arg}@${currentTime}`;

    calls.push(data);
    console.log("Result", data);
  }, 30);

  const throttledLodash = _.throttle((arg) => {
    const data = `${arg}@${currentTime}`;

    calls.push(data);
    console.log("Lodash Result", data);
  }, 30);

  input.forEach((call) => {
    const [arg, time] = call.split("@");

    setTimeout(() => {
      //   console.log([arg, time]);
      //   console.log("ct", currentTime);
      throttled(arg);
      throttledLodash(arg);
    }, Number(time) * 10);
  });

  return calls;
};

run(["A@0", "B@1", "C@2", "D@3", "E@4", "F@5", "G@6", "H@7", "I@16"]); // ["A@0", "C@3"]
