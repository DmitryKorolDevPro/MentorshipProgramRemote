
import { describe, test, expect, jest } from '@jest/globals';
import { model } from './model.js';

describe('Testing model...', () => {
    const todo = 'Hello Mr World!';
    test('Testing method saveElement() ', () => {
        const setItem = jest.spyOn(Storage.prototype, 'setItem');
        model.saveElement(todo);

        expect(setItem).toHaveBeenCalledWith('todoList', todo);
    });
    test('Method notify() should called next after method loadTodo() ', () => {
        model.savedTodo.notify = jest.fn();
        const parentGetItem = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('todo');
        model.loadTodo();
        expect(model.savedTodo.notify).toHaveBeenCalledWith('todo');
    });
    test('Testing method add_Todo() ', () => {
        model.toDo.notify = jest.fn();
        model.add_Todo(todo);
        expect(model.toDo.notify).toHaveBeenCalledWith(todo);
    });
});

describe('Testing controller...', () => {
    test('Testing  ', () => {

    });
    test('Testing ', () => {

    });
});
