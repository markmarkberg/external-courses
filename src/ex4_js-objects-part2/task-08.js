const returnsLowerCamelCase = (string) => {
  const arr = [];
  
  string
    .toLowerCase()
    .split(" ")
    .forEach((el, i) => {
      if (i === 0) {
        arr.push(el);
      } else {
        arr.push(el[0].toUpperCase() + el.slice(1));
      }
    });

  return arr.join("");
};

module.exports = returnsLowerCamelCase;
