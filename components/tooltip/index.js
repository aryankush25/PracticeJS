// Create tooltip elements
function createTooltips() {
  // Create main container
  const mainContainer = document.createElement("div");
  mainContainer.style.margin = "200px";

  // Create container for position examples
  const positionContainer = document.createElement("div");
  positionContainer.style.display = "flex";
  positionContainer.style.gap = "20px";
  positionContainer.style.marginBottom = "20px";

  // Create tooltips for different positions
  const positions = [
    {
      id: "top",
      text: "Top",
      position: "top",
      message: "This tooltip appears on top",
    },
    {
      id: "right",
      text: "Right",
      position: "right",
      message: "This tooltip appears on the right",
    },
    {
      id: "bottom",
      text: "Bottom",
      position: "bottom",
      message: "This tooltip appears at the bottom",
    },
    {
      id: "left",
      text: "Left",
      position: "left",
      message: "This tooltip appears on the left",
    },
  ];

  positions.forEach(({ id, text, position, message }) => {
    const container = createTooltipContainer(
      `tooltip-button-${id}`,
      `tooltip-${id}`,
      text,
      message,
      position
    );
    positionContainer.appendChild(container);
  });

  // Create interactive tooltip
  const interactiveContainer = createTooltipContainer(
    "tooltip-button-interactive",
    "tooltip-interactive",
    "Interactive Tooltip"
  );

  const interactiveTooltip = interactiveContainer.querySelector(".tooltip");
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is an interactive tooltip";
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = "Click me!";
  link.onclick = (e) => {
    e.preventDefault();
    alert("Clicked!");
    return false;
  };

  interactiveTooltip.appendChild(paragraph);
  interactiveTooltip.appendChild(link);

  // Append all containers
  mainContainer.appendChild(positionContainer);
  mainContainer.appendChild(interactiveContainer);
  document.body.appendChild(mainContainer);
}

// Helper function to create tooltip container with button and tooltip
function createTooltipContainer(
  buttonId,
  tooltipId,
  buttonText,
  tooltipText,
  position
) {
  const container = document.createElement("div");
  container.className = "tooltip-container";

  const button = document.createElement("button");
  button.id = buttonId;
  button.setAttribute("aria-describedby", tooltipId);
  button.textContent = buttonText;

  const tooltip = document.createElement("div");
  tooltip.id = tooltipId;
  tooltip.className = "tooltip hidden";
  tooltip.setAttribute("role", "tooltip");
  if (position) {
    tooltip.setAttribute("data-position", position);
  }
  if (tooltipText) {
    tooltip.textContent = tooltipText;
  }

  container.appendChild(button);
  container.appendChild(tooltip);

  return container;
}

// Initialize tooltips
function initTooltips() {
  // Create all tooltip elements
  createTooltips();

  // Add event listeners
  const tooltipButtons = document.querySelectorAll("[aria-describedby]");

  tooltipButtons.forEach((button) => {
    const tooltipId = button.getAttribute("aria-describedby");
    const tooltip = document.getElementById(tooltipId);
    let tooltipTimeout;

    if (!tooltip) return;

    // Add event listeners for each tooltip
    button.addEventListener("mouseenter", () => {
      tooltipTimeout = setTimeout(() => showTooltip(tooltip), 500); // 500ms delay
    });

    button.addEventListener("mouseleave", () => {
      clearTimeout(tooltipTimeout);
      hideTooltip(tooltip);
    });

    button.addEventListener("focus", () => showTooltip(tooltip));
    button.addEventListener("blur", () => hideTooltip(tooltip));

    // Make tooltip interactive
    tooltip.addEventListener("mouseenter", () => {
      clearTimeout(tooltipTimeout);
      showTooltip(tooltip);
    });

    tooltip.addEventListener("mouseleave", () => hideTooltip(tooltip));
  });

  // Handle window resize
  window.addEventListener(
    "resize",
    debounce(() => {
      const visibleTooltips = document.querySelectorAll(".tooltip.visible");
      visibleTooltips.forEach((tooltip) => adjustTooltipPosition(tooltip));
    }, 100)
  );
}

// Show tooltip with position adjustment
function showTooltip(tooltip) {
  tooltip.classList.add("visible");
  adjustTooltipPosition(tooltip);
}

// Hide tooltip
function hideTooltip(tooltip) {
  tooltip.classList.remove("visible");
}

// Adjust tooltip position based on viewport boundaries
function adjustTooltipPosition(tooltip) {
  const rect = tooltip.getBoundingClientRect();
  const position = tooltip.getAttribute("data-position") || "top";
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Reset any previous adjustments
  tooltip.style.top = "";
  tooltip.style.bottom = "";
  tooltip.style.left = "";
  tooltip.style.right = "";
  tooltip.style.transform = "";

  // Check for overflow and adjust if needed
  const overflow = {
    top: rect.top < 0,
    right: rect.right > viewportWidth,
    bottom: rect.bottom > viewportHeight,
    left: rect.left < 0,
  };

  // Adjust position based on overflow
  switch (position) {
    case "top":
      if (overflow.top) {
        tooltip.setAttribute("data-position", "bottom");
      }
      break;
    case "right":
      if (overflow.right) {
        tooltip.setAttribute("data-position", "left");
      }
      break;
    case "bottom":
      if (overflow.bottom) {
        tooltip.setAttribute("data-position", "top");
      }
      break;
    case "left":
      if (overflow.left) {
        tooltip.setAttribute("data-position", "right");
      }
      break;
  }
}

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize tooltips when DOM is loaded
document.addEventListener("DOMContentLoaded", initTooltips);
