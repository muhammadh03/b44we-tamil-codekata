// class Book {
//     constructor(name, author, price, noOfPages, ratings) {
//         this.name = name;
//         this.price = price;
//         this.author = author;
//         this.price = price;
//         this.noOfPages = noOfPages;
//         this.ratings = ratings;
//     }

//     averageRating() {
//         let sum = 0;
//         for (let rating of this.ratings) {
//             sum += rating;
//         }
//         return (sum / this.ratings.length).toFixed(1);
//     }
// }

// let book1 = new Book('xyz', 'abc', 868.32, 500, [3, 4, 5, 4.5, 5, 3.4]);
// let book2 = new Book('mnp', 'ghi', 1000, 400, [3.5, 4.5, 5.5, 4, 5.5, 3]);
// console.log(book1.averageRating());


// class A{
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     add(...args) {
//         if (args.length == 1) {
//             // accumulator is alone given
//             return this.x + this.y + args[0];
//         } else if (args.length == 2) {
//             // maxValue
//             if (this.x + this.y + args[0] <= args[1]) {
//                 return this.x + this.y + args[0];
//             } else {
//                 return args[1];
//             }
//         }
//     }   
// }

// // let object = new A(4, 5);

// let object = new A(3, 4);

// // console.log(object.add(14, 20));

//circular array
// let array = [1, 2, 3, 4, 5];

// console.log(array[7%array.length]);
