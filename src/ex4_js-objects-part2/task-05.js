const searchesWordInString = (string, value) => {
  return string.split(" ").some((el) => el === value);
};

module.exports = searchesWordInString;
