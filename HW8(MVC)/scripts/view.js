import { addNewTask, addEventListenersForButtons, toggleFilter, filtered } from './controller.js';

const input = document.querySelector('.to-do__input');
const addTaskButton = document.querySelector('.to-do__button--add');
const showOrCloseButton = document.querySelector('.to-do__button--show');
const tasksListContainer = document.querySelector('.tasks__list');

const lightGreenColor = 'rgba(50, 218, 50, 0.323)';
const lightRedColor = 'rgba(218, 50, 50, 0.323)';

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
});

showOrCloseButton.addEventListener('click', toggleShowButton);

function toggleShowButton() {
  tasksListContainer.style.display = 'inline-block';
  showOrCloseButton.style.display = 'inline-block';

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

function renderTasks(tasks) {
  if (tasks.length === 0 && filtered === 'false') {
    toggleShowButton();
    showOrCloseButton.style.display = 'none';
    tasksListContainer.style.display = 'none';
    return;
  }

  let tasksCounter = 0;

  tasksListContainer.innerHTML = `
  <li class="tasks__list-item">
    <div class="tasks__title tasks__title--last">CURRENT TASKS</div>
  </li>`;

  for (const task of tasks) {
    const li = document.createElement('li');
    const markAsDoneButton = document.createElement('button');
    const markAsDoneIcon = document.createElement('img');
    const taskTitle = document.createElement('div');
    const deleteTaskButton = document.createElement('button');
    const deleteTaskIcon = document.createElement('img');

    li.classList.add('tasks__list-item', 'task');

    markAsDoneIcon.alt = 'Press to mark task as done';
    markAsDoneIcon.draggable = false;
    markAsDoneIcon.classList.add('icon', `icon-${tasksCounter}`);

    if (task.isCompleted === true) {
      markAsDoneIcon.src = 'images/task-done.svg';
      taskTitle.classList.add('task__title--done');
    } else {
      markAsDoneIcon.src = 'images/task.svg';
    }

    markAsDoneButton.classList.add('tasks__button', 'tasks__button--done');
    markAsDoneButton.appendChild(markAsDoneIcon);

    taskTitle.classList.add('task__title');
    taskTitle.innerText = task.title;

    deleteTaskIcon.classList.add('icon', `icon-${tasksCounter}`);
    deleteTaskIcon.draggable = false;
    deleteTaskIcon.alt = 'Press to delete task';
    deleteTaskIcon.src = 'images/delete-task.svg';

    deleteTaskButton.appendChild(deleteTaskIcon);
    deleteTaskButton.classList.add('tasks__button', 'tasks__button--delete');

    li.appendChild(markAsDoneButton);
    li.appendChild(taskTitle);
    li.appendChild(deleteTaskButton);

    tasksListContainer.appendChild(li);
    tasksCounter++;
  }

  const li = document.createElement('li');
  const div = document.createElement('div');
  const filterTasksButton = document.createElement('button');
  li.classList.add('tasks__list-item');
  div.classList.add('tasks__title', 'tasks__title--last');
  filterTasksButton.classList.add('tasks__button', 'tasks__button--filter');

  div.innerText = 'ADD MORE TASKS';

  if (filtered === 'true') {
    filterTasksButton.innerText = 'NOT DONE';
  } else {
    filterTasksButton.innerText = 'ALL';
  }

  li.append(div, filterTasksButton);
  filterTasksButton.addEventListener('click', toggleFilter);

  tasksListContainer.appendChild(li);

  addEventListenersForButtons();
}

export { input, renderTasks, tasksListContainer, showOrCloseButton };