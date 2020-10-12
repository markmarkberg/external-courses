const returnsLowerCamelCase = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .reduce((a, b) => a + b.charAt(0).toUpperCase() + b.slice(1));
};

module.exports = returnsLowerCamelCase;
