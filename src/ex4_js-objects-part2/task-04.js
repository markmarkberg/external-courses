const returnStringWithFirstUppercaseCharacter = (string) => {
  const modifiedString = string.trim(" ");

  return `${modifiedString[0].toUpperCase()}${modifiedString.slice(1)}`;
};

module.exports = returnStringWithFirstUppercaseCharacter;
