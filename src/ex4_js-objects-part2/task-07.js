const truncatesALongString = (string, num) => {
  if (string.length > num) {
    return `${string.slice(0, num - 1)}…`;
  }

  return string;
};

module.exports = truncatesALongString;
