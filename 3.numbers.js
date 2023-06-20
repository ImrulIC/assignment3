// 3.Numbers:

// a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const inputNumber = 17;
const isInputPrime = isPrime(inputNumber);
console.log(isInputPrime);

// b. Implement the function to check if a given positive integer is a prime number.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  // Check divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const input = 23;
const isInputPrimeNumber = isPrime(input);
console.log(isInputPrimeNumber);
