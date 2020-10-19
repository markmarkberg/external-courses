const customEvery = (array, callback) => {
  let result = true;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array) === false) {
      result = false;

      break;
    }
  }

  return result;
};

module.exports = customEvery;
