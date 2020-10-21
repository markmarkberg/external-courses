const customSlice = (array, start = 0, end = array.length) => {
  let newArray = [];

  if (start < 0) {
    start += array.length;
  }

  if (Math.abs(start) > Math.abs(array.length)) {
    start = 0;
  }

  if (end < 0) {
    end += array.length;
  }

  if (Math.abs(end) > Math.abs(array.length)) {
    end = array.length;
  }

  for (let i = start; i < end; i++) {
    newArray.push(array[i]);
  }

  return newArray;
};

module.exports = customSlice;
