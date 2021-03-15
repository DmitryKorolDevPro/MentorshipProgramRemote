
// Write two solutions for each problem.
// _.1 in an iterative style (no higher-order functions)
// _.2 applying higher-order functions

// 1.
const arrBirthday = [1998, 1985, 2001, 2006];

//1.1
function findAgeIn2021(arr) {
    const arr2021 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2021.push(2021 - arr[i]);
    }
    return arr2021;
}
console.log(findAgeIn2021(arrBirthday));
//(4) [23, 36, 20, 15]

//1.2 hof
//create array fhat contain current age in 2021 with hof
function findAgeIn2021_hof(arr, fn) {
    const arr2021 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2021.push(fn(arr[i]));//call special func for calculate age 
    }
    return arr2021;
}
function findNowAge(elem) {
    const ageNow = 2021 - elem;
    return ageNow;
}
console.log(findAgeIn2021_hof(arrBirthday, findNowAge));
//(4) [23, 36, 20, 15]

//1.2.1 hof map
const arrAgeNow_hof = arrBirthday.map(function (elem) {
    return elem = (2021 - elem);
});
console.log(arrAgeNow);
//(4) [23, 36, 20, 15]

// 2.
//2.1
const arrPeople = [
    { name: 'Pedro Pascal', age: 45 },
    { name: 'Leonardo Dicaprio', age: 46 },
    { name: 'Thomas A. Anderson', age: 58 },
    { name: 'Millie Brown', age: 17 },
    { name: 'Harry Potter', age: 31 }
];
function findAdults(arr) {
    const arrOver18 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 18) {
            arrOver18.push(arr[i]);
        }
    }
    return arrOver18;
}
console.log(findAdults(arrPeople));
/*(4) [{…}, {…}, {…}, {…}]
0: {name: "Pedro Pascal", age: 45}
1: {name: "Leonardo Dicaprio", age: 46}
2: {name: "Thomas A. Anderson", age: 58}
3: {name: "Harry Potter", age: 31} */

//2.2 hof
function findAdults_hof(arr, fn) {
    const arrOver18 = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === undefined) i++;
        arrOver18.push(fn(arr[i]));
    }
    return arrOver18;
}
function more18(elem) {
    if (elem.age >= 18) return elem.name;
}
console.log(findAdults_hof(arrPeople, more18));
//(4) ["Pedro Pascal", "Leonardo Dicaprio", "Thomas A. Anderson", "Harry Potter"]

//2.2.1 hof filter
const findAdults_filter = arrPeople.filter(arrPeople => arrPeople.age >= 18);
console.log(findAdults_filter);
/*(4) [{…}, {…}, {…}, {…}]
0: {name: "Pedro Pascal", age: 45}
1: {name: "Leonardo Dicaprio", age: 46}
2: {name: "Thomas A. Anderson", age: 58}
3: {name: "Harry Potter", age: 31}*/


// 3.
//3.1
const arrNum = [34, 38, 45, 9, 23];
function findSumArrNumb(numb) {
    let sum = 0;
    for (let i = 0; i < numb.length; i++) {
        sum += numb[i];
    }
    return sum;
}
console.log(findSumArrNumb(arrNum));//149


//3.2.1 reduce________________________________
const sum = arrNum.reduce(function (accumulator, currentValue) { //.reduce(function(accum, currentValue, index[0...n], array) {
    return accumulator + currentValue;
});
console.log(sum);//25

//   4.
//4.1
const arrPeopleName = ['Pedro', 'Leonardo', 'Anderson', 'Millie', 'Harry'];

function findNameLength_hof(arr, fn) {
    const arrlen = [];
    for (let i = 0; i < arr.length; i++) {
        arrlen.push(fn(arr[i]));
    }
    return arrlen;
}
function retName(item) {
    return item.length;
}
const arrMap = findNameLength_hof(arrPeopleName, retName);
console.log(arrMap);
//4.2
const mapNameLength = arrPeopleName.map(function (name) {
    return name.length;
});
console.log(mapNameLength);//[5, 8, 8, 6, 5]


// Task for working with OOP:
// ES6
class Company {

    constructor(options) {
        this.name = options.name;
        this.vacation = options.vacation;
    }
    startVacation() { }
    finishVacation() { }
}
// Inheritance class
class PersonnelDep extends Company {

    startVacation() {//Polymorphism shows which version of method should be run
        this.vacation = true;
        console.log(`I'm ${this.name}! I'm on vacation! :D`) //
    }
    finishVacation() {
        this.vacation = false;
        console.log(`${this.name} at work...`);
    }

    get getAdvice() {//encapsulation
        let getInspirit = `${this.name} were inspired...`
        return console.log(getInspirit);//you were inspired...

    }
}

