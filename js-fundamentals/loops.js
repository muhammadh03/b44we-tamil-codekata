// for (let counter = 5; counter > 0; counter--){
//     console.log('welcome');
// }
// let counter = 5;
// for (; counter > 0 ;){
//     console.log('welcome');
//     counter--;
// }

// let initialization = 0;
// let increment = 0;
// let counter = 1;
// for ( initialization+=1; counter <= 5 ; counter++, increment++) {
//     console.log('welcome');
//     console.log(counter);
//     console.log(initialization, increment);
// }
// console.log(counter);
// console.log(initialization, increment);

// for loop example

// for (let i = 1; i <= 5; i++){
//     console.log('welcome');
// }

// while loop example
// let i = 1; // intilization
// while (i <= 5){
//     console.log('welcome');
//     i++; // increment / decrement
// }

// let i = 1; // intilization
// do {
//     console.log('welcome');
//     i++; // increment / decrement
// } while (i <= 5);

// let i = 1; // intilization
// do {
//     console.log('welcome');
// } while (i < 1);

// program to print natural numbers upto 10

// let number = 100;

// for (let i = 1; i <= number; i++){
//     console.log(i);
// }

// let number = 100;
// let i = number;
// for (; i >= 1; i-=10){
//     console.log(i);
// }
// let number;
// for (number = 100; number >= 1; number /= 10){
//     console.log(number);
// }

// console.log(number);

// program to print all the two powers

// for (let number = 1; number <= 100; number *= 2){
//     console.log(number);
// }
// let number = 2;
// for (let exponent = 0; 2 ** exponent <= 100; exponent++){
//     console.log(2 ** exponent);
// }
// let count = 0;

// for (let i = 1; i <= 50; i++){
//     for (let j = 1; j <= 30; j++){
//         console.log(j);
//         count++;
//     }
// }

// console.log(count);


// for...of loop

let array = [1, 2, 3, 4, 5];

// for (let number of array) {
//     console.log(number);
// }


// for...in loop

// for (let index in array) {
//     console.log(array[index]);
// }

array.forEach((number, index) => {
    console.log(index, ':', number);
});