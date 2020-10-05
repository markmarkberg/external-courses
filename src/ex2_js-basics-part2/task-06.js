function checksPrime(elem) {
  if (elem < 2) {
    return `Введите число больше 1.`;
  } else if (elem > 1000) {
    return `Данные неверны`;
  }

  for (let i = 2; i < Math.sqrt(elem); i++) {
    if (elem % i === 0) {
      return `Число ${elem} - составное число`;
    }
  }

  return `Число ${elem} - простое число`;
}

module.exports = checksPrime;
