const rootNode = document.getElementById("root");

const newButton = document.createElement("button");
newButton.style.width = "150px";
newButton.style.height = "50px";
newButton.style.backgroundColor = "blue";
newButton.style.color = "white";
newButton.appendChild(document.createTextNode("Create Worker"));

rootNode.appendChild(newButton);

// Define the worker code as a string
const workerCode = `
    // Listen for messages from the main script
    onmessage = function(event) {
        if (event.data === 'start') {
            setTimeout(() => {
                postMessage("Hello World");
            }, 5000);

            console.log("Worker");
        }
    };
`;

// Create a blob from the worker code
const blob = new Blob([workerCode], { type: "application/javascript" });

// Create a new Worker using a blob URL
const worker = new Worker(URL.createObjectURL(blob));

worker.onmessage = (event) => {
  console.log("Event");
  console.log(event);
};

newButton.addEventListener("click", () => {
  console.log("Start");
  worker.postMessage("start");
});
