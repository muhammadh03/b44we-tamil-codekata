// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// // console.log(array);

// // console.log(array[0]);

// for (let index = 0; index<array.length ; index++){
//     console.log(array[index]);
// }
// id, name, place, solvedNoOfProblems, totalScore300, isEligibleNextRound, solvedProblems
// let person = [47, 'krish', 'chennai', 3, 243.56, true, [81.19, 78.19, 84.19]];

// console.log(array);

// console.log(array[0]);

// for (let index = 0; index<array.length ; index++){
//     console.log(array[index]);
// }

// let person = [47, 'krish', 'chennai', 3, 243.56, true, [81.19, 78.19, 84.19]];
// console.log('index', ':', 'value');
// for (let index = 0; index < person.length; index++){
//     console.log(index, ':', person[index]);
// }

// console.log(person[6][0], person[6][1], person[6][2]);

// let names = ['id', 'name', 'place', 'solvedNoOfProblems', 'totalScore300', 'isEligibleNextRound', 'solvedProblems'];
// let person = [47, 'krish', 'chennai', 3, 243.56, true, [81.19, 78.19, 84.19]];

// let [id, name, place, solvedNoOfProblems, totalScore300, isEligibleNextRound, solvedProblems] = [47, 'krish', 'chennai', 3, 243.56, true, [81.19, 78.19, 84.19]];

// for (let index = 0; index < names.length; index++){
//     console.log(names[index], ':', person[index]);
// }

// console.log(id, name, place);

// let array = [1, 2, 3, 4, 5, 6];

// console.log(array.length); 

// methods

// array.push(7);

// console.log(array);

// array.push(10);

// console.log(array);

// let array = [1, 2, 3, 4, 5, 6];

// array.pop(); // in-place
// array.pop();
// array.pop();

// console.log(array);

// let array = [1, 2, 3, 4, 5, 6];

// array.unshift(10);
// array.unshift(11, 12);

// console.log(array);

// let array = [1, 2, 3, 4, 5, 6];

// let first = array.shift();

// console.log(first, array);

// let array = [1, 2, 3, 4, 5, 6];

// array.splice(2, 2, 10);

// console.log(array);

// let array = [1, 2, 3, 4, 5, 6];

// array[6] = 7;

// console.log(array);

// let array = [1, 2, 3, 4, 5, 6];

// let string = array.join(',');

// console.log(string, typeof(string));

// function comparator(a, b) {
//     return a - b;
// }

// let compare = (a, b) => {
//     return b - a;
// }

// let array = [5, 2, 7, 1, 6, 3, 4, 10, 16, 28, 34, 101];

// array.sort(compare);

// console.log(array);

// to insert an item at index 2
// splice

// function splice(array, index, value) {
//     for (let i = array.length; i > index; i--){
//         array[i] = array[i - 1];
//     }
//     array[index] = value;
// }

// let array = [1, 2, 3, 4, 5, 6];
// let index = 2;
// let value = 10;

// splice(array, index, value);
// console.log(array);


// let mapper = (item) => {
//     if (item == 2 || item == 7)
//     {
//         return item ** 2;    
//     } else
//     {
//         return item;
//     }
// };

// let array = [5, 2, 7, 1, 6, 3, 4];

// array = array.map(mapper);

// console.log(array);

// let mapper = (item) => {
//     return item += 11;
// };

// function map(array, mapper) {
//     let result = [];
//     for (let i = 0; i < array.length; i++){
//         result.push(mapper(array[i]));
//     }
//     return result.join(' ');
// }

// let array = [5, 2, 7, 1, 6, 3, 4];

// let array1 = map(array, mapper);

// console.log(array1);

// let array = [1, 2, 3, 4, 5, 6];

// let string = array.join(',');

// console.log(string, typeof (string));

// console.log(string[0], string[1], string[2]);

// let language = 'J@va$cr1@t';

// console.log(language[0], language[1], language[2], language[3]);

// console.log(language.length, language);

// let language = 'javascript   is a programming language';

// console.log(language.split('   '));

// let array = [1, 2, 3, 4, 5];
// let array1 = [6, 7, 8, 9, 10];

// console.log(array.join(' '));

// let array = ['a', 'p', 'p', 'l', 'e'];

// console.log(array.join('').split(''));