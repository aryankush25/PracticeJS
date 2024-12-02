document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("changeColorBtn");
  const body = document.body;

  const colors = [
    "#f0f0f0", // default
    "#ffebee", // light red
    "#e8f5e9", // light green
    "#e3f2fd", // light blue
    "#fff3e0", // light orange
  ];

  let currentColorIndex = 0;

  button.addEventListener("click", () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[currentColorIndex];
  });
});
