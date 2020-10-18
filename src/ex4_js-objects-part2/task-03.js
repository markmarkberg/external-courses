const getStringWithoutSpace = (string) => {
  let modifiedString = string;

  if (modifiedString[0] === " ") {
    modifiedString = modifiedString.slice(1);
  }

  if (string[length] === " ") {
    modifiedString = modifiedString.slice(0, -1);
  }

  return modifiedString;
};

module.exports = getStringWithoutSpace;

