// 1. -------- The practical difference in working with variables. --------
 
// Before all, what is a variable?
// - A variable is a “named storage” for our data.
 
// We can create variables in JavaScript with keywords 'var', 'let', and 'const'
// They are used to store information for us.
 
/*
 
 |0-0|                        HEY, GUYS 
\_VAR_/                   I WAS BORN IN 1997
  ||              AND UNFORTUNATELY I`M DEPRECATED!
  /\      BUT THAT`S DON`T MEAN YOU DON`T NEED TO KNOW ABOUT ME!
 
*/
 
/*
 
 |L-L|                        WE WERE BORN IN 2015!                        |C-C|
\_LET_/                             WITH ES6                             \_CONST_/
  ||                        WE ARE YOUNG AND STRONG                        | |
  /\                       NOTHING IMPOSSIBLE TO US!                       /\
 
*/
 
// LET`S CHECK HOW THEY DIFFER!
 
// 1.1 That`s how you can declare them:
function example1_1_0() {
  var firstExample = 'First example!';
  let secondExample = 'Second example!';
  const thirdExample = 'Third example!';
}

// 1.2 But can you redeclare them?
function example1_2_0() {
  var firstExample = 'First example!';
  let secondExample = 'Second example!';
  const thirdExample = 'Third example!';

  var firstExample = 'First example!'; // WORK`S FINE
  let secondExample = 'Second example!'; // ERROR | Identifier 'letExample' has already been declared
  const thirdExample = 'Third example!'; // ERROR | Identifier 'letExample' has already been declared
  /* SUMMARY: you can redeclare variables created only with 'var' */
}

// 1.3 Can you change the values?
function example1_3_0() {
  firstExample = 'First example!'; // WORK`S FINE
  secondExample = 'Second example!'; // WORK`S FINE
  thirdExample = 'Third example!'; // ERROR | Assignment to constant variable.
  /* SUMMARY: you can`t change the value of variable created with 'const' */
}

// 1.3.1 If the value is complex, such as an object or array, the contents of the value can still be modified
function example1_3_1() {
  const constObj = { understands : false };
  constObj.understands = true; // WORK`S FINE
  
  const constArr = [];
  constArr.push('Added something'); // WORK`S FINE
  /* SUMMARY: you can modify objects created with const */
}

// 1.3.2 But you can`t switch from object to another type
function example1_3_2() {
  constObj = 'This will cause an error!' // ERROR | Assignment to constant variable.
  constArr = 0.30000000000000004 // ERROR | Assignment to constant variable.
}

// 1.4 What`s about scope?
// 1.4.0 BLOCK SCOPE
function example1_4_0() {
  {
    var innerVar = 'Awesome var!';
    let innerLet = 'Awesome let!';
    const innerConst = 'Awesome const!';
  }
  console.log(innerVar); // WORK`S FINE | 'Awesome var!'
  console.log(innerLet); // ERROR | innerLet is not defined
  console.log(innerConst); // ERROR | innerConst is not defined
  /* SUMMARY: 'var' have no block scope */
}

// 1.4.1 FUNCTIONAL SCOPE
function example1_4_1() {
  function someFunc() {
    var innerVar = 'Awesome var!';
    let innerLet = 'Awesome let!';
    const innerConst = 'Awesome const!';
  }
  console.log(innerVar); // ERROR | innerVar is not defined
  console.log(innerLet); // ERROR | innerLet is not defined
  console.log(innerConst); // ERROR | innerConst is not defined
  /* SUMMARY: you can`t access a variable created in functional scope from outside */
}

// 1.4.2 Using 'var' in loops
function example1_4_2() {
  for (var counter = 0; counter < 10; conter++) {
  }
  console.log(counter); // WORK`S FINE - 10
}

// 1.4.3 If var is not attached to a functional or block scope, then it’s global scope
var thisVariableIsGlobal = true; // now this variable is global

// 1.5 Hoisting
function example1_5_0() {
  console.log(varExample); // WORK`S FINE - undefined
  console.log(letExample); // ERROR | letExample is not defined
  console.log(constExample); // ERROR | constExample is not defined
  
  var varExample = 'Awesome var!';
  let letExample = 'Awesome let!';
  const constExample = 'Awesome const!';
  
  console.log(varExample); // WORK`S FINE - 'Awesome var!'
  console.log(letExample); // WORK`S FINE - 'Awesome let!'
  console.log(constExample); // WORK`S FINE - 'Awesome const!'
  /* SUMMARY: variables created with var are undefined from the beginning of the function */
}

