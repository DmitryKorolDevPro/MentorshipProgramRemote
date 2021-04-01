import { View } from './view.js';
import { Model } from './model.js';

class Controller {
    constructor() {
        this.loadDOM = null;
    }
    initialize() {

        //on page load loadTodo()
        loadDOM.document.addEventListener('DOMContentLoaded', () => {
            Model.loadTodo();
            Model.crossedOut();
        });
    }
}

//on click button 'add' newElement()
View.addButton.addEventListener('click', Model.checkElement);

//on click button 'save' saveElement()
View.saveButton.addEventListener('click', Model.saveElement);

document.body.onload = () => {
    Controller.initialize();
}

export { Controller };