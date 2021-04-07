import { view } from './view.js';
import { model } from './model.js';

class Controller {
    constructor() { }

    addTodo() {
        const todo = view.getNewToDoText();
        model.add_Todo(todo);
    }

    saveTodo() {
        model.saveElement(view.getAllTodo());
    }

    restoreTodo() {
        model.loadTodo();
    }

}

const controller = new Controller;
document.body.onload = () => {
    view.contentLisener();
    controller.restoreTodo();
    view.crossedOut();
}

export { controller };