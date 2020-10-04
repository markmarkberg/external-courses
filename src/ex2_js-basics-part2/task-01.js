function getType(value) {
  if (typeof value === "number" && !isNaN(value)) {
    return "number";
  }
  if (typeof value === "string") {
    return "string";
  }
  
  return undefined;
}

module.exports = getType;