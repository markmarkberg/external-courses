function getRandomNumberInRange(minNum, maxNum) {
  return Math.floor(minNum + Math.random() * (maxNum + 1 - minNum));
}

module.exports = getRandomNumberInRange;
