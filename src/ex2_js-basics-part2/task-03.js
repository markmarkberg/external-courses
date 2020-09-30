function countsEvenAndOddElements(arr) {
  let quantityNumbers = [0, 0, 0];

  arr.forEach((item) => {
    if (typeof item !== "number") {
      return undefined;
    }
    if (isNaN(item)) {
      return undefined;
    }
    if (item === 0) {
      return quantityNumbers[2]++;
    }
    if (item % 2 !== 0) {
      return quantityNumbers[1]++;
    }
    if (item % 2 === 0) {
      return quantityNumbers[0]++;
    }
  });
  return quantityNumbers;
}
module.exports = countsEvenAndOddElements;
