const body = document.body;

const createButton = (text, { onClick, tooltip } = {}) => {
  const button = document.createElement("button");
  button.innerText = text;
  button.classList.add("button");
  button.onclick = onClick
    ? onClick
    : () => {
        console.log(text, " clicked");
      };

  if (tooltip) {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    body.append(buttonContainer);

    const { title, placement = "top", arrow } = tooltip || {};

    if (!["top", "bottom", "left", "right"].includes(placement)) {
      throw new Error("Invalid placement value");
    }

    const tooltipClass = `tooltip-${placement}`;
    const tooltipVisibleClass = `tooltip-visible`;

    const tooltipEl = document.createElement("div");
    tooltipEl.classList.add("tooltip", tooltipClass);
    tooltipEl.innerText = title;

    buttonContainer.append(tooltipEl);
    buttonContainer.append(button);

    buttonContainer.addEventListener("mouseenter", () => {
      tooltipEl.classList.add(tooltipVisibleClass);
    });
    buttonContainer.addEventListener("mouseleave", () => {
      tooltipEl.classList.remove(tooltipVisibleClass);
    });
  } else {
    body.append(button);
  }

  return button;
};

createButton("Button with top tooltip", {
  tooltip: {
    title: "Tooltip top",
    placement: "top",
  },
});
createButton("Button with bottom tooltip", {
  tooltip: {
    title: "Tooltip bottom",
    placement: "bottom",
  },
});
createButton("Button with left tooltip", {
  tooltip: {
    title: "Tooltip left",
    placement: "left",
  },
});
createButton("Button with right tooltip", {
  tooltip: {
    title: "Tooltip right",
    placement: "right",
  },
});
