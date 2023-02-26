let array = [7, 2, 3, 4, 6, 1, 5];

// array.sort((a, b) => a - b);

// function sorter(a, b) {
//     return a - b;
// }

let sorter = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

array.sort(sorter);

console.log(array);

let dictionary = ["apple", "aeroplane", "airpods", "aerospace", "aeronautics", "aesthetics", "animal", "avacado"];

dictionary.sort(sorter);

console.log(dictionary);

let chars = ['g', 'e', 'i', 'a', 'b'];

chars.sort(sorter);

console.log(chars);