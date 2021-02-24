// 1.  Реализовать такую функцию sum что бы она выполнялась при условии:
// 1.1   sum() === 0;
// 1.2   sum(3)() === 3;
// 1.3   sum(1)(3)(7)() === 11;
function sum(a = 0) {
    let toVal = a;
    return a === 0 ? 0 : add; // ternary not.

    function add(b) {
        if (b === undefined) return toVal;
        toVal += b;
        return add;
    }
}
sum(); //0
sum(3)(); //3;
sum(1)(3)(7)(); // 11;
/* Опциональное усложнение: написать решение в более функциональном стиле так что бы не сохранять 
внутри функции промежуточное значение. */
function sum(a = 0) {
    return a === 0 ? 0 : add; // ternary not.
    function add(b) {
        if (b === undefined) return a;
        a += b;
        return add;
    }
}
console.log(sum(2)(1)()); //3
console.log(sum()); //0
console.log(sum(3)()); //3
console.log(sum(1)(3)(7)()); //11

//2. Пройтись по дереву и тоже выдать сумму всех элементов дерева. Примерное дерево:

const treeRoot = {        //one
    data: 3,
    parent: null,
    children: []
};

const treeFirstLevel1 = { //├──two (depth: 1)
    data: 0,
    parent: treeRoot,
    children: []
};
treeRoot.children.push(treeFirstLevel1);

const treeFirstLevel2 = { //├── three (depth: 1)
    data: 2,
    parent: treeRoot,
    children: []
};
treeRoot.children.push(treeFirstLevel2);
//---------my code-----------
const treeFirstLevel3 = {//└── four (depth: 1) 
    data: 4,
    parent: treeRoot,
    children: []
};
treeRoot.children.push(treeFirstLevel3);

const treeSecondLevel5 = {//├── five (depth: 2)
    data: 10,
    parent: treeFirstLevel1,
    children: []
};
treeFirstLevel1.children.push(treeSecondLevel5);

const treeSecondLevel6 = {// └── six (depth: 2)
    data: 20,
    parent: treeFirstLevel1,
    children: []
};
treeFirstLevel1.children.push(treeSecondLevel6);

const treeSecondLevel7 = {//  └── seven (depth: 2)
    data: 30,
    parent: treeFirstLevel3,
    children: []
};
treeFirstLevel3.children.push(treeSecondLevel7);

function treeNode(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function sumTree(dataNode, sum = 0) {
    for (let value of dataNode.children) {
        sum += sumTree(value); // look over children dataNode with (value) new obj dataNode
    }
    sum += dataNode.data; // take value of treeNode
    return sum;
}
console.log(sumTree(treeRoot)); //69

//Можно ноды создавать через функцию - конструктор:
/*
function treeNode(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}
*/
//Достроейте дерево до где - то вот такого вида:
/*
 tree
 one (depth: 0)
 ├── two (depth: 1)
 │   ├── five (depth: 2)
 │   └── six (depth: 2)
 ├── three (depth: 1)
 └── four (depth: 1)
     └── seven (depth: 2)

 */