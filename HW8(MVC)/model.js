import { View } from "./view";

class Model {
    constructor() { }

    //function to load todo if list is found in local storage.
    loadTodo() {
        if (localStorage.getItem('todoList')) {
            View.list.innerHTML = localStorage.getItem('todoList');
        }
    }

    //save todolist state so user can access it later
    saveElement() {
        localStorage.setItem('todoList', View.list.innerHTML);
        alert('Your TODO Saved!');
    }

    //function excluding execute script before the page loads
    crossedOut() {
        View.list.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                event.target.classList.toggle('checked');
            } else if (event.target.tagName === 'SPAN') {
                let div = event.target.parentNode;
                div.remove();
            }
        }, false);
    }

    checkElement() {
        if (View.inputValue == '') {
            alert('Type your note');
        } else {
            View.displayAddElement();
        }

    }
}

module.exports = { Model };
//export { Model };



