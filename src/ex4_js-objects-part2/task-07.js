const truncatesALongString = (string, num) => {
  return `${string.slice(0, num - 1)}…`;
};

module.exports = truncatesALongString;
