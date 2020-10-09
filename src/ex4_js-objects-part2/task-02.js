const createObjectWithoutPrototype = (object) => {
  return Object.create(null);
};

module.exports = createObjectWithoutPrototype;
