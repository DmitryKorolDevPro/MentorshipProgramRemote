// Imagine you are giving a lecture.
// Write case studies for:


// 1. Show the practical difference in working with variables 
// that are defined by var, let or const. Try to describe all possible situations.



// 2. Write a good example of how Hoisting works



// 3. Describe the ways in which we can declare a function. Show the difference



// 4. Show the difference between named and anonymous functions



// 5. Write all loops examples.



// 6. Write an example of working with the default value for a function



// 7. Write an example of a USEFUL closure. With an example of use.




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
const cVariable = 66; // Error: Uncaught SyntaxError: Identifier 'cVariable' has already been declared
console.log('same error as when declared by let'); 

// 1.2 

var vVariable = 11;
var vVariable = 22;
console.log('everything works correctly');

let lVariable = 33;
let lVariable = 44; // Error: Uncaught SyntaxError: Identifier 'lVariable' has already been declared
console.log('code execution will not reach this point, there will be an error earlier'); 

const cVariable = 55;
const cVariable = 66; // Error: Uncaught SyntaxError: Identifier 'cVariable' has already been declared
console.log('same error as when declared by let'); 