// 1.6 Const with no value
// IMAGINE, on early Monday morning you came to the office and created a constant with no value because you don`t know yet what the value is..
function example1_6_0() {
  const someVariable;
  // That`s useless, you can`t assign to constant variable.
  /* SUMMARY: Don`t come to the office on Monday.
    Just joking, don`t declare constants with no value. */
}

// 1.7 Shorter syntax
function example1_7_0() {
let a = 1;
let b = 2;
let c = 3;
let d = 4;
// Instead use:
let a = 1, b = 2, c = 3, d = 4;
// NOTE, it`s harder to read!
}

// 1.8 Additional info about variables
// 1.8.0 Always use camelCase for naming a variable in JavaScript. That`s a good practise in JavaScript.
function example1_8_0() {
  var dmytroKhyzhniak;
  let coolDmytroKhyzhniak;
  const dmytroKorol;
}

// 1.8.1 In other languages you can see PascalCase, snake_case, kebab-case.
function example1_8_1() {
  var ThisIsPascalCase;
  let this_is_snake_case;
}

// 1.8.2 You can use $ and _ for naming variables
function example1_8_2() {
  var _ = 'Awesome!';
  let $ = 'Awesome!';
}

// 1.8.3 You can`t use special keywords for naming a variables
function example1_8_3() {
  let this; // ERROR | Unexpected token 'this'
  var function; // ERROR | Unexpected token 'function'
}

// 1.8.4 You can`t start naming a variable with number or other symbols exept those two
function example1_8_4() {
  var %variable; // ERROR | Unexpected token '%'
  let 3variable; // ERROR | Invalid or unexpected token
}

// 1.8.5 You can use non-latin symbols but that`s a bad practise
function example1_8_5() {
  var змінна;
  let переменная;
}

// 2. -------- Write a good example of how Hoisting works --------

// IMAGINE WE WANT TO BUILD A HOUSE WITH JAVASCRIPT..
// YUP, THE FLOORS WILL BE UPSIDE-DOWN, NEVERMIND. JUST IMAGINE!
// EVERY BLOCK WILL BE BUILD FROM DIFFERENT MATERIALS - VAR, LET, CONST OR EVEN FUNCTIONS!

function example2_0_0() {
  // BUILDING STRARTED 🕐
                     let  floor1 = 'Floor #1 | □ □ | LET';
                   const  floor2 = 'Floor #2 | □ □ | CONST';
                     var  floor3 = 'Floor #3 | □ □ | VAR';
  let floor4 = function() { return 'Floor #4 | □ □ | LET FUNCTION EXPESSION' };
const floor5 = function() { return 'Floor #5 | □ □ | CONST FUNCTION EXPESSION' };
  var floor6 = function() { return 'Floor #6 | □ □ | VAR FUNCTION EXPESSION' };
        function floor7() { return 'Floor #7 | □ □ | FUNCTION DECLARATION' };
  // ✅ BUILDING COMPLETED ✅

  // LET`S CHECK IT OUT
  console.log(floor1);   // 'Floor #1 | □ □ | LET'
  console.log(floor2);   // 'Floor #2 | □ □ | CONST'
  console.log(floor3);   // 'Floor #3 | □ □ | VAR'
  console.log(floor4()); // 'Floor #4 | □ □ | LET' 
  console.log(floor5()); // 'Floor #5 | □ □ | CONST FUNCTION EXPESSION'
  console.log(floor6()); // 'Floor #6 | □ □ | VAR FUNCTION EXPESSION'
  console.log(floor7()); // 'Floor #7 | □ □ | FUNCTION DECLARATION FUNCTION EXPESSION'
  // PERFECT!!!
}

// 2.0.1 BUT WHAT IF I WILL TELL YOU THAT WITH JAVASCRIPT WE CAN SEE THE FUTURE?
// EXITED, YES? WANNA TRY? LET`S GO!
// LET`S BUILD ANOTHER HOUSE..

