function task1() {
  console.clear();
  console.log('%c --- TASK #1 --- ', 'color: green; font-weight: bold; font-size: 1.5em;');

  function sum(a = 0) {
    let sum = a;
    
    return a === 0 ? a :
    function add(b) {
      return b === undefined ? sum : (
        sum += b,
        add
      )
    }
  }
  
  console.log(sum()); // 0
  console.log(sum(3)()); // 3
  console.log(sum(1)(3)(7)()); // 11
  console.log(sum(1)(3)(7)(8)()); // 19
  
  console.log('%c --- OPTIONAL --- ', 'color: green; font-weight: bold; font-size: 1.5em;');

  function calcSum(sum) {
    function add(b) {
      return b === undefined ? sum :
      (    
      sum += b,
      add
      )
    }
    
    return sum === undefined ? 0 : add;
  }

  console.log(calcSum()); // 0
  console.log(calcSum(3)()); // 3
  console.log(calcSum(1)(3)(7)()); // 11
  console.log(calcSum(1)(3)(7)(8)()); // 19

  /* FOR BETTER READABILITY:
  function sum(acc) {
    function add(num) {
      if (num === undefined) return acc;

      acc += num;
      return add;
    }

    return acc === undefined ? 0 : add;
  }

  console.log(sum()); // 0
  console.log(sum(3)()); // 3
  console.log(sum(1)(3)(7)()); // 11
  console.log(sum(1)(3)(7)(8)()); // 19
  */
};
task1();

function task2() {
  console.clear();
  console.log('%c --- TASK #2 --- ', 'color: green; font-weight: bold; font-size: 1.5em;');

  const treeRoot = {
    data: 0,
    parent: null,
    children: []
  };

  const treeFirstLevel1 = {
    data: 10,
    parent: treeRoot,
    children: []
  };
  treeRoot.children.push(treeFirstLevel1);

  const treeFirstLevel2 = {
    data: 5,
    parent: treeRoot,
    children: []
  };
  treeRoot.children.push(treeFirstLevel2);

  function treeNode(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }

  // ADDITIONAL ROOTS FROM TASK:

  const treeFirstLevel3 = {
    data: 15,
    parent: treeRoot,
    children: []
    };
  treeRoot.children.push(treeFirstLevel3);

  const treeSecondLevel1 = {
    data: 20,
    parent: treeFirstLevel1,
    children: []
    };
  treeFirstLevel1.children.push(treeSecondLevel1);

  const treeSecondLevel2 = {
    data: 100,
    parent: treeFirstLevel1,
    children: []
    };
  treeFirstLevel1.children.push(treeSecondLevel2);

  const treeSecondLevel3 = {
    data: 50,
    parent: treeFirstLevel3,
    children: []
    };
  treeFirstLevel3.children.push(treeSecondLevel3);

  function getTreeSum(node, sum = 0) {
    sum += node.data;

    if (node.children.length === 0) return sum;

    for (let i of node.children) {
      sum += getTreeSum(i);
    }

    return sum;
  }

  console.log(getTreeSum(treeRoot)); // 200
};
task2();