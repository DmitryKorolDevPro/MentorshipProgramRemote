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

    shouldAddElement() {
        return view.input.value !== '';
    }
    addTodo() {
        if (this.shouldAddElement()) {
            view.displayAddElement();
        } else {
            view.showAlert();
        }
    }
    //should add filter by completed or no
    movingToComplete() {

    }
}

const model = new Model;
export { model };