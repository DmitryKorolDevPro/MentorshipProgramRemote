
// 1. Try to create a couple of different situation with context (this) losing
// and fix them with: 
// - call, apply, bind
// - arrow functions

// 2. Create nested obects tree structure (3 levels nesting):
// Implement all posible, that you know, clone methods (including cloning the nested properties)

// 3. Create tree of nested objects
// Use objects structure from example 2, generate flat Map set (key-value), here will be stored spesific user information
// for example(you created products collection with nested products inside),
// by unic product id create list of product_id-product price.



Object example for ex. 2 / 3

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
