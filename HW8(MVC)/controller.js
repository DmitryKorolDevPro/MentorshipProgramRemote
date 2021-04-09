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

    contentLisener() {
        //on click button 'add' newElement()
        this.addButton.addEventListener('click', controller.addTodo);

        //on click button 'save' saveElement()
        this.saveButton.addEventListener('click', controller.saveTodo);
    }
}

const controller = new Controller;
document.body.onload = () => {
    controller.contentLisener();
    controller.restoreTodo();
    view.crossedOut();
}

export { controller };