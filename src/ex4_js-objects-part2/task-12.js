const roundsTheNumber = (numOne, numTwo) => {
  let count = (numOne + numTwo).toFixed(3);

  return +count;
};

module.exports = roundsTheNumber;
