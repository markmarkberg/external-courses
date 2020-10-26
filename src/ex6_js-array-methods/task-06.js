const customReduce = (array, callback, initialValue) => {
  const start = initialValue !== undefined ? 0 : 1;

  for (let i = start; i < array.length; i++) {
    initialValue = callback(
      initialValue !== undefined ? initialValue : array[0],
      array[i],
      i,
      array
    );
  }

  return initialValue;
};

module.exports = customReduce;
