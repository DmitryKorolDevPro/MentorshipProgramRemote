class View {
    constructor() {
        this.list = document.querySelector('ul');
        this.addButton = document.querySelector('.addBtn');
        this.saveButton = document.querySelector('.saveBtn');
        this.li = document.createElement('li');
        this.inputValue = document.getElementById('toDoEl').value;
        this.text = document.createTextNode(this.inputValue);
        this.span = document.createElement('SPAN');
        this.txt = document.createTextNode('X');


    }
    displayAddElement() {
        this.li.appendChild(this.text);
        document.getElementById('list').appendChild(li);
        document.getElementById('toDoEl').value = '';

        this.span.className = 'close';
        this.span.appendChild(this.txt);
        this.li.appendChild(this.span);

    }
}

export { View };