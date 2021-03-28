import { input, renderTasks, showOrCloseButton, tasksListContainer } from './view.js';
import { getSavedTasks, saveNewTask, getTasksElements, getCurrentTasks, setTasksList } from './model.js';

document.body.onload = () => {  
  if (anyTasksAlreadySaved()) {
    showOrCloseButton.style.display = 'inline-block';
    tasksListContainer.style.display = 'inline-block';
    renderTasks(getSavedTasks());
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
  renderTasks(getSavedTasks());
}

function addEventListenersForButtons() {
  const tasksElementsList = getTasksElements();

  for (const el of tasksElementsList) {
    const markAsDoneButton = el.querySelector('.tasks__button--done');
    markAsDoneButton.addEventListener('click', switchDoneButton);

    const deleteTaskButton = el.querySelector('.tasks__button--delete');
    deleteTaskButton.addEventListener('click', deleteTask);
  }
}

function deleteTask(el) {
  let taskIndex = el.target.classList[0].split('-')[1];
  console.log('deleted ' + taskIndex);


}

function switchDoneButton(el) {
  let taskIndex = el.target.classList[0].split('-')[1];
  console.log('switched ' + taskIndex);

  const currentTasks = getCurrentTasks();
  const currentTaskStatus = currentTasks[taskIndex].isCompleted;

  if (currentTaskStatus) {
    currentTasks[taskIndex].isCompleted = false;
  } else {
    currentTasks[taskIndex].isCompleted = true;
  }

  setTasksList(currentTasks);
  renderTasks(getSavedTasks())
}

export { addNewTask, anyTasksAlreadySaved, addEventListenersForButtons };