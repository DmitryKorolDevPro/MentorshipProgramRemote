class View {
    constructor() {
        this.list = document.getElementById('list');
        this.addButton = document.querySelector('.addBtn');
        this.saveButton = document.querySelector('.saveBtn');

        this.input = document.getElementById('toDoEl');

    }
    displayAddElement() {
        const todoElement = document.createElement('li');
        const todoText = document.createTextNode(this.inputValue);
        todoElement.appendChild(todoText);

        const closeButton = document.createElement('span');
        const closeButtonText = document.createTextNode('X');
        closeButton.className = 'close';
        closeButton.appendChild(closeButtonText);

        todoElement.appendChild(closeButton);
        this.list.appendChild(todoElement);

        this.input.value = '';
    }
    showAlert() {
        alert('Please type your note');
    }

}

const view = new View;
export { view };