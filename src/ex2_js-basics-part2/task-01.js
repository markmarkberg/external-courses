function getType(value) {
  const valuesNumber = typeof value === "number" && !isNaN(value);

  const valuesString = typeof value === "string";

  if (valuesNumber) {
    return "number";
  }

  if (valuesString) {
    return "string";
  }

  return undefined;
}

module.exports = getType;
