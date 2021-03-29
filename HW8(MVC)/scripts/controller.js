import { renderTasks, toggleShowButton } from './view.js';
import { saveNewTask, getTasksList, setTasksList, setFilter } from './model.js';

const input = document.querySelector('.to-do__input');
const addTaskButton = document.querySelector('.to-do__button--add');
const tasksListContainer = document.querySelector('.tasks__list');
const showOrCloseButton = document.querySelector('.to-do__button--show');

document.body.onload = () => {
  tasksListContainer.addEventListener('click', element => {
    const clickedOn = element.target;
    const clickedOnClassList = clickedOn.classList;
  
    if (clickedOnClassList.contains('icon')) {
      let [type, index] = clickedOnClassList[1].split('-');

      if (type === 'doneIcon') {
        toggleDoneMarker(index);
      } else if (type === 'deleteIcon'){
        deleteTask(index);
      } else {
        switchFilterMode();
      }
    }
  });

  showOrCloseButton.addEventListener('click', toggleShowButton);

  if (anyTasksAlreadySaved()) {
    toggleShowButton();
    renderTasks(getTasksList());
  }
}

function toggleDoneMarker(index) {
  const tasks = getTasksList();
  let isDone = tasks[index].isCompleted;

  if (isDone) {
    isDone = false;
  } else {
    isDone = true;
  }
  tasks[index].isCompleted = isDone;
  
  setTasksList(tasks);
  renderTasks(tasks);
}

function deleteTask(index) {
  const tasks = getTasksList();
  tasks.splice(index, 1);

  setTasksList(tasks);
  renderTasks(tasks);
}

function switchFilterMode() {
  let statusOfFilter = isFiltered();

  if (statusOfFilter === 'true') {
    statusOfFilter = 'false';
  } else {
    statusOfFilter = 'true';
  }

  setFilter(statusOfFilter);
  renderTasks(getTasksList());
}

function isFiltered() {
  return localStorage.getItem('isFiltered') ?? 'false';
};

function addNewTask() {
  saveNewTask({
    title: input.value,
    isCompleted: false,
  });

  input.value = '';
}

function updateTasks() {
  renderTasks(getTasksList());
}

function anyTasksAlreadySaved() {
  if (getTasksList().length > 0) {
    return true;
  }
  return false;
}

export { input, addTaskButton, tasksListContainer, showOrCloseButton,
addNewTask, updateTasks, isFiltered, getTasksList, };