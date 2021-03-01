1. Реализовать такую функцию sum что бы она выполнялась при условии:
sum() === 0;
sum(3)() === 3;
sum(1)(3)(7)() === 11;
Опциональное усложнение: написать решение в более функциональном стиле так что бы не сохранять внутри функции промежуточное значение.

2. Пройтись по дереву и тоже выдать сумму всех элементов дерева. Примерное дерево:

const treeRoot = {
  data: 1,
  parent: null,
  children: []
};

const treeFirstLevel1 = {
  data: 8,
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

Можно ноды создавать через функцию-конструктор:
function treeNode(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

Достроейте дерево до где-то вот такого вида:
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