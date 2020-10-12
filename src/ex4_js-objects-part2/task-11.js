const countsTheNumberOfCharactersInString = (string) => {
  const outputResult = {};

  let transformation = [...string];

  transformation.forEach((el, i) => {
    let count = outputResult[transformation[i]]
    
      ? outputResult[transformation[i]]
      : 0;
    outputResult[transformation[i]] = count + 1;
  });

  for (let key in outputResult) {
    console.log(`${key} : ${outputResult[key]}`);
  }
};

module.exports = countsTheNumberOfCharactersInString;
