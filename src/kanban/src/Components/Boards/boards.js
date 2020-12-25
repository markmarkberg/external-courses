import "./boards.css";
import { mock } from "../Mock/mock.js";
import { storage } from "../Localstorage/storage.js";
import { task } from "../Task/task.js";
import { count } from "../Footer/footer.js";
import { resetMock } from "../Resetmock/reset.js";

storage(mock);

export const boards = (mockArr, input) => {
  const main = document.querySelector(".content");
  main.innerHTML = " ";

  mockArr.forEach((card, index) => {
    const block = document.createElement("section");
    block.classList.add("section");
    block.classList.add("content_block_size");
    block.setAttribute("id", card.title);

    const blockHeading = document.createElement("div");
    blockHeading.classList.add("content_block_heading");

    const blockName = document.createElement("p");
    blockName.classList.add("heading_name");
    blockName.innerHTML = card.title;

    const blockLogo = document.createElement("button");
    blockLogo.setAttribute("type", "button");
    blockLogo.setAttribute("id", card.title.split(" ").join("").toLowerCase());
    blockLogo.setAttribute("data-index", "false");
    blockLogo.classList.add("block_heading_logo");

    const popUp = document.createElement("div");
    popUp.setAttribute("data-index", "false");
    popUp.classList.add("heading_window");
    popUp.classList.add("heading_window_disable");

    const elP = document.createElement("p");
    elP.classList.add("window_text");
    elP.innerHTML = "Delete";

    popUp.append(elP);

    const logoParagraph = document.createElement("p");
    logoParagraph.classList.add("block_heading_logo_text");

    const blockForUp = document.createElement("div");
    blockForUp.classList.add("block_heading_logo_up");
    blockForUp.append(popUp);

    blockLogo.append(logoParagraph, blockForUp);

    const blockTask = document.createElement("div");
    blockTask.classList.add("content_task");

    const blockInput = document.createElement("div");
    blockInput.classList.add("content_input");

    const button = document.createElement("button");
    button.classList.add("item_add");
    button.setAttribute("type", "button");
    button.setAttribute("id", card.title.split(" ").join("").toLowerCase());

    const buttonLogo = document.createElement("div");
    buttonLogo.classList.add("add_logo");

    const buttonName = document.createElement("p");
    buttonName.classList.add("add_text");
    buttonName.innerHTML = "Add card";

    block.append(blockHeading, blockTask, blockInput, button);

    if (card.title !== "newM4o22") {
      blockHeading.append(blockName, blockLogo);
    } else {
      blockHeading.append(input);
    }

    button.append(buttonLogo, buttonName);
    main.append(block);

    block.classList.add(`${card.title.split(" ").join("").toLowerCase()}_item`);

    blockTask.classList.add(
      `${card.title.split(" ").join("").toLowerCase()}_task`
    );

    blockInput.setAttribute(
      "id",
      `${card.title.split(" ").join("").toLowerCase()}_input`
    );

    if (index !== 0) {
      button.classList.add(
        `${card.title.split(" ").join("").toLowerCase()}_add`
      );
    } else {
      button.classList.add("add_First");
    }

    blockLogo.addEventListener("click", () => {
      if (blockLogo.dataset.index === "false") {
        popUp.classList.remove("heading_window_disable");
        popUp.classList.add("heading_window_active");
        blockLogo.dataset.index = "true";
      }
      popUp.addEventListener("click", () => {
        if (popUp.dataset.index === "false") {
          popUp.classList.remove("heading_window_active");
          popUp.classList.add("heading_window_disable");
          blockLogo.dataset.index = "false";
          popUp.dataset.index = "true";
          document.getElementById(card.title).remove();
          mockArr.splice(index, 1);
          count(mockArr);
          resetMock(mockArr);
          boards(mockArr);
        }
      });
    });

    blockLogo.addEventListener("blur", () => {
      popUp.classList.remove("heading_window_active");
      popUp.classList.add("heading_window_disable");
      blockLogo.dataset.index = "false";
    });

    const inputAddCard = document.createElement("input");

    const addInput = (way) => {
      inputAddCard.classList.add("content_item");
      inputAddCard.classList.add("input");
      inputAddCard.setAttribute("type", "text");
      inputAddCard.setAttribute("placeholder", "Add new task");
      document.getElementById(way).append(inputAddCard);
    };

    let select = document.createElement("select");
    select.classList.add("content_item");
    let firstOption = document.createElement("option");
    select.setAttribute(
      "id",
      `${card.title.split(" ").join("").toLowerCase()}_select`
    );

    const createOption = (way, el) => {
      const option = document.createElement("option");
      option.setAttribute("class", "opt");
      option.innerHTML = el.name;
      option.setAttribute("value", el.id);
      way.append(option);
    };

    button.addEventListener("click", () => {
      if (index === 0) {
        addInput(`${card.title.split(" ").join("").toLowerCase()}_input`);
      } else {
        document
          .getElementById(
            `${card.title.split(" ").join("").toLowerCase()}_input`
          )
          .append(select);
        select.append(firstOption);

        mockArr[index - 1].issues.forEach((el) => {
          createOption(select, el);
        });

        select.onchange = (e) => {
          const currentTitle = document.querySelector(
            `.${card.title.split(" ").join("").toLowerCase()}_task`
          );
          let taskId = e.target.value;
          select.innerHTML = "";
          const findIdInDom = document.getElementById(taskId);
          currentTitle.append(findIdInDom);
          select.remove();

          let findArray = mockArr.find((title) => {
            return title.title === mockArr[index - 1].title;
          }).issues;

          let element = findArray.find((id) => {
            return id.id === taskId;
          });

          let indexElement = findArray.findIndex((id) => {
            return id.id === taskId;
          });

          mockArr[index].issues.push(element);
          mockArr[index - 1].issues.splice(indexElement, 1);
          count(mockArr);
          resetMock(mockArr);
          boards(mockArr);

          if (mockArr[index - 1].issues.length === 0) {
            button.classList.add("disable");
            button.setAttribute("disable", "disable");
          }

          if (mockArr[index].issues.length > 0) {
            button.classList.remove("disable");
            button.removeAttribute("disabled");
          }
        };
      }
    });

    const addTasks = (e) => {
      const nameTask = e.target.value;
      const createNum = String(Date.now());
      const createId = createNum.slice(8);

      if (nameTask) {
        mockArr[0].issues.push({
          id: `task${createId}`,
          name: nameTask,
        });
      }

      if (nameTask.length > 0) {
        const div = document.createElement("div");
        div.classList.add("content_item");
        div.classList.add("new_item");
        div.innerHTML = nameTask;
        div.setAttribute("id", `task${createId}`);
        document
          .querySelector(
            `.${card.title.split(" ").join("").toLowerCase()}_task`
          )
          .append(div);
      }
      inputAddCard.setAttribute("autocomplete", "off");

      inputAddCard.remove();

      if (mockArr[0].issues.length > 0) {
        button.classList.remove("disable");
        button.removeAttribute("disabled");
      }

      count(mockArr);
      resetMock(mockArr);
      boards(mockArr);
    };

    inputAddCard.addEventListener("blur", (event) => {
      if (index === 0) {
        addTasks(event);
      }
    });
  });
  task(mockArr);
  count(mockArr);
  resetMock(mockArr);
};
