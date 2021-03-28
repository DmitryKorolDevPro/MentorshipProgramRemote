import { addNewTask } from './controller.js';

const input = document.querySelector('.to-do__input');
const addTaskButton = document.querySelector('.to-do__button--add');
const showOrCloseButton = document.querySelector('.to-do__button--show');
const tasksListContainer = document.querySelector('.tasks__list');

const lightGreenColor = 'rgba(50, 218, 50, 0.323)';
const lightRedColor = 'rgba(218, 50, 50, 0.323)';

function renderTasks(savedTasks) {
  tasksListContainer.innerHTML = `
  <li class="tasks__list-item tasks__list-item--last">
    <div class="tasks__title tasks__title--last">CURRENT TASKS</div>
  </li>`;

  for (const task of savedTasks.list) {
    //       ${task.isCompleted}
    tasksListContainer.innerHTML += `
    <li class="tasks__list-item">
      <button class="tasks__button tasks__button--done">
        <img src="images/task-not-done.svg" alt="Press to mark task as done">
      </button>
        <div class="tasks__title">${task.title}</div>
      <button class="tasks__button tasks__button--delete">
        <img src="images/delete-task.svg" alt="Press to delete task">
      </button>
    </li>`
  }

  tasksListContainer.innerHTML += `
  <li class="tasks__list-item tasks__list-item--last">
      <div class="tasks__title tasks__title--last">ADD MORE TASKS</div>
      <button class="tasks__button">All</button>
  </li>`;
}

input.addEventListener('input', () => {
  if (input.value.length > 0) {
    addTaskButton.style.backgroundColor = lightGreenColor;
  } else {
    addTaskButton.style.backgroundColor = 'white';
  }
});

addTaskButton.addEventListener('click', () => {
  if (input.value.length > 0) {
    addNewTask();

    addTaskButton.style.backgroundColor = 'white';
    showOrCloseButton.style.display = 'inline-block';
  } else {
    input.style.border = '1px solid rgba(224, 16, 16, 0.692)';

    setTimeout(() => {
      input.style.border = '1px solid #000';  
    }, 1000);
  }
})

showOrCloseButton.addEventListener('click', switchShowOrCloseButton);

function switchShowOrCloseButton() {
  if (tasksListContainer.style.height === '25vh') {
    tasksListContainer.style.height = '0px';
    tasksListContainer.style.overflow = 'hidden';
    tasksListContainer.style.padding = '0px';
    showOrCloseButton.innerHTML = 'SHOW';
    showOrCloseButton.style.backgroundColor = lightGreenColor;
  } else {
    tasksListContainer.style.height = '25vh';
    tasksListContainer.style.overflowY = 'scroll';
    tasksListContainer.style.padding = '15px';
    showOrCloseButton.innerHTML = 'CLOSE';
    showOrCloseButton.style.backgroundColor = lightRedColor;
  }
}

export { input, renderTasks, tasksListContainer, showOrCloseButton };