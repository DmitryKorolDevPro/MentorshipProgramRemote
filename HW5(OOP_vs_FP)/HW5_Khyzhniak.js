// 1. Iterative style
log('--- TASK #1 | IMPERATIVE STYLE ---');

function imperativeStyle() {
  // We have an array containing the year of birth of some people, and we need to create an array that will contain their age in 2020
  const birthDates = [2001, 2000, 1992, 1969, 2010];
  const howOldIn2020 = [];

  for (let i = 0; i < birthDates.length; i++) {
    howOldIn2020.push(2020 - birthDates[i]);
  }
  console.log(howOldIn2020); // [19, 20, 28, 51, 10]

  // We have an array containing objects, the properties of which store information about the name and age of representatives of a certain group of people.
  // We need to create an array, which will contain information only about the adult representatives of this group (those whose age has reached 18 years old)
  const groupOfPeople = [
    { name: 'Dmytro', age: 19},
    { name: 'Andrew', age: 21},
    { name: 'John', age: 5},
    { name: 'Kate', age: 15},
    { name: 'Matthew', age: 60},
  ];

  const adultGroupOfPeople = [];

  for (let i = 0; i < groupOfPeople.length; i++) {
    if (groupOfPeople[i].age >= 18) adultGroupOfPeople.push(groupOfPeople[i]);
  }

  console.log(adultGroupOfPeople); // [{ name: 'Dmytro', age: 19}, { name: 'Andrew', age: 21}, { name: 'Matthew', age: 60}]

  // Let's say we have an array of numbers. We need to calculate the sum of its elements.
  const someNumbers = [10, 20, 30, 50, 100];
  let sum = 0;

  for (let i = 0; i < someNumbers.length; i++) {
    sum += someNumbers[i];
  }

  console.log(sum); // 210

  // Let's say JavaScript doesn't have a standard array method map().
  // We can easily create such a method on our own, which will be expressed in the development of a higher-order function

  // Suppose we have an array of strings, and we would like to create an array with numbers on its basis,
  // each of which represents the length of a string stored in some element of the original array.
  
  const getLength = str => str.length; // callback for our map;
  const someStrings = ['hi', 'yup', 'form', 'random', 'x']; // array of strings

  someStrings.customMap = function (callback) {
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i]));
    }

    return result;
  }

  console.log(someStrings.customMap(getLength)); // [2, 3, 4, 6, 1]
}
imperativeStyle();

// 2. Applying higher-order functions
log('--- TASK #1 | DECLARATIVE STYLE ---');

function declarativeStyle() {
  // We have an array containing the year of birth of some people, and we need to create an array that will contain their age in 2020
  const birthDates = [2001, 2000, 1992, 1969, 2010];

  const howOldIn2020 = birthDates.map(yearOfBirth => 2020 - yearOfBirth);
  console.log(howOldIn2020) // [19, 20, 28, 51, 10]

  // We have an array containing objects, the properties of which store information about the name and age of representatives of a certain group of people.
  // We need to create an array, which will contain information only about the adult representatives of this group (those whose age has reached 18 years old)
  const groupOfPeople = [
    { name: 'Dmytro', age: 19},
    { name: 'Andrew', age: 21},
    { name: 'John', age: 5},
    { name: 'Kate', age: 15},
    { name: 'Matthew', age: 60},
  ];

  const adultGroupOfPeople = groupOfPeople.filter(person => person.age >= 18);
  console.log(adultGroupOfPeople); // [{ name: 'Dmytro', age: 19}, { name: 'Andrew', age: 21}, { name: 'Matthew', age: 60}]

  // Let's say we have an array of numbers. We need to calculate the sum of its elements.
  const someNumbers = [10, 20, 30, 50, 100];
  let sum = someNumbers.reduce((sum, num) => sum + num);
  console.log(sum); // 210

  // Suppose we have an array of strings, and we would like to create an array with numbers on its basis,
  // each of which represents the length of a string stored in some element of the original array.
  
  const someStrings = ['hi', 'yup', 'form', 'random', 'x'];
  const lengthsOfStrings = someStrings.map(str => str.length);
  console.log(lengthsOfStrings); // [2, 3, 4, 6, 1]
}
declarativeStyle();

log('--- TASK #2 ---');
// The implementation and usefulness of ideas should be clearly demonstrated: Inheritance, encapsulation, polymorphism (as much as possible)
// Implement in two ways. With the help of the ES6 classes and with the help of prototypes.

