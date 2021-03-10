// 1. Try to create a couple of different situations with context (this) losing
// and fix them with: call, apply, bind, arrow functions.
 
function task1() {
  log('--- TASK #1 ---');
  // example1_0_0();
  example1_1_0();
  example1_2_0()
 
  function example1_0_0() {
    log('--- EXAMPLE 1.0.0 ---');
 
    const user = {
      name: 'Dmytro',
  
      introduceYourself() {
        console.log(`Hey, I'm ${this.name}`);
      }
    };
    user.introduceYourself(); // 'Hey, I`m Dmytro!' | GREAT, WORK`S FINE!
    
    // LET`S ADD A DELAY WITH setTimeout()
    user.introduceYourself = function() {
      setTimeout(function() {
        log('--- ADDING setTimeout() => loosing a context ---');
        console.log(`Hey, I'm ${this.name}`);
      }, 0);
    }
    user.introduceYourself(); // 'Hey, I`m *blank space*' | IT LOOSES A CONTEXT! setTimeout PASSES window AS this INSIDE A FUNCTION
  
    // LET`S FIX IT WITH AN ARROW FUNCTION
    user.introduceYourself = function() {
      // this === user | function was called as a method of an object
      setTimeout(() => {
        log('--- FIXING IT WITH AN ARROW FUNCTION ---');
        // ARROW FUNCTION DOESN`T HAVE OWN this,
        // AND IT DOESN`T ACCEPT window AS this FROM setTimeout()
        // SO SHE TAKES IT FROM THE closure
        // this === user
        console.log(`Hey, I'm ${this.name}`);
      }, 0);
    }
    user.introduceYourself(); // 'Hey, I`m Dmytro!' | GREAT, WE HAVE FIXED IT!
  }
 
  function example1_1_0() {
    log('--- EXAMPLE 1.1.0 --- ');
 
    const user = {
      name: 'Sofya',
      age: 19,
      friends: ['Dmytro', 'Dima', 'Dimon'],
      
      celebrateBirthday() {
        log('--- USING this INSIDE OF CALLBACK => loosing a context ---');
        this.age++;
        this.friends.forEach(function (friend) {
          console.log(`Invited ${friend} to ${this.name}'s birthday!`);
          // this === undefined INSIDE OF callback
        });
      }
    }
    user.celebrateBirthday(); // Invited Dmytro to *blank space*'s birthday! IT LOOSES A CONTEXT!
 
    // TO FIX this WE CAN PASS OUR user INSIDE OF forEach AS SECOND ARGUMENT
    user.celebrateBirthdayWithFriends = function() {
      log('--- FIXING IT WITH PASSING this AS AN ARGUMENT ---');
      this.age++;
      this.friends.forEach(function (friend) {
        console.log(`Invited ${friend} to ${this.name}'s birthday!`); 
        // this === user, WE HAVE PASSED IT AS AN ARGUMENT
      }, user);
    }
    user.celebrateBirthdayWithFriends(); // Invited Dmytro to Sofya's birthday! WORKS FINE! 
  }
 
  function example1_2_0() {
    log('--- EXAMPLE 1.2.0 ---');
 
    const user = {
      name: 'Svetlana',
    }
 
    function addStatus(...emojis) {
      // this INSIDE A FUNCTION BY DEFAULT IS window OR undefined (IN STRICT MODE)
      // THAT`S WHY SOMETIMES WE NEED TO MANUALLY BIND OR PASS this TO A FUNCTION
      // this === window
 
      for (let i of emojis) {
        this.name += i;
      }
    }
 
    // WITH CALL
    addStatus.call(user, '⭐️'); // this === user
    console.log(user.name); // Svetlana ⭐️
 
    // WTIH APPLY
    addStatus.apply(user, ['💄', '💄']); // this === user
    console.log(user.name); // Svetlana ⭐️💄💄
 
    // WTIH BIND
    addStatus.bind(user, '✅', '✅', '✅')(); // this === user
    console.log(user.name); // Svetlana⭐️💄💄✅✅✅
  }
}
task1();
 
// 2. Create nested obects tree structure (3 levels nesting):
// Implement all posible, that you know, clone methods (including cloning the nested properties)
function task2() {
  log('--- TASK #2 ---');
 
  const root = {
    name: 'root',
    id: '#0',
    prop1: 'value 1',
    prop2: 'value 2',
    children: []
  }
 
  log('--- SPREAD OPERATOR ---');
  root.children.push({...root, id: '#1', name: 'child 1', children: []});
 
  console.log(root.children[0]);
 
  log('--- Object.assign() ---');
  const child2 = Object.assign({}, root.children[0]);
  child2.name = 'child 2';
  child2.id = '#2';
  child2.children = [];
  root.children[0].children.push(child2);
 
  console.log(child2);
 
  log('--- for in ---');
  const child3 = {};
  for (let prop in child2) {
    child3[prop] = child2[prop];
  }
  child3.name = 'child 3';
  child3.id = '#3';
  child3.children = [];
  child2.children.push(child3);
 
  console.log(child3);
 
  log('--- JSON.stringify() - JSON.parse() ---');
  let child4 = JSON.parse(JSON.stringify(child3))
  child4.name = 'child 4';
  child4.id = '#4';
  child4.children = [];
  child3.children.push(child4);
 
  console.log(child4);
 
  log('--- COPYIED AS A LINK --- ');
  const child5 = child4;
  child5.name += '-5';
  child5.id += '-5';
 
  console.log(child5);
 
  log('--- COPYIED WITH NESTED PROPERTIES ---');
 
  const child6 = deepClone(root);
  child6.name = 'child 6';
  child6.id = '#6';
 
  function deepClone(from, to) {
    if (from == null || typeof from != "object") return from;
    if (from.constructor != Object && from.constructor != Array) return from;
    if (from.constructor == Date || from.constructor == RegExp || from.constructor == Function ||
      from.constructor == String || from.constructor == Number || from.constructor == Boolean)
      return new from.constructor(from);
 
    to = to || new from.constructor();
 
    for (let name in from) {
      to[name] = typeof to[name] == "undefined" ? deepClone(from[name], null) : to[name];
    }
 
    return to;
  }
 
  child5.children.push(child6);
 
  console.log(child6);
  console.log(child6.children[0].children[0] === root.children[0].children[0]); // false | CLONED WITH NESTED PROPERTIES
 
  task3(root);
}
task2();
 
// 3. Create tree of nested objects
// Use objects structure from example 2, generate flat Map set (key-value), here will be stored spesific user information
// for example(you created products collection with nested products inside), // by unic product id create list of product_id-product price.
function task3(obj) {
  log('--- TASK #3 ---');
  console.log(obj); // GETTING TREE FROM TASK #2
 
  const flatMap = generateFlatMap(obj); // MAKING IT FLAT
  
  function generateFlatMap(obj) {
    const map = new Map();
 
    function makeFlat(obj) {
      if (!map.has(obj.id)) {
        map.set(obj.id, obj.name)
      }
 
      while (obj.children.length > 0) {
        makeFlat(obj.children.shift());
      }
    }
    makeFlat(obj);
 
    return map;
  }
 
  // GOT OLNY UNIQUE id - name PAIRS
  console.log(flatMap);
}
 
function log(text) {
  console.log(`%c ${text} `, 'color: green; font-weight: bold; font-size: 1.5em;');
} 
