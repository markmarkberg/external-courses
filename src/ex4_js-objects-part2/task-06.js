const returnsCamalcase = (string) => {
  const newArr = [];

  string.split(" ").forEach((el) => {
    newArr.push(el[0].toUpperCase() + el.slice(1));
  });

  return newArr.join(" ");
};

module.exports = returnsCamalcase;
