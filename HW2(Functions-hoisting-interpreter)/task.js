// Imagine you are giving a lecture.
// Write case studies for:


// 1. Show the practical difference in working with variables 
// that are defined by var, let or const. Try to describe all possible situations.

// 1.1 We can redefine variables created only by var

var vVariable = 11;
var vVariable = 22;
console.log('everything works correctly');

let lVariable = 33;
let lVariable = 44; // Error: Uncaught SyntaxError: Identifier 'lVariable' has already been declared
lVariable = 444; // but can be overwritteng
console.log('code execution will not reach this point, there will be an error earlier');

const cVariable = 55;
const cVariable = 66; // Error: Uncaught SyntaxError: Identifier 'cVariable' has already been declared!
cVariable = 666; // Error can not be overwritten!
console.log('same error as when declared by let');

// 1.2 ......
//also we can see zone of visibility variable created by var-let-const
function giveValue(valueVar) {
    if (valueVar) {
        let a = 1
        var b = 2
        const c = 3
    }
    return b //undefined - because var variable is global, and appopriation is only will be inside
    //return a // error 
    //return c // also error because let and const have block visibility (can't be initialized above, for exampe like(var)
}
console.log(giveValue(false))

// 2. Write a good example of how Hoisting works
console.log(reVar)
reVar = 'Oh!'
console.log(reVar)
console.log(nameGr(reVar, 'Mark'))
function nameGr(oh, nameM) {
    return oh + ' Hi ' + nameM
}
var reVar
// 3. Describe the ways in which we can declare a function. Show the difference
// 3.1 function declaration
function nameFunc1() { // key words function + identifier nameFunction + (transmiting params)
    console.log('Oh! Hi Mark 1') // body function
}
// 3.2 function expression 
var nameFunc2 = function () { //(also anonymous) we can use anonymous function when we do not to clog up memory and look at(p 4.2) please)
    console.log('Hi! Mark 2!')
}
// 3.3 named function expression
var nameFunc3 = function keyNameFunc3() { //can use when may need own call function
    console.log('Hi! Hi! Mark 3')
}
nameFunc1()
nameFunc2()
nameFunc3()

// 4. Show the difference between named and anonymous functions
//4.1 
isitOne(4) // call brfore func declaration. Working 
function isitOne(numb) { // normal call
    console.log(numb)
    if (numb == 1) {
        return 'Go!'
    }
    else {
        return isitOne(numb - 1)
    }
}
//4.2   - with anonymous func. we can to pass function to another function or variable or method
square(4) // in anonymous call before does not working
var square = function (numb) { return numb * numb; };
console.log('it work ' + square(4))
var x = square(4) //to pass func in to variable
var y = square(3)
function hypotenuse(sqX, sqY) {
    return Math.sqrt(sqX + sqY)
}
console.log('hypotenuse: ' + hypotenuse(x, y))

// 5. Write all loops examples.
//5.1 For()
for (var i = 0; i < 3; i++) {
    console.log('Surprise! ' + i);
}
//5.2 for(variable of objectWhere)
var varNumb = ['Hello', 'friend'];

for (const value of varNumb) {
    console.log(value);
}
//5.3 for(properti in object)
var nameObj = {
    furniture: 'chair',
    color: 'red',
    height: 30
}
for (var key in nameObj) {
    console.log(key + ':' + nameObj[key])
}
//5.4 while (condition)
var i = 1
while (i < 3) {
    if (i == 2) {
        console.log('Hi Mark')
    }
    else console.log('Oh!')
    i++
}
//5.5 do {action} while (condition)
var i = 0
var result = ''
do {
    i += 1
    result += i + ' '
} while (i < 5)
console.log(result)

// 6. Write an example of working with the default value for a function
function testDef(num = 1, ber) {
    console.log(typeof num); // write type of coming 
}
test();
test(undefined);
test('');
test(null);
// 7. Write an example of a USEFUL closure. With an example of use.
var sign = prompt('Please enter password');// when we should keep information unchanged (for example password)
//console.log(pass) // error because variable pass avalible only in lexicalenvironment 
(function () {
    var pass = 'cotton'
    if (sign.toLowerCase() == pass) {
        alert('Wow! Hi i am glad to see you!');
    }
    else alert('try again later')
})();
// i try to close the trapped local variables from outside access (encapsulation) with using a closure

// ----------------------------------------------------------------

// An example of how to write.
// Small part from point 1

// 1.1 We can redefine variables created only by var

var vVariable = 11;
var vVariable = 22;
console.log('everything works correctly');

let lVariable = 33;
let lVariable = 44; // Error: Uncaught SyntaxError: Identifier 'lVariable' has already been declared
console.log('code execution will not reach this point, there will be an error earlier');

const cVariable = 55;
const cVariable = 66; // Error: Uncaught SyntaxError: Identifier 'cVariable' has already been declared!
console.log('same error as when declared by let')