log('--- TASK #2 | Classes ---');
function newScopeForTask2() {
  // Write an abstract class
  class User {
    constructor(nickname) {
      this.nickname = nickname ?? 'Guest';
      this.id = null;
      this.avatar = null;
      this.canWrite = null;
      this.isLogged = null;
      this.isAdmin = null;
    }

    login = function() {};
    logout = function() {};
    writeInChat = function() {}; // Polymorphism*
  }

  // Create two classes using inheritance (not abstract)
  class Guest extends User { // Inheritance
    constructor(nickname) {
      super(nickname);

      this.isLogged = false;
      this.canWrite = false;
    }
  }

  class RegistredUser extends Guest { // Inheritance
    constructor(nickname) {
      super(nickname);

      this.id = 'some id';
      this.avatar = 'some avatar';
      this.canWrite = true;
      this.isLogged = false;
      this.isAdmin = false;
    }

    login = function() {
      this.isLogged = true;
    };

    logout = function() {
      this.isLogged = false;
    };

    writeInChat = function(text) { // Polymorphism*
      console.log(text);
    };
  }

  class Administrator extends RegistredUser { // Inheritance
    constructor(nickname) {
      super(nickname);

      this.canWrite = true;
      this.isAdmin = true;
    }

    writeInChat = function(text) { // Polymorphism*
      alert(`*** ADMIN ***: ${text}`);
    };

    deleteMessages = function(id) {
      console.log(`Deleted message #${id}`);
    }
  }

  // Create instances of these classes
  const visitor = new Guest();
  console.log(visitor);

  const user = new RegistredUser('Anthony');
  console.log(user);

  const adminDmytro = new Administrator('Dmytro');
  console.log(adminDmytro);
}
newScopeForTask2();

/*
  INCAPS - get, set
*/

log('--- TASK #2 | Prototypes ---');
// Write an abstract class
function User() {
  this.nickname = null;
  this.id = null;
  this.avatar = null;
  this.canWrite = null;
  this.isLogged = null;
  this.isAdmin = null;
}
  User.prototype.login = function() {};
  User.prototype.logout = function() {};
  User.prototype.writeInChat = function() {}; // Polymorphism*

// Create two classes using inheritance (not abstract)
function Guest() {
  User.call(this); // Inheritance

  this.nickname = 'Guest';
  this.isLogged = false;
  this.canWrite = false;
}

function RegistredUser(nickname) {
  Guest.call(this); // Inheritance

  this.nickname = nickname;
  this.id = 'some id';
  this.avatar = 'some avatar';
  this.canWrite = true;
  this.isLogged = false;
  this.isAdmin = false;
}
  RegistredUser.prototype.login = function() {
    this.isLogged = true;
  };
  RegistredUser.prototype.logout = function() {
    this.isLogged = false;
  };
  RegistredUser.prototype.writeInChat = function(text) {
    console.log(text);
  };

function Administrator(nickname) {
  RegistredUser.call(this, nickname); // Inheritance

  this.canWrite = true;
  this.isAdmin = true;
}
  Administrator.prototype.writeInChat = function(text) { // Polymorphism*
    alert(`*** ADMIN ***: ${text}`);
  };
  Administrator.prototype.deleteMessages = function(id) {
    console.log(`Deleted message #${id}`);
  }

// Create instances of these classes
const visitor = new Guest();
console.log(visitor);

const user = new RegistredUser('Anthony');
console.log(user);

const adminDmytro = new Administrator('Dmytro');
console.log(adminDmytro);

// 3. Come up with and write an example program that will contain and demonstrate the principle of operation.
log('--- TASK #3 ---');
// Higher-order functions
const info = [
{ name: 'Dmytro', age: 19},
{ name: 'Andrew', age: 21},
{ name: 'John', age: 5},
{ name: 'Kate', age: 15},
{ name: 'Matthew', age: 60}
].map(person => `${person.name} is ${person.age} years old.`); // .map() is one of HOF

// First class functions
const getFullName = function(firstName, lastName) { // Means that we can assign functions to a variables
  return `${firstName} ${lastName}`;
}
console.log(getFullName('Dmytro', 'Khyzhniak')); // 'Dmytro Khyzhniak'

// Pure functions
function strHider(str) {
  return str.replace(/\w/g, '*');
}
strHider('Dmytro');

// Function side effect
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getHalf(arr) {
  return arr.splice(0, arr.length / 2);
}
getHalf(numbers);

console.log(numbers); // [6, 7, 8, 9, 10] | Our array was changed with splice()

// Unchanging state
let userName = 'Dmytro';
userName[0] = 'X';

console.log(userName); // 'Dmytro' | Immutable

let newUserName = 'X' + userName.slice(1);
console.log(newUserName); // Xmytro | We can copy only

// Shared State
let counter = 10;

const func1 = () => counter++;
const func2 = () => ++counter;
   
func1();
func2();

console.log(counter); // 12 | Both functions are working with the same counter
   
// Closures
function pow(base) {
  return function(exp) {
      return base ** exp;
  }
}

console.log(pow(2)(2)) // 4
// Recursion
function getSum(num) {
  return num <= 0 ? num : num + getSum(num - 1);
}

console.log(getSum(10)); // 55 | 10 + 9 + 8 ...

// Partial function application
const MathPow = (base, exp) => base ** exp; 

const powOfSeven = MathPow.bind(null, 7);
console.log(powOfSeven(2)); // 49

function log(text) {
  console.log(`%c ${text} `, 'color: green; font-weight: bold; font-size: 1.5em;');
}