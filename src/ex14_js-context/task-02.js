"use strict";

class Hangman {
  constructor(incomingword) {
    this.word = incomingword.split("");
    this.guessedSymbols = new Array(this.word.length).fill("_");
    this.wrongSymbols = new Array();
    this.counter = 6;

    this.guess = (value) => {
      let copyGuessed = this.guessedSymbols;
      let result = false;

      this.word.forEach((el, i) => {
        if (el === value) {
          copyGuessed[i] = el;
          result = true;
        }
      });
      if (result) {
        this.guessedSymbols = copyGuessed;
        console.log(this.countsResponse(result));
        return this;
      }
      this.counter--;
      this.wrongSymbols.push(value);
      console.log(this.countsResponse(result));
      return this;
    };

    this.getGuessedString = () => {
      return this.guessedSymbols.join("");
    };

    this.getErrorsLeft = () => {
      return this.counter;
    };

    this.getWrongSymbols = () => {
      return this.wrongSymbols;
    };

    this.getStatus = () => {
      return `${this.getGuessedString()} | errors left ${this.getErrorsLeft()}`;
    };

    this.startAgain = (newValue) => {
      this.word = newValue.split("");
      this.guessedSymbols = new Array(this.word.length).fill("_");
      this.wrongSymbols = new Array();
      this.counter = 6;
      return this;
    };

    this.countsResponse = (result) => {
      let win = !this.guessedSymbols.some(function (letter) {
        return letter === "_";
      });
      if (this.counter < 0) {
        return `You Lose!`;
      }
      if (win) {
        return `${this.getGuessedString()} | You Win!`;
      }
      if (result) {
        return this.getGuessedString();
      }
      return `wrong letter, errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols().join(",")}`;
    };
  }
}

let hangman = new Hangman("webpurple");

module.exports = hangman;
