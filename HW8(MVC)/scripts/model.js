import { updateTasks } from './controller.js';

function saveNewTask(task) {
  let tasksList = localStorage.getItem('savedTasks') ?? {
    list: [],
  };

  if (typeof tasksList === 'string') {
    tasksList = JSON.parse(tasksList);
  }

  tasksList.list.push(task);
  localStorage.setItem('savedTasks', JSON.stringify(tasksList));

  updateTasks();
}

function getTasksList() {
  const tasks = JSON.parse(localStorage.getItem('savedTasks')) ?? { list: [] };
  return tasks.list;
}

function getNotDoneTasksList() {
  const tasks = getTasksList();
  return tasks.filter((task) => !task.isCompleted);
}

function setTasksList(list) {
  localStorage.setItem('savedTasks', JSON.stringify({
    list,
  }));
}

function setFilter(newStatus) {
  localStorage.setItem('isFiltered', newStatus);
}

export { saveNewTask, getTasksList, getNotDoneTasksList, setTasksList, setFilter };
