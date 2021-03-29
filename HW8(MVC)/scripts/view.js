import { input, addTaskButton, tasksListContainer, showOrCloseButton,
addNewTask, isFiltered, getTasksList } from './controller.js';

const lightGreenColor = 'rgba(50, 218, 50, 0.323)';
const lightRedColor = 'rgba(218, 50, 50, 0.323)';
let invalidInputTimer;

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
    clearTimeout(invalidInputTimer);
    
    invalidInputTimer = setTimeout(() => {
      input.style.border = '1px solid #000';
    }, 1000);
  }
});

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
  if (tasks.length === 0 && isFiltered() === 'false') {
    toggleShowButton();
    showOrCloseButton.style.display = 'none';
    tasksListContainer.style.display = 'none';
    return;
  }

  renderTasksContainer(tasks);
}

function renderTasksContainer(tasks) {
  tasksListContainer.innerHTML = `
  <li class="tasks__list-item">
    <div class="tasks__title tasks__title--last">CURRENT TASKS</div>
  </li>`;

  renderTasksItems(tasks);
  
  let filterButtonText;
    if (isFiltered() === 'true') {
      filterButtonText = 'NOT DONE';
    } else {
      filterButtonText = 'ALL';
    }

  tasksListContainer.innerHTML += `
  <li class="tasks__list-item">
    <div class="tasks__title tasks__title--last">ADD MORE TASKS</div>
    <button class="tasks__button tasks__button--filter icon">
      ${filterButtonText}
    </button>
  </li>`;
}

function renderTasksItems(tasks) {
  const currentTasks = getTasksList();
  let tasksCounter = 0;

  for (const task of tasks) {
    if (isFiltered() === 'true' && currentTasks[tasksCounter].isCompleted === true) {
      tasksCounter++;
      continue;
    }

    tasksListContainer.innerHTML += `
      <li class="tasks__list-item task">
        <button class="tasks__button tasks__button--done">
          <img src="images/task.svg" class="icon doneIcon-${tasksCounter}" alt="Press to mark task as done" draggable="false">
        </button>

        <div class="task__title title-${tasksCounter}">${task.title}</div>

        <button class="tasks__button tasks__button--delete">
          <img src="images/delete-task.svg" class="icon deleteIcon-${tasksCounter}" draggable="false" alt="Press to delete task">
        </button>
      </li>
    `;

    if (task.isCompleted === true) {
      const currentMarkAsDoneIcon = document.querySelector('.doneIcon-' + tasksCounter);
      currentMarkAsDoneIcon.src = 'images/task-done.svg';

      const currentTitle = document.querySelector('.title-' + tasksCounter);
      currentTitle.classList.add('task__title--done');
    }

    tasksCounter++;
  }
}

export { renderTasks, toggleShowButton };