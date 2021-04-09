
import { describe, test, expect, it, jest } from '@jest/globals';
import { model } from './model.js';
import { controller } from './controller.js';
import { view } from './view.js';

describe('Testing model...', () => {
    const todo = 'Hello Mr World!';
    test('Testing method (saveElement) ', () => {
        const setItem = jest.spyOn(Storage.prototype, 'setItem');
        model.saveElement(todo);

        expect(setItem).toHaveBeenCalledWith('todoList', todo);
    });
    test('Testing method (loadTodo) should call (notify) ', () => {
        model.savedTodo.notify = jest.fn();
        const parentGetItem = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue('todo');
        model.loadTodo();
        expect(model.savedTodo.notify).toHaveBeenCalledWith('todo');
    });
    test('Testing method (add_Todo) ', () => {
        model.toDo.notify = jest.fn();
        model.add_Todo(todo);
        expect(model.toDo.notify).toHaveBeenCalledWith(todo);
    });
});

describe('Testing controller...', () => {
    test('Testing method (addTodo) should call (add_Todo) in model.js ', () => {
        const getNewToDoText_Spy = jest.spyOn(view, 'getNewToDoText').mockReturnValue('todo');
        model.add_Todo = jest.fn();

        controller.addTodo();
        expect(model.add_Todo).toHaveBeenCalledWith('todo');
    });
    test('Testing method (saveTodo) should call (saveElement) in model.js', () => {
        const getAllTodo_spy = jest.spyOn(view, 'getAllTodo').mockReturnValue('todo');
        model.saveElement = jest.fn();
        controller.saveTodo();

        expect(model.saveElement).toHaveBeenCalledWith('todo');
    });
    test('Testing method (restoreTodo) should call (loadTodo) in model.js', () => {
        model.loadTodo = jest.fn();
        controller.restoreTodo();

        expect(model.loadTodo).toBeCalled();
    });
});