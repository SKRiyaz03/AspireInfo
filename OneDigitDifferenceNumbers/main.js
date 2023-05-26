const readlineSync = require('readline-sync');
let oddNumber = require('./OneDigitDifferenceNumbers.js');
/**
 * main function
 * @description main function to join all the modules.
 */
async function main() {
    let range = parseInt(readlineSync.question('Enter the range: '));

    // validate the input
    if (!oddNumber.validateInput(range)) {
        console.log('Invalid input. Please try again.');
        return;
    }

    // start time
    const start = process.hrtime.bigint();

    // call the solution function
    let answer = await oddNumber.solution(range);

    // end time
    const end = process.hrtime.bigint();
    console.log(`No of one-digit-difference numbers under 10^${range} are: ${answer}`);
    const executionTime = (end - start) / BigInt(1e6);
    console.log(`The execution time of the function is ${executionTime} milliseconds.`);
}


  
// Call the main function
main();