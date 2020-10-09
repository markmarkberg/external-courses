const searchInPrototype = (prop, obj) => {
  if (obj[prop] && !obj.hasOwnProperty(prop)) {
    return obj[prop];
  }
};

module.exports = searchInPrototype;
