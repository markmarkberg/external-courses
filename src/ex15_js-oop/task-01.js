function worksWithSweets(candy, amount) {
  this.sweetsList = candy;
  this.sweetsAmount = amount;
}

function createCandyStructure(nameSweet, weigtSweet) {
  this.name = nameSweet;
  this.weigt = weigtSweet;
}

const candySnickers = new createCandyStructure("Сникерс", 50);
const candyMilkyWay = new createCandyStructure("МилкиУэй", 25);
const candyBounty = new createCandyStructure("Баунти", 48);
const candyMars = new createCandyStructure("Марс", 52);

const candyForMe = new worksWithSweets(
  [candySnickers, candyMilkyWay, candyBounty],
  1
);
const candyForKids = new worksWithSweets(
  [candyMars, candyMilkyWay, candySnickers],
  2
);

worksWithSweets.prototype.findCandy = function (nameCandy) {
  let hasCandy = false;
  this.sweetsList.forEach(function (candy) {
    if (candy.name === nameCandy) {
      hasCandy = true;
    }
  });
  return hasCandy
    ? `Батончик ${nameCandy} есть в наборе`
    : `Батончик ${nameCandy} нет в наборе`;
};

worksWithSweets.prototype.sortCandy = function () {
  return this.sweetsList.sort(function (a, b) {
    return a.weigt < b.weigt ? 1 : -1;
  });
};

worksWithSweets.prototype.countMassCandy = function () {
  let mass = 0;
  this.sweetsList.forEach((el) => {
    mass += el.weigt * this.sweetsAmount;
  });
  return mass;
};

console.log(`Подарок для детей весит ${candyForKids.countMassCandy()} грамм`);
console.log(`Подарок для меня весит ${candyForMe.countMassCandy()} грамм`);
console.log(candyForMe.sortCandy());
console.log(candyForKids.findCandy("Чупа-чупс"));
