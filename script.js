const accordionList = [
  {
    id: "a1",
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
  {
    id: "a2",
    title: "Section 2",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
  {
    id: "a3",
    title: "Section 3",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
  {
    id: "a4",
    title: "Section 4",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
  {
    id: "a5",
    title: "Section 5",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
];

const body = document.querySelector("body");

const div = body.appendChild(document.createElement("div"));
div.classList.value = "w-full bg-blue-500 gap-2 flex flex-col mt-10";

function handleOnClickAccordion(accordionId) {
  accordionList.map((accordionData) => {
    const isClicked = accordionData.id === accordionId;

    const loopedItem = document.getElementById(accordionData.id);

    if (loopedItem.childNodes.length > 1 && isClicked) {
      loopedItem.removeChild(loopedItem.childNodes[1]);
    } else if (loopedItem.childNodes.length > 1) {
      loopedItem.removeChild(loopedItem.childNodes[1]);
    } else if (isClicked) {
      const content = document.createElement("div");
      content.appendChild(document.createTextNode(accordionData.content));
      loopedItem.appendChild(content);
    }
  });
}

accordionList.forEach((accordionData) => {
  const accordion = document.createElement("div");
  accordion.classList.value = "bg-red-500 cursor-pointer";
  accordion.setAttribute("id", accordionData.id);

  const title = document.createElement("div");
  title.appendChild(document.createTextNode(accordionData.title));
  accordion.appendChild(title);
  title.addEventListener("click", () =>
    handleOnClickAccordion(accordionData.id)
  );

  div.appendChild(accordion);
});
