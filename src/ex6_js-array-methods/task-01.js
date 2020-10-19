const customsSlice = (array, begin, end) => {
  let newArr = [];

  let firstParameter = begin;

  let lastParameter = end;

  if (typeof begin === "undefined") {
    return array;
  }

  if (begin && end > 0) {
    firstParameter = begin;
    lastParameter = end;
  }

  if (begin === 0) {
    firstParameter = 0;
    lastParameter = array.length;
  }

  if (begin < 0) {
    firstParameter = array.length + begin;
    lastParameter = array.length;
  }

  if (end > array.length - 1) {
    firstParameter = array.length + begin;
    lastParameter = array.length;
  }

  if (end < 0) {
    lastParameter = array.length + end;
  }

  if (typeof end === "undefined") {
    lastParameter = array.length;
  }

  for (i = firstParameter; i < lastParameter; i++) {
    newArr.push(array[i]);
  }

  return newArr;
};

module.exports = customsSlice;
