function getDeepCopyInObject(obj) {
  let newObj = {};

  if (Array.isArray(obj)) {
    newObj = [];
  }
  for (let key in obj) {
    newObj[key] = obj[key];
    if (typeof obj[key] === "object") {
      newObj[key] = getDeepCopyInObject(obj[key]);
    }
  }
  return newObj;
}

module.exports = getDeepCopyInObject;
