// 1_______ Напишите два решения для каждой проблемы.
//   - в итеративном стиле (без функций высшего порядка)
//   - применение функций высшего порядка
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


//  ______________Task for working with OOP:_______________
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
        console.log(`I'm on vacation! :D`) //
    }
    finishVacation() {
        this.vacation = false;
        console.log(`I'm at work...`);
    }

    get getAdvice() {//encapsulation
        let getInspirit = 'you were inspired...'
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
        console.log(`I'm on holiday! :D`);
    }
    finishVacation() {
        this.vacation = false;
        console.log(`holiday is done :(`);
    }

    homeworkCheck(options) {
        let needTask = 0;
        this.task = options;
        console.log('Need to do ' + (needTask = 14 - options) + ' task');
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

student1.startVacation();// .startVacation(false) - (holiday is done :( )
//                          .startVacation(true) - (I'm on holiday! :D)
student1.getAdvice();

// prototypes



//  ________ Functional programming task________

// Higher-order functions +
// First class functions +
// Pure functions +
// Function side effect +
// Unchanging state
// Shared State
// Closures
// Recursion
// Partial function application
//First-Class and Pure function
const timeMinut = function (min) {
    return min * 60;
};
//Higher-order Functions
function startTimer(timeMinut) {
    seconds = timeMinut % 60 // got second
    minutes = timeMinut / 60 % 60 // got minute
    hour = timeMinut / 60 / 60 % 60 // got hour
    // if time gone...
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert('Time is over.');
    } else {
        // time output
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        console.log(strTimer);
    }
    --timeMinut; // decrement for timer
}
//timer = setInterval(, 1000);