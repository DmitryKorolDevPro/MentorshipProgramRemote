/* eslint-disable linebreak-style */
import { input, renderTasks, showOrCloseButton, tasksListContainer } from './view.js';
import { setTasksList, saveNewTask, getTasksHtmlElements, getTasksList, getNotDoneTasksList } from './model.js';

let filtered = localStorage.getItem('filtered') ?? 'false';

document.body.onload = () => {
  if (anyTasksAlreadySaved()) {
    showOrCloseButton.style.display = 'inline-block';
    tasksListContainer.style.display = 'inline-block';
    prepareTasks(filtered);
  }
};

function prepareTasks(isFiltered) {
  if (isFiltered === 'true') {
    renderTasks(getNotDoneTasksList());
  } else {
    renderTasks(getTasksList());
  }
}

function anyTasksAlreadySaved() {
  if (getTasksList().length > 0) {
    return true;
  }
  return false;
}

function addNewTask() {
  saveNewTask({
    title: input.value,
    isCompleted: false,
  });

  input.value = '';
}

function addEventListenersForButtons() {
  const tasksElementsList = getTasksHtmlElements();

  for (const el of tasksElementsList) {
    const markAsDoneButton = el.querySelector('.tasks__button--done');
    markAsDoneButton.addEventListener('click', toggleDoneButton);

    const deleteTaskButton = el.querySelector('.tasks__button--delete');
    deleteTaskButton.addEventListener('click', deleteTask);
  }
}

function deleteTask(el) {
  const taskIndex = el.target.classList[0].split('-')[1];

  const currentTasks = getTasksList();
  currentTasks.splice(taskIndex, 1);

  setTasksList(currentTasks);
  prepareTasks(filtered);
}

function toggleDoneButton(el) {
  if (!el.target.classList.contains('icon')) {
    return;
  }

  const taskIndex = el.target.classList[1].split('-')[1];
  const currentTasks = getTasksList();
  const currentTaskStatus = currentTasks[taskIndex].isCompleted;

  if (currentTaskStatus) {
    currentTasks[taskIndex].isCompleted = false;
  } else {
    currentTasks[taskIndex].isCompleted = true;
  }

  setTasksList(currentTasks);
  prepareTasks(filtered);
}

function toggleFilter() {
  if (filtered === 'true') {
    filtered = 'false';
  } else {
    filtered = 'true';
  }

  prepareTasks(filtered);
  localStorage.setItem('filtered', filtered);
}

export { prepareTasks, addNewTask, anyTasksAlreadySaved, addEventListenersForButtons, toggleFilter, filtered };