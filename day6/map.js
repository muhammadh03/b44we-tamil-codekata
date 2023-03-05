// let array = [1, 2, 3, 4, 5];

// without map
// multiply by 2 all the elements in the array
// for (let index = 0; index < array.length; index++){
//     array[index] = array[index] * 2;
// }

// with map
// array = array.map((item) => {
//     return item * 2;
// });

// let multiplyBy2 = (item) => {
//     return item * 2;
// };

// let multiplyBy10100 = (item) => {
//     if (item % 2 != 0) {
//         return item * 10;
//     } else {
//         return item * 100;
//     }
// };

// array = array.map(multiplyBy10100);

// // print the array
// console.log(array);

// let array = [1, 2, 3, 4, 5];

// let arraySquared = array.map((value, index, array) => {
//     // console.log(value, index, array);
//     return value ** 2;
// });

// console.log(array);
// console.log(arraySquared);

// let sentence = 'the quick brown fox';

// // output: 'The Quick Brown Fox'
// let words = sentence.split(' ');

// console.log(words.map((word) => {
//     return (word[0].toUpperCase() + word.slice(1,));
// }).join(' '));

// let word = 'letsony';

// // console.log(word.slice(0, 3));
// let char = 's';

// let index = word.indexOf(char);

// console.log(word.slice(0, index) + word[index].toUpperCase() + word.slice(index+1, ));


// let input = '1 2 3 4 5 6';

// console.log(input.split(' ').map((item) => {
//     return parseInt(item);
// }));

