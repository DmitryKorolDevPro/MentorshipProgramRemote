import Observer from './observer.js';

class Model {
    constructor() {
        this.toDo = new Observer();
        this.savedTodo = new Observer();
        this.toDoUppercase = new Observer();
    }

    //function to load todo if list is found in local storage.
    loadTodo() {
        if (localStorage.getItem('todoList')) {
            this.savedTodo.notify(localStorage.getItem('todoList'));
        }
    }

    //save todolist state so user can access it later
    saveElement(todo) {
        localStorage.setItem('todoList', todo);
    }

    add_Todo(text) {
        this.toDo.notify(text);
    }

}

const model = new Model;
export { model };