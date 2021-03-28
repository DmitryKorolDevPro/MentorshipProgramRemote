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

function getTasks() {
  return JSON.parse(localStorage.getItem('savedTasks'));
}

export { getTasks, saveNewTask };