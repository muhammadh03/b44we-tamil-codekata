// let sayHello = (name) => {
//     console.log(`hello ${name}`);
// };

// let sayHello = name => console.log(`hello ${name}`);

// let sayHello = (name = 'guest') => {
//     console.log(`hello ${name}`);
// };

// sayHello('krish');
// sayHello();

// let array = [1, 2, 3, 4, 5];

// let squares = array.map((item) => item**2);

// console.log(squares);

// let mapper = (item) => {
//     return item ** 2;
// };

// let array = [1, 2, 3, 4, 5];

// let squares = array.map(mapper);

// console.log(squares);

// let array = [1, 2, 3, 4, 5];

// let squares = array.map((item) => {
//     return item ** 2;
// });

// console.log(squares);

let array = [1, 2, 3, 4];
let toPush = [1, 3, 5, 6, 7, 8, 9, 9, 0, 7, 5, 4, 3, 2, 2, 4];

array.push(...toPush);

console.log(array);