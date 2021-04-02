import { view } from './view.js';
import { model } from './model.js';

class Controller {
    constructor() { }

    //call method inside class Model
    addTodo() {
        model.addTodo();
    }
    //call method inside class Model
    saveTodo() {
        model.saveElement();
    }
    //restore data on page load
    restoreTodo() {
        model.loadTodo();
    }
    contentLisener() {
        //on click button 'add' newElement()
        view.addButton.addEventListener('click', this.addTodo);

        //on click button 'save' saveElement()
        view.saveButton.addEventListener('click', this.saveTodo);
    }
}

const controller = new Controller;
document.body.onload = () => {
    controller.contentLisener();
    controller.restoreTodo();
    model.crossedOut();
}

export { controller };