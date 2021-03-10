// 1. Try to create a couple of different situation with context (this) losing
// and fix them with: 
// - call, apply, bind
// - arrow functions
const firstObj = {
    objHeight: 175,
    sayHeigth: function () {
        return this.objHeight + ' good!';
    }
};
//var getH = firstObj.sayHeight;  //undefined (value 'this' have a meaning windows)
//getH(); //TypeError
firstObj.sayHeigth.call(firstObj);//175 good! ('call' set value 'this' = firstObj)
firstObj.sayHeigth.apply(firstObj);//175 good! (also)
var getH = firstObj.sayHeigth.bind(firstObj); //(to bind context 'this' with func firstObj)
getH();// 175 good!
const sayHh = () => firstObj.sayHeigth();//directly set value 'yhis' context 
sayHh(); //175 good!

//1.2 
Math.max(3, 6, 1, 8, 2);//8
var arrFind = [3, 6, 1, 8, 2];
Math.max(arrFind);//NaN 
//somewhat we lose this because Math.max leads to number array
Math.max.apply(Math, arrFind);

//Object example for ex. 2 / 3

const menu = [{
    product_name: "burger menu",
    tax: 0.5,
    subtotal: 4.5,
    total: 5,
    items: [
        {
            product_name: "french fries",
            tax: 0,
            subtotal: 2,
            total: 2,
            entity_id: "someId2",
            parent_id: "someId1",
            items: [
                {
                    product_name: "ketchup",
                    tax: 0,
                    subtotal: 1,
                    total: 1,
                    entity_id: "someId3",
                    parent_id: "someId2",
                }
            ],
        },
    ],
    entity_id: "someId1",
}];

// 2. Create nested obects tree structure (3 levels nesting):
// Implement all posible, that you know, clone methods (including cloning the nested properties)
// 2.1 Easy cloning 
// this variants (2,1 - 2.3) is not situable for nested properties

const menu = {
    product_name: "burger menu",
    tax: 0.5,
    subtotal: 4.5,
    total: 5,
    items: [
        {
            product_name: "french fries",
            tax: 0,
            subtotal: 2,
            total: 2,
            entity_id: "someId2",
            parent_id: "someId1",
            items: [
                {
                    product_name: "ketchup",
                    tax: 0,
                    subtotal: 1,
                    total: 1,
                    entity_id: "someId3",
                    parent_id: "someId2",
                }
            ],
        },
    ],
    entity_id: "someId1",
}

function copy(mainObj) {
    let objCopy = {}; // objCopy will store mainObj
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key]; // copy all properties into objCopy
    }
    return objCopy;
}
console.log(copy(menu));
//0: {product_name: "burger menu", tax: 0.5, subtotal: 4.5, total: 5, items: Array(1), …}


// 2.2 Spread {... obj}
var cloneMenu1 = { ...menu };
console.log(cloneMenu1);
//0: {product_name: "burger menu", tax: 0.5, subtotal: 4.5, total: 5, items: Array(1), …}


//2.3 Object.assign({}, obj)
const cloneMenu2 = Object.assign({}, menu);
console.log(cloneMenu2);
//0: {product_name: "burger menu", tax: 0.5, subtotal: 4.5, total: 5, items: Array(1), …}

//2.4 JSON cloning
const cloneMenuJSON = JSON.parse(JSON.stringify(menu))//qwikly but
//JSON cannot contain functions. This means that not every object can be cloned without loss.
console.log(cloneMenuJSON);


// 3. Create tree of nested objects
// Use objects structure from example 2, generate flat Map set (key-value), here will be 
//stored spesific user information.
// for example(you created products collection with nested products inside),
// by unic product id create list of product_id-product price.
const menu3 = [{
    product_name: "burger menu3",
    tax: 0.5,
    subtotal: 4.5,
    total: 5,
    id: "someId1",
    items: [{
        product_name: "french fries",
        tax: 0,
        subtotal: 2,
        total: 2,
        id: "someId2",
        items: [{
            product_name: "ketchup",
            tax: 0,
            subtotal: 1,
            total: 1,
            id: "someId3"
        }, {
            product_name: "ketchup_two",
            tax: 0,
            subtotal: 1,
            total: 1,
            id: "someId3"
        }, {
            product_name: "ketchup",
            tax: 0,
            subtotal: 1,
            total: 1,
            id: "someId4"
        }, {
            product_name: "ketchup_three",
            tax: 0,
            subtotal: 1,
            total: 1,
            id: "someId3"
        }]
    }]
}];

var menuItems = new Map();

getMapNoDublicate(menu3);

function getMapNoDublicate(data) {
    for (let i = 0; i < data.length; i++) {
        menuItems.set(data[i].id, data[i]);//method map.set() - add object if it does not exist (OR)
        //                                                    - if it exist then updates element
        //i can use it like a checking
        if (data[i].items) {
            getMapNoDublicate(data[i].items);
        }
    }

    return false;
}

console.log(menuItems.keys());
console.log(menuItems.values());
