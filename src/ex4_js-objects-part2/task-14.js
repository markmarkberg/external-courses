function getRandomNumberInRange(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

module.exports = getRandomNumberInRange;
