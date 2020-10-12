function combinesStrings(string, word, num) {
  let dividerString = string.split(" ");

  dividerString[num] = `${dividerString[num]} ${word}`;

  return dividerString.join(" ");
}

module.exports = combinesStrings;
