module.exports = function(n) {
  var primeArray = [2];
  let number = 3;
  let div;
  let i = undefined;
  let limit = undefined;
  let isPrime = undefined;

  while (primeArray.length < n) {
    div = 3;
    i = 1;
    limit = Math.sqrt(number) + 1;
    isPrime = true;

    while (div < limit) {
      if (number % div === 0) {
        isPrime = false;
        div = limit;
      } else div = primeArray[i++] || div + 2;
    }

    if (isPrime) {
      primeArray.push(number);
    }
    number += 2;
  }

  return primeArray[primeArray.length - 1];
};
