"use strict";

class Calculator {
  constructor() {
    this.value = 0;

    this.add = (n = 0) => {
      this.value += n;
      return this.add;
    };

    this.subtract = (n = 0) => {
      this.value -= n;
      return this.subtract;
    };

    this.divide = (n = 1) => {
      this.value /= n;

      return this.divide;
    };

    this.multiply = (n = 1) => {
      this.value *= n;

      return this.multiply;
    };

    this.reset = () => {
      this.value = 0;

      return this.reset;
    };

    this.getResult = () => {
      return this.value;
    };
  }
}

const calculator = new Calculator();

module.exports = calculator;
