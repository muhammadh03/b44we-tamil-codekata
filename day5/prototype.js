// let Person = {
//     sayHello: function(){
//         console.log('hello');
//     }
// }

// // console.log(Person);

// let john = new Person('john', 25);

// john.sayHello();

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let john = new Person('john', 25);
// let vijay = new Person('vijay', 30);

// console.log(vijay);

// console.log(new Person('john', 24));
// let john = Object.create(Person);
// // john.name = 'john';
// john.age = 24;
// john.salary = 10000;
// console.log(john.sayHello());

// let labels = ['name', 'age', 'email', 'mobile number', 'address'];
// let studentsNames = [['ajey', 25, 'ajey@gmail.com', '28343843974', 'addfreesf'], []];

// class Student{
//     constructor(name, age, email, mobile, address){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.mobile = mobile;
//         this.address = address;
//     }
// }

// function addStudent(){
//     // get the student details
//     let name = 'john';
//     let age = 25;
//     let email = 'john@gmail.com';
//     let mobile = '9762312455';
//     let address = 'chennai';

//     // create an object
//     let object = new Student(name, age, email, mobile, address);

//     // push the details to the array
//     return object;
// }

// class Student{
//     constructor(name, age, email, mobile, address){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//         this.mobile = mobile;
//         this.address = address;
//     }
// }

// class WeekendStudent extends Student {
//     constructor(name, age, email, mobile, address, hours){
//         super(name, age, email, mobile, address);
//         this.hours = hours;
//     }
// }

// let name = 'john';
// let age = 25;
// let email = 'john@gmail.com';
// let mobile = '9762312455';
// let address = 'chennai';
// let hours = 'weekends';

// let john = new WeekendStudent(name, age, email, mobile, address, hours);

// // let john = new WeekendStudent();

// console.log(john);

// let students = [];

// students.push(addStudent());

// console.log(students[0].name);

