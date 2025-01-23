const body = document.body;

const mainContainer = document.createElement("div");
mainContainer.className = "main-container";
body.appendChild(mainContainer);

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
    mainContainer.append(buttonContainer);

    const { title, placement = "top", arrow } = tooltip || {};

    if (!["top", "bottom", "left", "right"].includes(placement)) {
      throw new Error("Invalid placement value");
    }

    const tooltipEl = document.createElement("div");
    tooltipEl.classList.add("tooltip", `tooltip-${placement}`);
    tooltipEl.innerText = title;

    buttonContainer.append(tooltipEl);
    buttonContainer.append(button);

    buttonContainer.addEventListener("mouseenter", () => {
      tooltipEl.classList.add("tooltip-visible");
    });
    buttonContainer.addEventListener("mouseleave", () => {
      tooltipEl.classList.remove("tooltip-visible");
    });

    setTimeout(() => {
      const tooltipRect = tooltipEl.getBoundingClientRect();
      const innerHeight = window.innerHeight;
      const innerWidth = window.innerWidth;

      let finalPlacement = null;

      switch (placement) {
        case "top": {
          if (tooltipRect.top < 0) {
            finalPlacement = "bottom";
          }
          break;
        }
        case "bottom": {
          if (tooltipRect.bottom > innerHeight) {
            finalPlacement = "bottom";
          }
          break;
        }
        case "left": {
          if (tooltipRect.left < 0) {
            finalPlacement = "right";
          }
          break;
        }
        case "right": {
          if (tooltipRect.right > innerWidth) {
            finalPlacement = "left";
          }
          break;
        }
        default: {
          finalPlacement = placement;
        }
      }

      tooltipEl.classList.remove(`tooltip-${placement}`);
      const tooltipClass = `tooltip-${
        finalPlacement ? finalPlacement : placement
      }`;
      tooltipEl.classList.add(tooltipClass);
    }, 0);
  } else {
    mainContainer.append(button);
  }

  return button;
};

createButton("Button with left tooltip", {
  tooltip: {
    title: "Tooltip left",
    placement: "left",
  },
});
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
createButton("Button with right tooltip", {
  tooltip: {
    title: "Tooltip right",
    placement: "right",
  },
});
