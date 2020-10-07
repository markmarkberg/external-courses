function getType(value) {
  const typeValue = typeof value;

  if (typeValue === "number" && !isNaN(value)) {
    return typeValue;
  }

  if (typeValue === "string") {
    return typeValue;
  }

  return undefined;
}

module.exports = getType;
