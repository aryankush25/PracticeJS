const accordionList = [
  {
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
  {
    title: "Section 2",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
  {
    title: "Section 3",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
  {
    title: "Section 4",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
  {
    title: "Section 5",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
    laborum cupiditate possimus labore, hic temporibus velit dicta earum`,
  },
];

const body = document.querySelector("body");

const div = body.appendChild(document.createElement("div"));
div.classList.add("accordion");

accordionList.forEach((accordionData) => {
  const accordion = document.createElement("details");

  const title = document.createElement("summary");
  title.appendChild(document.createTextNode(accordionData.title));

  const content = document.createElement("p");
  content.appendChild(document.createTextNode(accordionData.content));

  accordion.appendChild(title);
  accordion.appendChild(content);

  div.appendChild(accordion);
});
