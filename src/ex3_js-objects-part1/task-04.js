function checksTheItemInTheObject(string, obj) {
  if (!obj.hasOwnProperty(string)) {
    obj[string] = "new";
  }

  return obj;
}

module.exports = checksTheItemInTheObject;