function example2_0_1() {
  // LET`S DIVE INTO THE FUTURE, EVEN IF OUR HOUSE HAVEN`T BUILT YET..

  console.log(floor3); // undefined
  // HUH, THERE IS NO ERROR, WITH 'VAR' WE CAN SEE THAT OUR FLOOR IS IN THE PLANS. 

  console.log(floor6()); // undefined
  // THE SAME, AS WE CAN SEE, VARIABLES CREATED WITH VAR STORES UNDEFINED FROM THE BEGINNING OF THE SCOPE

  console.log(floor7()); // 'Floor #7 | □ □ | FUNCTION DECLARATION'
  // WOW, WE DIDN`T BUILT THE HOUSE YET BUT WE CAN ACCESS FLOOR #7
  // THAT`S WHAT HOISTING IN JAVASCRIPT DOES
  // ALL THE DECLARATIONS HAVE BEEN MOVED TO THE TOP OF THEIR RESPECTIVE SCOPES, BEFORE EXECUTION

  // BUILDING STRARTED 🕐
                     let  floor1 = 'Floor #1 | □ □ | LET';
                   const  floor2 = 'Floor #2 | □ □ | CONST';
                     var  floor3 = 'Floor #3 | □ □ | VAR';
  let floor4 = function() { return 'Floor #4 | □ □ | LET FUNCTION EXPESSION' };
const floor5 = function() { return 'Floor #5 | □ □ | CONST FUNCTION EXPESSION' };
  var floor6 = function() { return 'Floor #6 | □ □ | VAR FUNCTION EXPESSION' };
        function floor7() { return 'Floor #7 | □ □ | FUNCTION DECLARATION' };
  // ✅ BUILDING COMPLETED ✅
}

// 2.1.0
// LET`S LOOK AT A BIT EASIER EXAMPLE WITH FUNCTION DECLARATION
function example2_1_0() {
  let name = 'Dmytro';

  greeting(); // Hello, Dmytro 
  // Calling function before declaration
  // Thanks to hoisting and function declaration we can do that

  function greeting() {
    console.log(`Hello, ${name}`);
  }
  /* WORKING WITH FUNCTION DECLARATION */
}

// NOW WITH FUNCTION EXPRESSION
function example2_1_1() {
  let name = 'Dmytro';

  greeting(); // ERROR | Uncaught ReferenceError: Cannot access 'greeting' before initialization
  // Calling function before assignment
  // There is no hoisting!

  let greeting = function() {
    console.log(`Hello, ${name}`);
  }
  /* NOT WORKING WITH FUNCTION EXPRESSION */
}

// LET`S CHECH 'VAR'
function example2_2_0() {
  console.log(name); // undefined
  var name = 'Dmytro';

  /*
    var name;

    console.log(name); // undefined

    name = 'Dmytro'
  
    // THE SAME!
  */
}

// SAME EXAMPLE BUT WITH 'LET'
function example2_2_1() {
  console.log(name); // ERROR | Uncaught ReferenceError: Cannot access 'name' before initialization
  let name = 'Dmytro';

  // JavaScript knows that this variable exists but just not initialized yet
}

// AND WHAT IF 'NAME' DOESN`T EVEN EXISTS?
function example2_2_2() {
  console.log(name); // ERROR | name is not defined
}

// 3. -------- Describe the ways in which we can declare a function. Show the difference --------

// WE CAN DECLARE A FUNCTION WITH:
function example3_0_0() {
  // FUNCTION DECLARATION
  function funcDeclaration() {
    console.log('This is function declaration');
  }
  
  // FUNCTION EXPRESSION (ALSO CALLED ANONYMOUS FUNCTION)
  let functionExpression = function() {
    console.log('This is function expression');
  }
  
  // NAMED FUNCTION EXPRESSION - NFE
  let namedFunctionExpression = function someName() {
    console.log('This is named function expression');
  }
  
  // IMMEDIATELY INVOKEN FUNCTION EXPRESSION - IIFE
  (function IIFEfunction() {
    console.log('This is self-invoking function');
  })();
  
  // NEW FUNCTION
  let constructorFunction = new Function('param', 'console.log("This is function constructor")');
  constructorFunction();

  // USING FUNCTION AS A CONSTRUCTOR
  function Reader(name) {
    this.name = name;
    this.understandsFunction = false;

    this.study = function() {
      this.understandsFunction = true;
    }
  }

  // ARROW FUNCTION
  let arrowFunction = () => { console.log('This is arrow function'); };
}

