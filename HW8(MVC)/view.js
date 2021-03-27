import { addNewTask } from './controller.js';

const input = document.querySelector('.to-do__input');
const addTaskButton = document.querySelector('.to-do__button--add');
const showTasksButton = document.querySelector('.to-do__button--show');
const tasksListContainer = document.querySelector('.tasks__list');

function renderTasks(savedTasks) {
  console.log(savedTasks);
  tasksListContainer.innerHTML = '';

  for (const task of savedTasks.list) {
    tasksListContainer.innerHTML = `
    <li class="tasks__list-item">
      <button class="tasks__button tasks__button--done">${task.isCompleted}</button>
        <span class="task__title">${task.title}</span>
      <button class="tasks__button tasks__button--delete">N</button>
    </li>`
  }
}

input.addEventListener('input', () => {
  if (input.value.length > 0) {
    addTaskButton.style.backgroundColor = 'rgba(50, 218, 50, 0.623)';
  } else {
    addTaskButton.style.backgroundColor = 'white';
  }
});

addTaskButton.addEventListener('click', () => {
  if (input.value.length > 0) {
    addNewTask();

    addTaskButton.style.backgroundColor = 'white';
    showTasksButton.style.display = 'inline-block';
  }
})

showTasksButton.addEventListener('click', () => {
  if (tasksListContainer.style.display === 'inline-block') {
    tasksListContainer.style.height = '0px';
    showTasksButton.innerHTML = 'SHOW';
  } else {
    tasksListContainer.style.height = 'auto';
    showTasksButton.innerHTML = 'CLOSE';
  }
})

export { input, renderTasks, tasksListContainer, showTasksButton };