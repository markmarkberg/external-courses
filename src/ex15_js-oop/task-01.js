function WithSweets(candy) {
  this.sweetsList = candy;
}

function CandyStructure(nameSweet, weigtSweet) {
  this.name = nameSweet;
  this.weigt = weigtSweet;
}

const candySnickers = new CandyStructure("Сникерс", 50);
const candyMilkyWay = new CandyStructure("МилкиУэй", 25);
const candyBounty = new CandyStructure("Баунти", 48);
const candyMars = new CandyStructure("Марс", 52);

const candyForMe = new WithSweets(
  [candySnickers, candyMilkyWay, candyBounty],
);

const candyForKids = new WithSweets(
  [candyMars, candyMilkyWay, candySnickers],
);

WithSweets.prototype.findCandy = function (nameCandy) {
  let hasCandy = false;
  this.sweetsList.find((candy) => {
    if (candy.name === nameCandy) {
      hasCandy = true;
    }
  });
  return hasCandy
    ? `Батончик ${nameCandy} есть в наборе`
    : `Батончик ${nameCandy} нет в наборе`;
};

WithSweets.prototype.sortCandy = function () {
  return this.sweetsList.sort(function (a, b) {
    return a.weigt < b.weigt ? 1 : -1;
  });
};

WithSweets.prototype.countMassCandy = function () {
  let mass = 0;
  return this.sweetsList.reduce((prevEl, currentEl) => {
    if (prevEl.weigt === undefined) {
      return prevEl + currentEl.weigt;
    }
    return prevEl.weigt + currentEl.weigt;
  });
};

console.log(
  `Подарок для детей весит ${candyForKids.countMassCandy() * 2} грамм`
);
console.log(`Подарок для меня весит ${candyForMe.countMassCandy()} грамм`);
console.log(candyForMe.sortCandy());
console.log(candyForKids.findCandy("Чупа-чупс"));
