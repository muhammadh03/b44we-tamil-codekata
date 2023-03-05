// let array = [1, 2, 3, 4, 5, 6, 7];

// // find the sum of the array
// let sum = 0;

// for (let number of array) {
//     sum = sum + number;
// }

// console.log(sum);

// let sum = array.reduce((previousValue, currentValue) => {
//     // console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// });

// console.log(sum);

// let array = [1, 2, 3, 4, 5, 6, 7];
// let intialValue = 10;
// let sum = array.reduce((previousValue, currentValue) => {
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// }, intialValue);

// console.log(sum);

// let array = [2, 4, 1, 2, 4, 5, 3, 2, 3, 4, 5];

// remove the duplicates
// let arrayWithoutDuplicates = array.reduce((previousValue, currentValue) => {
//     console.log(previousValue, currentValue);
//     if (!previousValue.includes(currentValue)) {
//         return [...previousValue, currentValue];
//     } else {
//         return previousValue;
//     }
// }, []);

// console.log(arrayWithoutDuplicates);

// let array = [2, 4, 1, 2, 4, 5, 3, 2, 3, 4, 5];

// let arrayWithoutDuplicates = [];

// for (let number of array) {
//     if (!arrayWithoutDuplicates.includes(number)) {
//         arrayWithoutDuplicates.push(number);
//     }
// }

// console.log(arrayWithoutDuplicates);