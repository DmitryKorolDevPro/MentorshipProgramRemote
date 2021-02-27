// 1. Try to create a couple of different situations with context (this) losing
// and fix them with: call, apply, bind, arrow functions.

function task1() {
  console.log('%c --- TASK #1 --- ', 'color: green; font-weight: bold; font-size: 1.5em;');
  // example1_0_0();
  example1_1_0();
  example1_2_0()

  function example1_0_0() {
    console.log('%c --- EXAMPLE 1.0.0 --- ', 'color: green; font-weight: bold; font-size: 1.25em;');

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
        console.log('%c --- ADDING setTimeout() => loosing a context --- ', 'color: red; font-weight: bold; font-size: 1em;');
        console.log(`Hey, I'm ${this.name}`); // 'Hey, I`m *blank space*' | IT LOOSES A CONTEXT! setTimeout PASSES window AS this INSIDE A FUNCTION
      }, 0);
    }
    user.introduceYourself(); 
  
    // LET`S FIX IT WITH AN ARROW FUNCTION
    user.introduceYourself = function() {
      // this === user | function was called as a method of an object
      setTimeout(() => {
        console.log('%c --- FIXING IT WITH AN ARROW FUNCTION --- ', 'color: green; font-weight: bold; font-size: 1em;');
        // ARROW FUNCTION DOESN`T HAVE OWN this,
        // AND IT DOESN`T ACCEPT window AS this FROM setTimeout()
        // SO SHE TAKES IT FROM THE closure
        // this === user
        console.log(`Hey, I'm ${this.name}`); // 'Hey, I`m Dmytro!' | GREAT, WE HAVE FIXED IT!
      }, 0);
    }
    user.introduceYourself();
  }

  function example1_1_0() {
    console.log('%c --- EXAMPLE 1.1.0 --- ', 'color: green; font-weight: bold; font-size: 1.25em;');

    const user = {
      name: 'Sofya',
      age: 19,
      friends: ['Dmytro', 'Dima', 'Dimon'],
      
      celebrateBirthday() {
        console.log('%c --- USING this INSIDE OF CALLBACK => loosing a context --- ', 'color: red; font-weight: bold; font-size: 1em;');
        this.age++;
        this.friends.forEach(function (friend) {
          console.log(`Invited ${friend} to ${this.name}'s birthday!`); // Invited Dmytro to *blank space*'s birthday! IT LOOSES A CONTEXT!
          // this === undefined INSIDE OF callback
        });
      }
    }
    user.celebrateBirthday();

    // TO FIX this WE CAN PASS OUR user INSIDE OF forEach AS SECOND ARGUMENT
    user.celebrateBirthdayWithFriends = function() {
      console.log('%c --- FIXING IT WITH PASSING this AS AN ARGUMENT --- ', 'color: green; font-weight: bold; font-size: 1em;');
      this.age++;
      this.friends.forEach(function (friend) {
        console.log(`Invited ${friend} to ${this.name}'s birthday!`); 
        // this === user, WE HAVE PASSED IT AS AN ARGUMENT
      }, user);
    }
    user.celebrateBirthdayWithFriends(); // Invited Dmytro to Sofya's birthday! WORKS FINE! 
  }

  function example1_2_0() {
    console.log('%c --- EXAMPLE 1.2.0 --- ', 'color: green; font-weight: bold; font-size: 1.25em;');

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
  console.log('%c --- TASK #2 --- ', 'color: green; font-weight: bold; font-size: 1.5em;');

  const root = {
    name: 'root',
    id: '#0',
    prop1: 'value 1',
    prop2: 'value 2',
    children: []
  }

  console.log('%c --- SPREAD OPERATOR --- ', 'color: green; font-weight: bold; font-size: 1em;');
  const child1 = {...root, id: '#1', name: 'child 1', children: []};
  root.children.push(child1);

  console.log(root);
  console.log(child1);

  console.log('%c --- Object.assign() --- ', 'color: green; font-weight: bold; font-size: 1em;');
  const child2 = Object.assign({}, child1);
  child2.name = 'child 2';
  child2.id = '#2';
  child2.children = [];
  child1.children.push(child2);

  console.log(child1);
  console.log(child2);

  console.log('%c --- for in --- ', 'color: green; font-weight: bold; font-size: 1em;');
  const child3 = {};
  for (let prop in child2) {
    child3[prop] = child2[prop];
  }
  child3.name = 'child 3';
  child3.id = '#3';
  child3.children = [];
  child2.children.push(child3);

  console.log(child2);
  console.log(child3);

  console.log('%c --- JSON.stringify() - JSON.parse() --- ', 'color: green; font-weight: bold; font-size: 1em;');
  let child4 = JSON.stringify(child3);
  child4 = JSON.parse(child4);
  child4.name = 'child 4';
  child4.id = '#4';
  child3.children.push(child4);

  console.log(child3);
  console.log(child4);

  console.log('%c --- COPYIED AS A LINK --- ', 'color: green; font-weight: bold; font-size: 1em;');
  const child5 = child4;
  child5.name += '-5';
  child5.id += '-5';

  console.log(child4);
  console.log(child5);

  console.log('%c --- COPYIED WITH NESTED PROPERTIES --- ', 'color: green; font-weight: bold; font-size: 1em;');
  const child6 = { 
    name: 'child 6',
    id: '#6',
    prop1: 'value 1',
    prop2: 'value 2',
    children: deepClone(root)
  };

  function deepClone(obj) {
    const objectsArray = [];

    function next(obj) {
      objectsArray.push(obj);
      for (let each of obj.children) {
        next(each);
      }
    } next(obj);

    return objectsArray;
  }
  child5.children.push(child6);

  console.log(child5);
  console.log(child6);

  task3(root);
} task2();

// 3. Create tree of nested objects
// Use objects structure from example 2, generate flat Map set (key-value), here will be stored spesific user information
// for example(you created products collection with nested products inside), // by unic product id create list of product_id-product price.
function task3(obj) {
  console.log('%c --- TASK #3 --- ', 'color: green; font-weight: bold; font-size: 1.5em;');
  console.log(obj); // GETTING TREE FROM TASK #2

  const flatMap = generateFlatMap(obj); // MAKING IT FLAT
  
  function generateFlatMap(obj) {
    const map = new Map();

    function makeFlat(obj) {
      if (!map.has(obj.id)) {
        map.set(obj.id, obj.name)
      }

      for (let i = 0; i < obj.children.length; i++) {
        i--;
        makeFlat(obj.children.shift());
      }
    } makeFlat(obj);

    return map;
  }

  // GOT OLNY UNIQUE id - name PAIRS
  console.log(flatMap);
}