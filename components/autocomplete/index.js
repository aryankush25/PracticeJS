const body = document.body;

const autocompleteContainer = document.createElement("div");

autocompleteContainer.classList.add("autocomplete-container");
body.appendChild(autocompleteContainer);

const input = document.createElement("input");
input.classList.add("autocomplete-input");
input.placeholder = "Search...";
autocompleteContainer.appendChild(input);

const resultsContainer = document.createElement("div");
resultsContainer.classList.add("autocomplete-results-container");
autocompleteContainer.appendChild(resultsContainer);

const data = [
  {
    value: "apple",
    label: "Apple",
  },
  {
    value: "banana",
    label: "Banana",
  },
  {
    value: "cherry",
    label: "Cherry",
  },
  {
    value: "date",
    label: "Date",
  },
  {
    value: "elderberry",
    label: "Elderberry",
  },
  {
    value: "fig",
    label: "Fig",
  },
  {
    value: "grape",
    label: "Grape",
  },
  {
    value: "honeydew",
    label: "Honeydew",
  },
  {
    value: "jackfruit",
    label: "Jackfruit",
  },
  {
    value: "kiwi",
    label: "Kiwi",
  },
  {
    value: "lemon",
    label: "Lemon",
  },
];

const updateResultElements = (dataList) => {
  if (dataList.length === 0) {
    resultsContainer.innerHTML = "No results found";
    return;
  }

  resultsContainer.innerHTML = "";

  dataList.forEach((item) => {
    const result = document.createElement("div");

    result.classList.add("autocomplete-result");
    result.innerText = item.label;
    result.dataset.value = item.value;

    result.addEventListener("click", (event) => {
      console.log(event.target.dataset.value);
      resultsContainer.classList.remove(
        "autocomplete-results-container-visible"
      );
      input.value = event.target.innerText;
    });

    resultsContainer.appendChild(result);
  });
};

updateResultElements(data);

input.addEventListener("focus", () => {
  const inputRect = input.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const spaceBelow = windowHeight - inputRect.bottom;

  if (spaceBelow < 250) {
    resultsContainer.classList.add("show-above");
  } else {
    resultsContainer.classList.remove("show-above");
  }

  resultsContainer.classList.add("autocomplete-results-container-visible");
});

input.addEventListener("input", (event) => {
  const filteredData = data.filter((item) => {
    return item.label.toLowerCase().includes(event.target.value.toLowerCase());
  });

  updateResultElements(filteredData);
});

document.addEventListener("click", (event) => {
  if (autocompleteContainer.contains(event.target)) {
    return;
  }

  resultsContainer.classList.remove("autocomplete-results-container-visible");
});
