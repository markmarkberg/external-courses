import "./header.css";

export const header = () => {
  const buttonDrop = document.querySelector(".account");
  buttonDrop.setAttribute("data-index", "false");

  const userName = document.createElement("p");
  userName.classList.add("user_name");
  userName.innerHTML = "Mark";

  const account = document.createElement("button");
  account.classList.add("dropdown_list_item");
  account.innerHTML = "My account";

  const tasks = document.createElement("button");
  tasks.classList.add("dropdown_list_item");
  tasks.innerHTML = "My tasks";

  const exit = document.createElement("button");
  exit.classList.add("dropdown_list_item");
  exit.innerHTML = "Log out";

  const container = document.createElement("div");
  container.classList.add("dropdown_list_active");

  container.append(userName, account, tasks, exit);

  const dropdown = document.querySelector(".dropdown");

  const listActive = () => {
    dropdown.classList.add("dropdown_logo_rotate");
    document.querySelector(".dropdown_container").append(container);
  };

  const removeDropList = () => {
    document.querySelector(".dropdown_list_active").remove();
    dropdown.classList.remove("dropdown_logo_rotate");
  };

  buttonDrop.addEventListener("click", () => {
    if (buttonDrop.dataset.index === "false") {
      listActive();
      buttonDrop.dataset.index = "true";
    } else {
      removeDropList();
      buttonDrop.dataset.index = "false";
    }
  });
};
