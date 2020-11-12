const links = [
  "https://1.bp.blogspot.com/-KmF29wcYKOU/WJk9drdx1CI/AAAAAAAABGY/b6o-DvhtAuIE3K6_leH7St9FWEC5Nvk5gCLcB/s1600/2da4a759eb8f1e82ebd88559017bfe3a.jpg",
  "http://www.krasnodar-motors.ru/assets/images/articles/speedkores-tantrum-is-part-dodge-charger-part-1650-hp-supercar%20(2).jpg",
  "https://carakoom.com/data/wall/787/621b20bf_medium.jpg",
  "https://i.pinimg.com/originals/13/74/ae/1374ae873731e3fb9afaa0dfa28b41a6.jpg",
];

const backgroundImg = document.querySelector(".container");


links.forEach((el, i) => {
  const img = document.createElement("img");

  img.classList.add("images_off");

  img.src = el;

  if (i === 0) {
    img.classList.add("images_active");
  }

  document.querySelector(".images").appendChild(img);
});

const allSlides = document.querySelectorAll(".images img");

const buttonLeft = document.querySelector(".slideLeft");

const buttonRight = document.querySelector(".slideRight");

let currentSlideIndex = 0;

const changeImg = (index) => {
  let nextSlideIndex = index;

  if (index < 0) {
    nextSlideIndex = links.length - 1;
  }

  if (index > links.length - 1) {
    nextSlideIndex = 0;
  }

  allSlides[currentSlideIndex].classList.remove("images_active");

  allSlides[nextSlideIndex].classList.add("images_active");

  currentSlideIndex = nextSlideIndex;
};

buttonLeft.addEventListener("click", () => changeImg(currentSlideIndex - 1));

buttonRight.addEventListener("click", () => changeImg(currentSlideIndex + 1));
