const mock = [
  { site: "Yandex", url: "https://yandex.ru/" },
  { site: "Vk", url: "https://vk.com/" },
  { site: "Google", url: "https://www.google.ru/" },
];

const wrapper = document.querySelector(".wrapper");

const form = document.createElement("form");
form.classList.add("wrapper_input");
form.setAttribute("method", "POST");

const nameBlock = document.createElement("div");
nameBlock.classList.add("input_logo");

const logoName = document.createElement("p");
logoName.classList.add("logo_item_upper");
logoName.innerHTML = "S";

const stringName = document.createElement("p");
stringName.classList.add("logo_item_second");
stringName.innerHTML = "earch";

const inputBlock = document.createElement("div");
inputBlock.classList.add("input_block");

const input = document.createElement("input");
input.classList.add("input");
input.setAttribute("type", "text");
input.setAttribute("id", "search");
input.setAttribute("placeholder", "Enter website");
input.setAttribute("required", "required");
input.setAttribute("autocomplete", "off");

const labelInput = document.createElement("label");
labelInput.setAttribute("for", "search");
labelInput.innerHTML = "Enter website";

nameBlock.append(logoName, stringName);

inputBlock.append(input, labelInput);

form.append(nameBlock, inputBlock);

wrapper.append(form);

const inputSearch = document.getElementById("search");

const debounce = (callback, value) => {
  let isCooldown;

  return function () {
    const func = () => {
      callback.apply(this, arguments);
    };

    clearTimeout(isCooldown);

    isCooldown = setTimeout(func, value);
  };
};

const searchElement = () => {
  input.addEventListener(
    "change",
    debounce(() => {
      mock.filter((elem) => {
        if (elem.site === input.value) {
          console.log(elem.site);
        }
      });
    }, 1000)
  );
};
searchElement();
