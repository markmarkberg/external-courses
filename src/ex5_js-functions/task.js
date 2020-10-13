const createCalculator = () => {
  let value = 0;

  const add = (n = 0) => {
    value += n;

    return add;
  };

  const subtract = (n = 0) => {
    value -= n;

    return subtract;
  };

  const divide = (n = 1) => {
    value /= n;

    return divide;
  };

  const multiply = (n = 1) => {
    value *= n;

    return multiply;
  };

  const reset = (n) => {
    return (value = 0);
  };

  const getResult = () => {
    return value;
  };

  return { add, divide, subtract, multiply, reset, getResult };
};

const Calculator = createCalculator();

module.exports = Calculator;
