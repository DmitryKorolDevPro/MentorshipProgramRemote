
import { describe, test, expect, jest } from '@jest/globals';
import { model } from './model.js';

describe('Testing model...', () => {
    const todo = 'Hello Mr World!';
    test('Testing saveElement... ', () => {
        const setItem = jest.spyOn(Storage.prototype, 'setItem');
        model.saveElement(todo);

        expect(setItem).toHaveBeenCalledWith('todoList', todo);
    });
    test('Testing loadTodo... ', () => {
        const getItem = jest.spyOn(Storage.prototype, 'getItem');

        const notify = jest.spyOn(Storage.prototype, 'notify');

        model.loadTodo();

        expect(notify).toHaveBeenCalledWith('todoList', getItem);
    });
});

//                this.savedTodo = new Observer();
 //               loadTodo() {
 //                   if (localStorage.getItem('todoList')) {
 //                       this.savedTodo.notify(localStorage.getItem('todoList'));
 //                   }
//                saveElement(todo) {
//                   localStorage.setItem('todoList', todo);
//                 }

// it("calls getItem", () => {
    // mockGetItem = jest.fn().mockReturnValue('{"id": "1"}');
    // const res = funcToTest();
    // expect(mockGetItem.mock.calls.length).toBe(1);
    // sessionStorage.getItem("abc");

    // expect(sessionStorage.getItem).toHaveBeenCalledWith("abc");

//  // https://github.com/facebook/jest/issues/6858


// describe('Testing controller...', () => {
//     test('Testing  ', () => {

//     });
//     test('Testing ', () => {

//     });
// });
