// 1. Iterative style
log('--- TASK #1 | IMPERATIVE STYLE ---');

function imperativeStyleExample() {
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

  const adultPartOfGroup = [];

  for (let i = 0; i < groupOfPeople.length; i++) {
    if (groupOfPeople[i].age >= 18) {
      adultPartOfGroup.push(groupOfPeople[i]);
    }
  }

  console.log(adultPartOfGroup); // [{ name: 'Dmytro', age: 19}, { name: 'Andrew', age: 21}, { name: 'Matthew', age: 60}]

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
  
  const someStrings = ['hi', 'yup', 'form', 'random', 'x']; // array of strings

  someStrings.customMap = function (callback) {
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i]));
    }

    return result;
  }

  console.log(someStrings.customMap(str => str.length)); // [2, 3, 4, 6, 1]
}
imperativeStyleExample();

// 2. Applying higher-order functions
log('--- DECLARATIVE STYLE EXAMPLE ---');

function declarativeStyleExample() {
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

  const adultPartOfGroup = groupOfPeople.filter(person => person.age >= 18);
  console.log(adultPartOfGroup); // [{ name: 'Dmytro', age: 19}, { name: 'Andrew', age: 21}, { name: 'Matthew', age: 60}]

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
declarativeStyleExample();

log('--- TASK #2 ---');
// The implementation and usefulness of ideas should be clearly demonstrated: Inheritance, encapsulation, polymorphism (as much as possible)
// Implement in two ways. With the help of the ES6 classes and with the help of prototypes.

log('--- Classes ---');
function newScopeForTask2() {
  // Write an abstract class
  class User {
    nickname = null;
    id = null;
    avatar = null;
    canWrite = null;
    isLogged = null;
    isAdmin = null;

    login() {}
    logout() {}
    writeInChat() {} // Polymorphism*
  }
  
  // Create two classes using inheritance (not abstract)
  class Guest extends User { // Inheritance
    isLogged = false;
    canWrite = false;
  
    constructor() {
      super();
      this.nickname = 'Guest';
    }
  }
  
  class RegistredUser extends Guest { // Inheritance
    id = "some id"; 
    avatar = "some avatar";
    canWrite = true;
    isLogged = false;
    isAdmin = false;

    constructor(nickname) {
      super();
      this.nickname = nickname;
    }
  
    login() {
      this.isLogged = true;
    }
  
    logout() {
      this.isLogged = false;
    }
  
    writeInChat(text) {
      console.log(text); // Polymorphism*
    }
  }
  
  class Administrator extends RegistredUser { // Inheritance
    canWrite = true;
    isAdmin = true;
  
    constructor(nickname) {
      super(nickname);
    }
  
    writeInChat(text) {
      alert(`*** ADMIN ***: ${text}`); // Polymorphism*
    }
  
    deleteMessages(id) {
      console.log(`Deleted message #${id}`);
    }
  
    openNewBalance() {
      let balance = 0; // Encapsulation**
  
      function addFunds(amount) {
        if (amount <= 0) return;
        balance += amount;
      }
  
      function getFunds(amount) {
        if (amount <= 0) return;
        balance += amount;
      }
  
      function showBalance() {
        return balance;
      }
  
      return {
        addFunds,
        getFunds,
        showBalance
      };
    }
  }
  
  // Create instances of these classes
  const visitor = new Guest();
  console.log(visitor);
  
  const user = new RegistredUser("Anthony");
  console.log(user);
  
  const adminDmytro = new Administrator("Dmytro");
  console.log(adminDmytro);
  
  let dmytroUsdWallet = adminDmytro.openNewBalance();
  dmytroUsdWallet.addFunds(5);
  dmytroUsdWallet.addFunds(5);
  dmytroUsdWallet.addFunds(5);
  
  console.log(dmytroUsdWallet.balance); // undefined
  
  console.log(dmytroUsdWallet.showBalance()); // 15 | Encapsulation**
}
newScopeForTask2();

log('--- Prototypes ---');
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
  return str.replace(/\w/g, '*'); // no side-effects
}
strHider('Dmytro'); // '******'

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
console.log(newUserName); // Xmytro | But we still can copy

// Shared State
let counter = 10;

const func1 = () => counter++;
const func2 = () => ++counter;
   
func1();
func2();

console.log(counter); // 12 | Both functions are working with the same counter
   
// Closures
function visitorsSaver() {
  const arrayOfVisitors = []; // will be saved in the closure

  function addVisitors(...visitors) {
    arrayOfVisitors.push(...visitors);
  }

  function showVisitors() {
    for (let visitor of arrayOfVisitors) {
      console.log(`${visitor.name} - ${visitor.ip}`);
    }
  }

  return {
    addVisitors,
    showVisitors
  }
}

const newSaver = visitorsSaver();
newSaver.addVisitors(
  {name: 'Polina', ip:'192.169.100.101'},
  {name: 'Dmytro', ip:'192.172.98.102'},
  {name: 'Sofya', ip:'193.170.120.100'},
);
newSaver.showVisitors(); // 'Polina - 192.169.100.101', 'Dmytro - 192.172.98.102' ...

const anotherSaver = visitorsSaver(); // Let`s make another saver
anotherSaver.addVisitors(
  {name: 'not a Polina', ip:'0.0.0.1'},
  {name: 'not a Dmytro', ip:'0.0.0.2'},
  {name: 'not a Sofya', ip:'0.0.0.3'},
);
anotherSaver.showVisitors(); // 'not a Polina - 0.0.0.1, 'not a Dmytro - 0.0.0.2' ...
// Thanks to closures we can create and save independent variables

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