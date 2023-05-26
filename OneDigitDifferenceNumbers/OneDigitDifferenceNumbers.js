
const prompt = require('prompt-sync')();
/**
 * isPrime function
 * @param {number} num - The number to check for primality
 * @returns {boolean} - Indicates whether the number is prime or not
 * @description Function to check if the number is prime or not
 */
function isPrime(number) {
    let num = parseInt(number);
    if (num === 1) return false; // 1 is not a prime number
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If the number is divisible by any other number, it is not prime
    }
    return true; // The number is prime if it passes all the checks
}

/**
 * countOneDigitDifferenceNumber function
 * @param {string} currentNumber - The current number being evaluated
 * @param {object} answer - An object to store the count of one-digit-difference numbers
 * @param {number} range - The maximum range of numbers to consider
 * @description Recursive function to find the number of one-digit-difference numbers
 */
function countOneDigitDifferenceNumber(currentNumber, answer, range) {
    if (currentNumber.length > range) 
        return; // Stop recursion if the number length exceeds the range
    if (isPrime(currentNumber)) 
        answer.count++; // if the last digit is 0, then there is only one next possible digit i.e 1
    if (currentNumber[currentNumber.length - 1] === '0') {
        // if the last digit is 0, then there is only one next possible digit i.e 1
        countOneDigitDifferenceNumber(currentNumber + '1', answer, range);
    } else if (currentNumber[currentNumber.length - 1] === '9') {
        // if the last digit is 9, then there is only one next possible digit i.e 8
        countOneDigitDifferenceNumber(currentNumber + '8', answer, range);
    } else {
        // else there are two possible digits i.e currentNumber+1 and currentNumber-1
        const lastDigit = parseInt(currentNumber[currentNumber.length - 1]);
        countOneDigitDifferenceNumber(currentNumber + (lastDigit + 1), answer, range);
        countOneDigitDifferenceNumber(currentNumber + (lastDigit - 1), answer, range);
    }
}
/**
 * validateInput function
 * @param {number} input - The input to be validated
 * @returns {boolean} - Indicates whether the input is valid or not
 * @description Function to validate the input
 */
module.exports.validateInput = (input) => {
    /*
    * The input should be an integer
    * The input should be greater than 0
    * The input should be less than 30
    * 
    */
    if (!Number.isInteger(input) || input < 0 || input > 30) {
        return false;
    }
    return true;
}

/**
 * solution function
 * @param {number} range - The maximum range of numbers to consider
 * @returns {number} - The number of one-digit-difference numbers
 * @description Function to find the number of one-digit-difference numbers
 * 
 */
// module.exports.solution = async (range) => {
//     let answer = {count : 0};
//     return new Promise((resolve, reject) => {
//         for (let i = 1; i < 10; i++) {
//             countOneDigitDifferenceNumber(i.toString(), answer, range);
//           }
//         console.log(answer.count);
//         resolve(answer.count);
//     });
// }
module.exports.solution = async (range) => {
    let answer = { count: 0 };
    return new Promise((resolve, reject) => {
        for (let i = 1; i < 10; i++) {
            countOneDigitDifferenceNumber(i.toString(), answer, range);
        }
        console.log(answer.count);
        resolve(answer.count);
    });
};


 
  