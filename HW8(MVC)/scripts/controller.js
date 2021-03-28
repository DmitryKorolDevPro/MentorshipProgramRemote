import { input, renderTasks, showOrCloseButton, tasksListContainer } from './view.js';
import { getSavedTasks, saveNewTask, getTasksElements, getCurrentTasks, setTasksList, getNotDoneTasks } from './model.js';

let filtered = localStorage.getItem('filtered') ?? 'false';

document.body.onload = () => {  
  if (anyTasksAlreadySaved()) {
    showOrCloseButton.style.display = 'inline-block';
    tasksListContainer.style.display = 'inline-block';

    if (filtered === 'true') {
      renderTasks(getNotDoneTasks());
    } else {
      renderTasks(getSavedTasks());
    }
  }
}

function anyTasksAlreadySaved() {
  if (getSavedTasks() !== null) {
    return true;
  }
  return false;
}

function addNewTask() {
  saveNewTask({
    title: input.value,
    isCompleted: false
  });

  input.value = '';

  if (filtered === 'true') {
    renderTasks(getNotDoneTasks());
  } else {
    renderTasks(getSavedTasks());
  }
}

function addEventListenersForButtons() {
  const tasksElementsList = getTasksElements();

  for (const el of tasksElementsList) {
    const markAsDoneButton = el.querySelector('.tasks__button--done');
    markAsDoneButton.addEventListener('click', toggleDoneButton);

    const deleteTaskButton = el.querySelector('.tasks__button--delete');
    deleteTaskButton.addEventListener('click', deleteTask);
  }
}

function deleteTask(el) {
  let taskIndex = el.target.classList[0].split('-')[1];

  const currentTasks = getCurrentTasks();
  currentTasks.splice(taskIndex, 1);

  setTasksList(currentTasks);
  renderTasks(getSavedTasks());
}

function toggleDoneButton(el) {
  let taskIndex = el.target.classList[0].split('-')[1];

  const currentTasks = getCurrentTasks();
  const currentTaskStatus = currentTasks[taskIndex].isCompleted;

  if (currentTaskStatus) {
    currentTasks[taskIndex].isCompleted = false;
  } else {
    currentTasks[taskIndex].isCompleted = true;
  }

  setTasksList(currentTasks);
  renderTasks(getSavedTasks());
}

function toggleFilter() {
  if (filtered === 'true') {
    filtered = 'false';
    renderTasks(getSavedTasks());
  } else {
    filtered = 'true';
    renderTasks(getNotDoneTasks());
  }

  localStorage.setItem('filtered', filtered);
}

export { addNewTask, anyTasksAlreadySaved, addEventListenersForButtons, toggleFilter, filtered };