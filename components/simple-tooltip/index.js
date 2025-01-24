const body = document.body;

const mainContainer = document.createElement("div");
mainContainer.className = "main-container";
body.appendChild(mainContainer);

const tooltipPositions = ["top", "bottom", "left", "right"];

const positionTooltip = (tooltipEl) => {
  const placement = tooltipEl.getAttribute("placement");
  tooltipEl.setAttribute("final-placement", placement);

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

    if (!finalPlacement) {
      finalPlacement = placement;
    }

    tooltipEl.setAttribute("final-placement", finalPlacement);
  }, 0);
};

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

    const { title, placement = "top", arrow, delay } = tooltip || {};

    if (!tooltipPositions.includes(placement)) {
      throw new Error("Invalid placement value");
    }

    const tooltipEl = document.createElement("div");
    tooltipEl.classList.add("tooltip", `tooltip-${placement}`);
    tooltipEl.innerText = title;
    tooltipEl.setAttribute("placement", placement);
    tooltipEl.setAttribute("final-placement", placement);

    buttonContainer.append(tooltipEl);
    buttonContainer.append(button);
    let timeout;

    buttonContainer.addEventListener("mouseenter", () => {
      timeout = setTimeout(() => {
        tooltipEl.classList.add("tooltip-visible");
      }, delay);
    });
    buttonContainer.addEventListener("mouseleave", () => {
      clearTimeout(timeout);
      tooltipEl.classList.remove("tooltip-visible");
    });

    positionTooltip(tooltipEl);
  } else {
    mainContainer.append(button);
  }

  return button;
};

createButton("Button with left tooltip", {
  tooltip: {
    title: "Tooltip left",
    placement: "left",
    delay: 100,
  },
});
createButton("Button with top tooltip", {
  tooltip: {
    title: "Tooltip top",
    placement: "top",
    delay: 1000,
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
    delay: 1000,
  },
});

const handleTooltipWindowResize = () => {
  window.addEventListener(
    "resize",
    debounce(() => {
      const allTooltips = document.querySelectorAll(".tooltip");

      allTooltips.forEach((tooltip) => {
        positionTooltip(tooltip);
      });
    }, 1000)
  );
};

handleTooltipWindowResize();

function debounce(func, wait) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
