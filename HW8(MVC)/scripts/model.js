function setTasksList(list) {
  localStorage.setItem('savedTasks', JSON.stringify({
    'list': list
  }));
}

function saveNewTask(task) {
  let tasksList = localStorage.getItem('savedTasks') ?? {
    "list": []
  };
  
  if (typeof tasksList === 'string') {
    tasksList = JSON.parse(tasksList);
  }

  tasksList.list.push(task);
  localStorage.setItem('savedTasks', JSON.stringify(tasksList));
}

function getTasksElements() {
  return document.querySelectorAll('.task');
}

function getSavedTasks() {
  return JSON.parse(localStorage.getItem('savedTasks'));
}

function getCurrentTasks() {
  return getSavedTasks().list;
}

function getNotDoneTasks() {
  const tasks = getCurrentTasks();

  return ({
    'list': tasks.filter(el => !el.isCompleted)
  });
}

export { getSavedTasks, saveNewTask, getTasksElements, getCurrentTasks, setTasksList, getNotDoneTasks };