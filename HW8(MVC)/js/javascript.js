//Model
//function to load todo if list is found in local storage.
function loadTodo() {
    if (localStorage.getItem('todoList')) {
        list.innerHTML = localStorage.getItem('todoList');
    }
}
//save todolist state so user can access it later
function saveElement() {
    localStorage.setItem('todoList', list.innerHTML);
    alert('Your TODO Saved!');
}

//View
var list = document.querySelector('ul');
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    } else if (event.target.tagName === 'SPAN') {
        var div = event.target.parentNode;
        div.remove();
    }
}, false);

function addElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var text = document.createTextNode(inputValue);
    li.appendChild(text);

    if (inputValue == '') {
        alert('Type your note');
    } else {
        document.getElementById('list').appendChild(li);
    }

    document.getElementById('toDoEl').value = '';
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('X');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
}

//Controller
var addButton = document.querySelector(".addBtn");
var saveButton = document.querySelector(".saveBtn");
//onclick newElement()
addButton.addEventListener('click', () => {
    addElement();
});
//onclick saveElement()
saveButton.addEventListener('click', () => {
    saveElement();
});
//onPageLoad loadTodo()
document.addEventListener("DOMContentLoaded", () => {
    loadTodo();
});
