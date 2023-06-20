// 2.Math Object:

// a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

function calculateSquareRootSum(numbers) {
  const sumOfSquares = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
  const squareRoot = Math.sqrt(sumOfSquares);
  return squareRoot;
}

// Example usage:
const inputNumbers = [2, 3, 4];
const result = calculateSquareRootSum(inputNumbers);
console.log(result);

// b. Implement the function to display the square root of the sum of squares for an array of numbers

function calculateSquareRootSum(numbers) {
  const sumOfSquares = numbers.reduce((sum, num) => sum + Math.pow(num, 2), 0);
  const squareRoot = Math.sqrt(sumOfSquares);
  return squareRoot;
}

// Example usage:
const input = [2, 3, 4];
const res = calculateSquareRootSum(input);
console.log(res);
