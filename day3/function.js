// function declaration / definition
// functionkeyword functionname(arg1, arg2, arg3, ....)
// function add() {
//     console.log('add function called');
// }

// // function call
// add();


// function add(x, y=0) {
//     console.log(`sum of ${x} and ${y} is ${x + y}`);
// }

// // function call
// add(5);
// add(1212, 335);

// function add(x, y=0) {
//     return x + y; // terminates the function
//     // console.log('dead code/unreachable code');
// }

// // function call
// // console.log(`sum of ${5} and ${6} is ${add(5, 6)}`);
// console.log(add(5, 6));
// // add(1212, 335);

// 5 + 6 * 4 / 2

// console.log(5 + 6 * 4 / 2 - 12); // result = 17

// function add(x, y) {
//     return x + y;
// }

// let mul = function(x, y) {
//     return x * y;
// }

// let div = (x, y) => {
//     return x / y;
// }

// console.log(add(div(mul(6, 4), 2), 5));

function findSum(array) {
    // find the sum of the array
    // and return the sum
    let sum = 0;
    for (let number of array) {
        sum = sum + number;
    }
    return sum;
}

function findNumberOfElements(array) {
    // return the number of elements in the array
    return array.length;
}

function findAverage(sum, numberOfElements) {
    return sum / numberOfElements;
}

let array = [1, 2, 3, 4, 5];

// find the average of the values in the array

// 1. find the sum of the elements in the array
let sum = findSum(array);

// 2. find the number of elements in the array
let numberOfElements = findNumberOfElements(array);

// 3. find the average
let average = findAverage(sum, numberOfElements);

console.log(average);


