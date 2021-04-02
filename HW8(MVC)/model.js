import { view } from "./view.js";

class Model {
    constructor() { }

    //function to load todo if list is found in local storage.
    loadTodo() {
        if (localStorage.getItem('todoList')) {
            view.list.innerHTML = localStorage.getItem('todoList');
        }
    }

    //save todolist state so user can access it later
    saveElement() {
        localStorage.setItem('todoList', view.list.innerHTML);
        alert('Your TODO Saved!');
    }

    //function excluding execute script before the page loads
    crossedOut() {
        view.list.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                event.target.classList.toggle('checked');
            } else if (event.target.tagName === 'SPAN') {
                let div = event.target.parentNode;
                div.remove();
            }
        }, false);
    }
    shouldAddElement() {
        if (view.inputValue !== '') {
            return;
        }
    }
    addTodo() {
        if (this.shouldAddElement()) {
            view.displayAddElement();
        } else {
            view.showAlert();
        }

    }
}

const model = new Model;
export { model };