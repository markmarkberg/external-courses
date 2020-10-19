const countsTheNumberOfCharactersInString = (string) => {
  const outputResult = {};

  [...string].forEach((el) => {
    outputResult[el] = outputResult[el] + 1 || 1;
  });

  for (let key in outputResult) {
    console.log(`${key} : ${outputResult[key]}`);
  }
};

module.exports = countsTheNumberOfCharactersInString;