// 3.1 HOISTING WORKS ONLY WITH FUNCTION DECLARATION
function example3_1_0() {
  funcDeclaration(); // This is function declaration

  function funcDeclaration() {
    console.log('This is function declaration');
  }

  /* SUMMARY: WE CAN ACCESS FUNCTIONS CREATED WITH FUNCION DECLARATION FROM THE BEGINNING OF THE SCOPE */
}

// 3.2 WITH NAMED FUNCTION EXPRESSION WE CAN CALL FUNCTION ITSELF EVEN IF THE VARIABLE THAT STORES IT HAVE CHANGED
function example3_2_0() {
  let namedFunctionExpression = function increment(from, to) {
    console.log(from);
    
    if (from < to) {
      increment(++from, to);
    }
  }
  namedFunctionExpression(0, 5); // 0, 1, 2, 3, 4, 5

  // LET`S CHANGE THE VARIABLE THAT STORES THE FUNCTION

  let anotherVariable = namedFunctionExpression;
  namedFunctionExpression = null;

  anotherVariable(0, 5); // 0, 1, 2, 3, 4, 5
 // STILL WORKS!
}

// 3.3 IIFE ARE EXECUTING IMMEDIATELY
function example3_3_0() {
  (function IIFEfunction() {
    console.log('KABOOOM!');
  })();

  // THEY ARE USED TO INCAPSULATE OUR DATA
}

// 3.4 WORKING WITH FUNCTION CONSTRUCTOR
function example3_4_0() {
  // WE CAN PASS A STRING AND MAKE A FUNCTION FROM IT
  let constructorFunction = new Function('num', 'return num ** 2');
  console.log(constructorFunction(3)); // 9
}


// 3.5 IN ARROW FUNCTIONS THERE IS NO 'ARGUMENTS' OBJECT. IN ANY OTHER TYPE OF FUNCTION IT EXISTS.
function example3_5_0() {
  let funcExpression = function(a, b, c) { console.log(arguments[0]); };
  let arrowFunc = (a, b, c) => { console.log(argumetns[0]); };

  funcExpression(1, 2, 3); // 1
  arrowFunc(1, 2, 3); // ERROR | Uncaught ReferenceError: argumetns is not defined
}

// 3.6 "this" MAY DIFFER IN DIFFERENT TYPE OF FUNCTIONS
// 3.6.0 "this" in function called with object
function example3_6_0() {
  let reader = { isReading: true, study() { console.log(this.isReading) } }; // true
  reader.study();
  // in this example "this" is our reader
}

// 3.6.1 "this" in function declaration
function example3_6_1() {
  function funcDeclaration() {
    console.log(this);
  } funcDeclaration(); // [object Window]
}

// 3.6.2 "this" in function declaration in strict mode
function example3_6_2() {
  "use strict";
  function funcDeclaration() {
    console.log(this);
  } funcDeclaration(); // undefined
}

// 3.6.3 arrow functions don`t have their 'own' this. it`s taken from the outer scope.
function example3_6_3() {
  let reader = {
    name : "Dmytro",
    greeting() {
      let greet = () => console.log(`Hey, ${this.name}!`);
      greet();
    }
  };

  reader.greeting(); // Hey, Dmytro!
}

// 3.6.4 the value of "this" depending on the context
function example3_7_0() {
  let reader1 = { name: "Dmytro junior" };
  let reader2 = { name: "Dmytro" };

  reader1.greet = showGreeting;
  reader2.greet = showGreeting;

  function showGreeting() {
    console.log( `Hey, ${this.name}!` );
  }

  reader1.greet(); // Hey, Dmytro junior!
  reader2.greet(); // Hey, Dmytro!
}

// 4. -------- Show the difference between named and anonymous functions --------

// LET`S REPEAT,
// WITH NAMED FUNCTION EXPRESSION WE CAN CALL FUNCTION ITSELF EVEN IF THE VARIABLE THAT STORES IT HAVE CHANGED
function example4_0_0() {
  let namedFunctionExpression = function increment(from, to) {
    console.log(from);
    
    if (from < to) {
      increment(++from, to);
    }
  }
  namedFunctionExpression(0, 5); // 0, 1, 2, 3, 4, 5

  // LET`S CHANGE THE VARIABLE THAT STORES THE FUNCTION

  let anotherVariable = namedFunctionExpression;
  namedFunctionExpression = null;

  anotherVariable(0, 5); // 0, 1, 2, 3, 4, 5
 // STILL WORKS!
}

