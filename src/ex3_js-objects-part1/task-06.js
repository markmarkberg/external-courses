function getDeepCopyInObject(obj) {
  let newObj = {};

  if (Array.isArray(obj)) {
    newObj = [];
  }

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key] = getDeepCopyInObject(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

module.exports = getDeepCopyInObject;
