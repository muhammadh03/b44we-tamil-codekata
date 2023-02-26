let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// add value of 10 to all the items of the array

// without map method

// for (let i = 0; i < array.length; i++){
//     array[i] = array[i] + 10;
// }

// with map method

array = array.map((item) => item + 10);

console.log(array);