// CHANGING THE VARIABLE THAT STORES OUR FUNCTION CAN LEED TO AN ERROR IN CASE WE USE ANONYMOUS FUNCTIONS
function example4_1_0() {
  let anonymousFunction = function(from, to) {
    console.log(from);
    
    if (from < to) {
      anonymousFunction(++from, to);
    }
  }
  anonymousFunction(0, 5); // 0, 1, 2, 3, 4, 5

  // LET`S CHANGE THE VARIABLE THAT STORES THE FUNCTION

  let anotherVariable = anonymousFunction;
  anonymousFunction = null;

  anotherVariable(0, 5); // ERROR | anonymousFunction is not a function
  // Because we have changed the variable name and our function still refers to the old one
}

// AS WE KNOW, FUNCTION IS AN OBJECT. THAT`S WHY:
function example4_2_0() {
  // WITH DECLARATION:
  function someFunc() {
    console.log(someFunc.name); // someFunc
  }
  // ANONYMOUS functions have name too
  let anotherFunc = function() {
    console.log(anotherFunc.name); // anotherFunc
  }
}

// 5. -------- Write all loops examples --------
function example5_0_0() {
  const arr = [0, 1, 2, 4, 5, 6, 7, 8, 9, 10];
  
  // FOR LOOP
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // logs 0-10
  } // USE IT IF YOU KNOW HOW MANY TIMES TO ITERATE

  // FOR OF LOOP
  for (let i of arr) {
    console.log(i); // logs 0-10
  } // USE IT IF YOU WANT ONLY VALUES

  // WHILE LOOP
  let j = 0;
  while (j < arr.length) {
    console.log(arr[j]);  // logs 0-10
    j++;
  } // USE IT IF YOU DON`T KNOW HOW MANY TIMES TO ITERATE

  // DO WHILE LOOP
  let k = 0;
  do {
    console.log(arr[k]);  // logs 0-10.
    k++;
  } while (k < arr.length);
  // USE IT IF YOU NEED TO ITERATE AT LEAST ONCE

  // FOR IN
  const obj = { name : "Dmytro", age : 19, isMarried : false, doingHomework : true };

  for (let prop in obj) {
    console.log(`PROPERTY: "${prop}", VALUE: "${obj[prop]}"`); // PROPERTY: "name", VALUE: "Dmytro"
  } // USE ONLY WITH OBJECTS. NOT RECOMMENDED TO USE IT WITH ARRAYS!
}

// 6. -------- Write an example of working with the default value for a function --------
// 6.0 WE CAN USE IT TO GET THE SECOND PARAMETER FROM THE FIRST
function sum(a = 10, b = a) {
  return a + b;
}

console.log(sum()); // 20
console.log(sum(20)); // 40
console.log(sum(30, 30)); // 60

// 6.1 OR TO GET SOMETHING BY DEFAULT IF THERE IS NO INPUT
function example6_1_0() {
  let nickname = prompt("Please, enter your nickname: ");
      nickname = nickname === null ? undefined // JUST FOR EXAMPLE. 
               : nickname === "" ? undefined // IT`S NOT RECOMMENDED TO ASSIGN "UNDEFINED" MANUALLY!
               : nickname; 
  
  greet(nickname);

  function greet(nickname = "Guest") {
    alert(`Hey, ${nickname}!`)
  }
}

// 7. -------- Write an example of a USEFUL closure. With an example of use --------
function example7_0_0() {
  let user = {
    name: "Dmytro",
    platform: "PC",
  }
  
  function setUserToken(user) {
    let todaysToken = '25006eb5cb6b9aa164f8fc50e06546d3';
  
    function generateCustomToken() {
      let randomID = Math.round(Math.random() * 1000);
      // TODO: check if ID is free
      let generatedToken = `${randomID}#${todaysToken}`;
      user.token = generatedToken;
  
      return generatedToken;
    }
  
    return generateCustomToken();
  }
  
  console.log(setUserToken(user));
}