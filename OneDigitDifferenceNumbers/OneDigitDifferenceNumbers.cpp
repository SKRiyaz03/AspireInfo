/**
 * @file Odd.cpp
 * @brief This file contains the code to find the number of one-digit-difference numbers under 10^n
 * @details The code is written in C++ language. The code is tested on Windows 10 with Visual Studio 2019.
 * @version 1.0
 * @date 2021-09-30
 * @author Shaik Riyaz
*/

/**
 * @file Odd.cpp
 * @brief This file contains the code to find the number of one-digit-difference numbers under 10^n
 * @details The code is written in C++ language. The code is tested on Windows 10 with Visual Studio 2019.
 * @version 1.0
 * @date 2021-09-30
 * @author Shaik Riyaz
*/


#include<iostream> // for input and output
#include<string> // for string operations
#include<chrono> // for calculating execution time
using namespace std;
/**
 * isPrime function 
 * @param num: string
 * @return bool
 * @description: function to check if the number is prime or not
 */
bool isPrime(string num) {
    // convert the string to long long as it is easier to check for prime and also to avoid overflow
    int n = stoll(num);

    // if the number is 1, then it is not prime
    if (n == 1) return false;

    // it is enough to check till sqrt(n) to check if the number is prime or not
    //reason: if n is not prime, then it can be written as n = a*b and either a or b is less than sqrt(n)
    for (int i = 2;i * i <= n;i++) {
        if (n % i == 0) 
            return false;
    }
    // number is not divisible by any number, so it is prime
    return true;
}


/**
 * oddNumbers function
 * @param currentNumber: string
 * @param count: int
 * @param range: int
 * @return void
 * @description recursive function to find the number of one-digit-difference numbers
 */
void oddNumbers(string currentNumber, int& count, int& range) {
   // base case if the num is greater than the 10 ^ range then stop the recursion
    if (currentNumber.size() > range)
        return;
    // if the number is prime, increment the count
    if (isPrime(currentNumber))
        count++;
    // if the last digit is 0, then there is only one next possible digit i.e 1
    if (currentNumber[currentNumber.size() - 1] == '0') {
        oddNumbers(currentNumber + '1', count, range);
    }
    // if the last digit is 9, then there is only one next possible digit i.e 8
    else if (currentNumber[currentNumber.size() - 1] == '9')
        oddNumbers(currentNumber + '8', count, range);
    // else there are two possible digits i.e n+1 and n-1
    else {
        // get the last digit
        int n = currentNumber[currentNumber.size() - 1] - '0';
        oddNumbers(currentNumber + to_string((n + 1)), count, range);
        oddNumbers(currentNumber + to_string((n - 1)), count, range);
    }
}
/**
 * main function
 * @description: main function to join all the modules.
 * @return 0
*/
int main() {
    
    // record the start time
    int count = 0, range;
    cin>>range;
    if(range <= 0)
        cout<<"Input is invalid try again."<<endl;
    auto start = chrono::high_resolution_clock::now();
    for (int i = 1; i < 10; i++) {
        oddNumbers(to_string(i), count, range);
    }
    // record the end time
    auto end = chrono::high_resolution_clock::now();
    cout << "No of one-digit-difference numbers under 10^" << range<<" are:" << count << endl;
    // calculate the execution time
    auto executionTime = chrono::duration_cast<std::chrono::milliseconds>(end - start);
    cout << "The execution time of the function is " << executionTime.count() << " milliseconds.\n";
}