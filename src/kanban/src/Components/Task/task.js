export const task = (mockD) => {
  mockD.forEach((elem, i) => {
    elem.issues.forEach((el) => {
      const div = document.createElement("div");
      div.classList.add("content_item");
      document
        .querySelector(`.${elem.title.split(" ").join("").toLowerCase()}_task`)
        .append(div);
      div.setAttribute("id", el.id);
      div.innerHTML = el.name;
    });
  });
};
