import { prepareTasks, filtered } from './controller.js';

function setTasksList(list) {
  localStorage.setItem('savedTasks', JSON.stringify({
    list,
  }));
}

function saveNewTask(task) {
  let tasksList = localStorage.getItem('savedTasks') ?? {
    list: [],
  };

  if (typeof tasksList === 'string') {
    tasksList = JSON.parse(tasksList);
  }

  tasksList.list.push(task);
  localStorage.setItem('savedTasks', JSON.stringify(tasksList));
  prepareTasks(filtered);
}

function getTasksHtmlElements() {
  return document.querySelectorAll('.task');
}

function getTasksList() {
  const tasks = JSON.parse(localStorage.getItem('savedTasks')) ?? { list: [] };
  return tasks.list;
}

function getNotDoneTasksList() {
  const tasks = getTasksList();
  return tasks.filter((task) => !task.isCompleted);
}

export {
  setTasksList, saveNewTask, getTasksHtmlElements, getTasksList, getNotDoneTasksList,
};
