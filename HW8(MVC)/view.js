import { addNewTask } from './controller.js';

const input = document.querySelector('.to-do__input');
const addTask = document.querySelector('.to-do__button--add');
const showTasks = document.querySelector('.to-do__button--show');

input.addEventListener('input', () => {
  if (input.value.length > 0) {
    addTask.style.backgroundColor = 'rgba(50, 218, 50, 0.623)';
  } else {
    addTask.style.backgroundColor = 'white';
  }
});

addTask.addEventListener('click', () => {
  if (input.value.length > 0) {
    addNewTask(input.value);
    input.value = '';
    addTask.style.backgroundColor = 'white';
    showTasks.style.display = 'inline-block';
  }
})