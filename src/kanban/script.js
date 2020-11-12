let index = false;

const button = document.querySelector(".account");

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

const div = document.createElement("div");
div.classList.add("dropdown_list_active");

const listActive = () => {
  document.querySelector(".dropdown").classList.add("dropdown_logo_rotate");
  document.querySelector(".dropdown_container").append(div);
  document
    .querySelector(".dropdown_list_active")
    .append(userName, account, tasks, exit);
};

const removeDropList = () => {
  document.querySelector(".dropdown_list_active").remove();
  document.querySelector(".dropdown").classList.remove("dropdown_logo_rotate");
};

button.addEventListener("click", () => {
  if (index === false) {
    listActive();
    index = true;
  } else {
    removeDropList();
    index = false;
  }
});
