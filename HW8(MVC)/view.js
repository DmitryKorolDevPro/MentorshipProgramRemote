import { model } from './model.js';
import Subscriber from './subscriber.js'
class View {
    constructor() {
        this.getUpdatesTodo = new Subscriber();
        this.getSavedTodo = new Subscriber();

        this.getUpdatesTodo.update = (data) => {
            this.addTodo(data);
        }
        this.getSavedTodo.update = (data) => {
            this.displaySavedTodo(data);
        }
        // Subcriptions to updata
        model.toDo.subscribe(this.getUpdatesTodo);
        model.savedTodo.subscribe(this.getSavedTodo);

        this.list = document.getElementById('list');
        this.addButton = document.querySelector('.addBtn');
        this.saveButton = document.querySelector('.saveBtn');
        this.input = document.getElementById('toDoEl');
    }

    displaySavedTodo(todo) {
        this.list.innerHTML = todo;
    }
    displayAddElement() {
        const todoElement = document.createElement('li');
        const todoText = document.createTextNode(this.input.value);
        todoElement.appendChild(todoText);

        const closeButton = document.createElement('span');
        const closeButtonText = document.createTextNode('X');
        closeButton.className = 'close';
        closeButton.appendChild(closeButtonText);

        todoElement.appendChild(closeButton);
        this.list.appendChild(todoElement);
    }

    addTodo(data) {
        if (this.shouldAddElement(data)) {
            this.displayAddElement(data);
        } else {
            this.showAlert();
        }
    }

    showAlert() {
        alert('Please type your note');
    }

    shouldAddElement(toDoText) {
        return toDoText !== '';
    }
    getNewToDoText() {
        return this.input.value;
    }

    getAllTodo() {
        return view.list.innerHTML;
    }

    crossedOut() {
        view.list.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                event.target.classList.toggle('checked');

            } else if (event.target.tagName === 'SPAN') {
                let elem = event.target.parentNode;
                elem.remove();
            }
        }, false);
    }
}

const view = new View;
export { view };