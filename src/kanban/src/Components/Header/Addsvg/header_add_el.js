import { resetMock } from "../../Resetmock/reset.js";
import { createList } from "../../Newlist/newlist";
import { boards } from "../../Boards/boards.js";
import "./addEl.css";

export const addEl = () => {
  const raw = localStorage.getItem("Data");
  const getMock = JSON.parse(raw);
  boards(getMock);
  // console.log(getMock);
  // console.log(`${getMock} parse get item Data`);

  const list = document.querySelector(".create_list");
  list.setAttribute("data-index", "false");

  const img = document.createElement("div");
  const imgText = document.createElement("div");
  imgText.innerHTML = "Create new list";

  img.classList.add("create_list_logo");
  imgText.classList.add("create_list_text");
  list.append(img, imgText);

  list.addEventListener("click", (e) => {
    if (list.dataset.index === "false") {
      createList("newM4o22", "test", getMock);
      list.dataset.index = "true";
    }

    const getInput = document.querySelector(".input_create_list");
    const getInputId = document.getElementById("newM4o22");
    getInput.addEventListener("blur", (e) => {
      getInput.remove();
      getInputId.remove();
      getMock.splice(0, 1);
      if (e.target.value.length > 0) {
        createList(e.target.value, "create", getMock);
      }
      list.dataset.index = "false";
      resetMock(getMock);
    });
  });

  const blockAva = document.querySelector(".account_user");
  const imgBlock = document.createElement("div");
  imgBlock.classList.add("account_user_logo");

  blockAva.append(imgBlock);
};
