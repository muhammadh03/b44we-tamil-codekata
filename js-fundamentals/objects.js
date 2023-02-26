// let person = {
//     name: 'krish',
//     age: 20,
//     salary: 10000,
//     score: 123,
//     percentage: 85.67,
//     isEligbleNextRound: true,
//     problems: [67, 89, 98],
//     noOfProblems: 3,
//     monthlyPerformance: {
//         arrays: 30,
//         strings: 20,
//         maths: 10,
//         beginner: 15
//     }
// };

// console.log(person);

// console.log(person.name, person['name']);

// person.age = 25;

// person['age'] = 25;

// console.log(person);

// console.log(Object.keys(person));

// console.log(Object.values(person));

// console.log(Object.entries(person));

// console.log(Object.keys(person.monthlyPerformance));

// let arrayOfObjects = [
//     {
//         id: 67,
//         color: 'red'
//     },
//     {
//         id: 45,
//         color: 'green'
//     },
//     {
//         id: 12,
//         color: 'blue'
//     }
// ];

// for (let i = 0; i < arrayOfObjects.length; i++) {
//     let object = arrayOfObjects[i];

//     console.log(object);
// }

// arrayOfObjects.sort((a, b) => a['id'] - b['id']);

// console.log(arrayOfObjects);

// let array1 = [1, 2, 3];

// let array2 = [1, 2, 3, 3];

// let array = [1, 2, 3, 4, 5];

// let squares = array.map((item) => {
//     return item ** 2;
// });

// console.log(squares);
// console.log(array);

// let array = [5, 2, 3, 6, 8, 9, 4, 2, 2, 4, 5, 7, 8];

// array.sort((a, b) => a - b);

// console.log(array);

// let array = [1, 2, 3, 500, 20, 10, 11, 100, 30];

// array.sort();

// console.log(array);

// let words = ['box', 'red', 'green', 'apple', 'orange', 'iphone'];

// // let numbers = [4, 2, 3, 56, 7, 8, 5, 3];

// // words.sort((a, b) => a - b);

// function sorter(first, second) {
//     if (first < second) {
//         return 1;
//     } else if (first > second) {
//         return -1;
//     } else {
//         return 0;
//     }
// }


// words.sort(sorter);

// console.log(words);

// numbers.sort(sorter);

// console.log(numbers);

// let first = 'apple';
// let second = 'appim';

// let color1 = 'red';
// let color2 = 'green';

// let colors = [color1, color2, 'blue'];

// console.log(colors);

// let person = {
//     name: 'krish',
//     age: 20,
//     salary: 10000,
//     score: 123,
//     percentage: 85.67,
//     isEligbleNextRound: true,
//     problems: [67, 89, 98],
//     noOfProblems: 3,
//     monthlyPerformance: {
//         arrays: 30,
//         strings: 20,
//         maths: 10,
//         beginner: 15
//     }
// };

// let array = [1, 2, 4, 5, 5];

// array.sort()

// let person = {
//     name: 'krish',
//     age: 20,
//     salary: 10000,
//     score: 123,
//     percentage: 85.67,
//     isEligbleNextRound: true,
//     problems: [67, 89, 98],
//     noOfProblems: 3,
//     monthlyPerformance: {
//         arrays: 30,
//         strings: 20,
//         maths: 10,
//         beginner: 15
//     }
// };

// for (let key in person) {
//     console.log(key, ':', person[key]);
// }

// for (let key of Object.keys(person)) {
//     console.log(key, ':', person[key]);
// }

// for (let value of Object.values(person)) {
//     console.log(value);
// }

// for (let entry of Object.entries(person)) {
//     console.log(entry[0], entry[1]);
// }

// for (let [key, value] of Object.entries(person)) {
//     console.log(key, value);
// }

// let numbers = [5, 6];

// let names = ['red', 'blue'];

// // let first = numbers[0];
// // let second = numbers[1];

// let [first, second] = names;

// console.log(first, second);

// let keys = [
//     'name',
//     'age',
//     'salary',
//     'score',
//     'percentage',
//     'isEligbleNextRound',
//     'problems',
//     'noOfProblems',
//     'monthlyPerformance'
// ];

// for (let key of keys) {
//     console.log(key, ':', person[key]);
// }

// console.log(Object.keys(person));

// const PI = 3.14;

// let Circle = {
//     radius: 7.321,
//     area: function () {
//         // pi * r^2
//         return Math.PI * this.radius ** 2;
//     },

//     circumference: function () {
//         return 2 * Math.PI * this.radius;
//     },

//     diameter: function () {
//         return 2 * this.radius;
//     }
// }

// console.log(Circle.diameter());

// console.log(Math.E);