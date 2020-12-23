import { boards } from "../Boards/boards.js";

export const createList = (nameBoard, value, mockData) => {
  const newlist = {
    title: nameBoard,
    issues: [],
  };

  if (value === "test") {
    const inputHeader = document.createElement("input");
    inputHeader.classList.add("content_item");
    inputHeader.classList.add("input_create_list");
    inputHeader.setAttribute("type", "text");
    inputHeader.setAttribute("required", "required");
    inputHeader.setAttribute("placeholder", "Enter name for board");
    // console.log(mockData);
    mockData.unshift(newlist);
    boards(mockData, inputHeader);
  }
  if (value === "create") {
    // console.log(mockData);
    mockData.unshift(newlist);
    boards(mockData);
  }
};
