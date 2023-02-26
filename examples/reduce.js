// function reducer(previous, current) {

//     console.log(previous, current);
//     return previous + current;
// }

// let array = [1, 2, 3, 4, 5, 6];
// let initialValue = 10;

// let sumOfArray = array.reduce(reducer, initialValue);

// console.log(sumOfArray);

function reducer(previous, current) {

    console.log(previous, current);
    if (!previous.includes(current)) {
        return [...previous, current];
    } else {
        return previous;
    }
}

let array = [1, 2, 3, 4, 5, 6, 1, 1, 2, 2, 3, 4, 2, 10];
let initialValue = [];

let sumOfArray = array.reduce(reducer, initialValue);

console.log(sumOfArray);