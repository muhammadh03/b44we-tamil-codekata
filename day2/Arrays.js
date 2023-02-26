// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(array[1]);

// console.log(array.length);

// console.log(array[array.length-1]);
// method 1

// for (let index = 0; index <= array.length - 1; index++) {
//     console.log(array[index]);
// }

// for (let index = array.length - 1; index >=0 ; index--) {
//     console.log(array[index]);
// }

// array.reverse(); // to reverse the array

// for (let index = 1; index <= array.length - 1; index+=2) {
//     console.log(array[index]);
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// method 2
// for (let item of array) {
//     console.log(item);
// }

// method 3
// for (let index in array) {
//     console.log(index, array[index]);
// }

// method 4

// let index = 0;
// while ( index <= array.length - 1) {
//     console.log(array[index]);
//     index++;
// }

// method 5

// let index = 0;
// do {
//     console.log(array[index]);
//     index++;
// } while (index <= array.length - 1);

// method 6

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.forEach(element => {
//     console.log(element);
// });

// array.reverse();

// console.log(array);

let book = {
    'pages': 50,
    'price': 34.76,
    'author': 'krish',
    'color': 'blue',
    'profits': [34, 12, 56]
};

// console.log(book['author']);

// console.log(Object.keys(book));

// for (let key of Object.keys(book)) {
//     console.log(`${key} : ${book[key]}`);
// }

// console.log(Object.values(book));

// for (let value of Object.values(book)) {
//     console.log(`${value}`);
// }

// console.log(Object.entries(book));

// for (let [key, value] of Object.entries(book)) {
//     console.log(`${key} : ${value}`);
// }

// for (let key in book) {
//     console.log(`${key} : ${book[key]}`);
// }

let count = {
    0: 1,
    1: 2,
    2: 3
}

console.log(count[0]);