// Inheritance class
class Students extends PersonnelDep {
    constructor(options) {
        super(options);
        this.task = options.task;
    }
    //Polymorphism shows which version of method should be run
    startVacation() {//New method will clear parenth if i want to call parenth method should be used super.makeVacation()
        this.vacation = true;
        //super.startVacation();
        console.log(`I'm ${this.name}! I'm on holiday! :D`);
    }
    finishVacation() {
        this.vacation = false;
        console.log(`holiday is done :( ${this.name} at work...`);
    }

    homeworkCheck(options) {
        let needTask = 0;
        this.task = options;
        console.log('Need to do ' + (needTask = 14 - options) + ' task for ' + this.name);
    }
}
const student1 = new Students({
    name: 'Dima',
    task: 0,
    vacation: false
})
const student2 = new Students({
    name: 'Lana',
    task: 0,
    vacation: false
})
const mentor = new PersonnelDep({
    name: 'Dmitry',
    vacation: false,
})

student1.startVacation();   // I'm Dima! I'm on holiday! :D
student2.finishVacation();  //holiday is done :( Lana at work...
student2.homeworkCheck(5);  //Need to do 9 task for Lana
student2.getAdvice;         //Lana were inspired...
mentor.startVacation();     //I'm Dmitry! I'm on vacation! :D


//_____________________ prototypes______________________
function Company2() { //abstract class (constructor)
    this.name = null;
    this.vacation = false;
}
Company2.prototype.startVacation = function () { };
Company2.prototype.finishVacation = function () { };

function PersonnelDep2(name, vacation) { //Inheritance Class from Company2
    Company2.call(this);
    this.name = name;
    this.vacation = vacation;
}
PersonnelDep2.prototype.startVacation = function () {//Polymorphism
    this.vacation = true;
    console.log(`I'm ${this.name}! I'm on vacation! :D`)
}
PersonnelDep2.prototype.finishVacation = function () {
    this.vacation = false;
    console.log(`${this.name} at work...`);
}
PersonnelDep2.prototype.getAdvice = function () {//encapsulation(not work)
    let getInspirit = `${this.name} were inspired...`
    return console.log(getInspirit);
}
function Students2(name, task, vacation) { //Inheritance Class from PersonnelDep2
    PersonnelDep2.call(this, task);

    this.name = name;
    this.task = task;
    this.vacation = vacation;
}
Students2.prototype.startVacation = function () {//Polymorphism
    this.vacation = true;
    console.log(`I'm ${this.name}! I'm on holiday! :D`);
}
Students2.prototype.finishVacation = function () {
    this.vacation = false;
    console.log(`holiday is done :( ${this.name} at work...`);
}
Students2.prototype.homeworkCheck = function (options) {
    let needTask = 0;
    this.task = options;
    console.log('Need to do ' + (needTask = 14 - options) + ' task for ' + this.name);
}
const student1_2 = new Students2('Dima', 0, false);
const student2_2 = new Students2('Lana', 0, false);
const mentor2 = new PersonnelDep2('Dmitry', false,);
//___________

student1_2.startVacation();   // I'm Dima! I'm on holiday! :D
student2_2.finishVacation();  //holiday is done :( Lana at work...
student2_2.homeworkCheck(5);  //Need to do 9 task for Lana
student2_2.getAdvice;         //Lana were inspired... (not work)
mentor2.startVacation();     //I'm Dmitry! I'm on vacation! :D

//_________________________________________________
// Functional programming task:
// Function side effect 
function randomNumber(min, max) {// function will be returned as a result different values
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomNumber(1, 10));

// Partial function application
const multiply = function (x, y) {
    return x * y;
}
const multiply2 = multiply.bind(null, 2)// if will be passed argument 'null', the context will not bound with 'this'
// this mean that value null(x = thisArg) & 2(y = arg1)
console.log(multiply2(3)) // 6
console.log(multiply2(4)) // 8
console.log(multiply2(5)) // 10

//First-Class & Pure function
let timeMinut = function (min) {
    return min * 60;
};

//Higher-order Functions & Shared State (use with timeMinut())
function greeting(nameInput) {
    alert('Hello ' + nameInput + ' you have ' + timeMinut(1) + ' seconds to finish your homework');// timeMinut exist in general scope
}
function userInput(callback) {
    let nameInput = prompt('Please enter your name:');
    callback(nameInput);
}
userInput(greeting); //Hello 'your namr' you have 60 seconds to finish your homework

// Unchanging state 
let line = "I am an immutable value";
let otherline = line.slice(10, 17);// i can to create new state
console.log(otherline); // 'mutable'

//Closures
function person() {
    let name = 'Julia';

    return function displayName() {
        console.log(name);
    };
}
let peter = person();
peter(); // 'Julia'

// Recursion
function factorial(x) {
    if (x < 0) throw Error("Cannot calculate factorial of a negative number");
    function iter(i, fact) {
        if (i === 0) return fact;
        else return iter(i - 1, i * fact);

    }
    return iter(x, 1);
}
factorial(5); // 120