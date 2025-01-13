const bodyNode = document.getElementsByTagName("body")[0];

const darkModeButton = document.createElement("button");
darkModeButton.appendChild(document.createTextNode("Toggle dark Mode"));
darkModeButton.style.width = "150px";
darkModeButton.style.height = "50px";
darkModeButton.classList.add("dark-mode-toggle-button");

darkModeButton.addEventListener("click", () => {
  const body = document.getElementsByTagName("body")[0];
  const dataTheme = body.getAttribute("data-theme");

  if (dataTheme === "dark") {
    body.setAttribute("data-theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
  }
});

bodyNode.appendChild(darkModeButton);
