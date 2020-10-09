const searchesWordInString = (string, value) => {
  const arrString = string.split(" ").some((el) => el === value);

  return arrString;
};

module.exports = searchesWordInString;
