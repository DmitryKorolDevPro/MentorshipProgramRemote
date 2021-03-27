import { input, renderTasks, showTasksButton, tasksListContainer } from './view.js';
import { getTasks, saveNewTask } from './model.js';

document.body.onload = () => {  
  if (anyTasksAlreadySaved()) {
    showTasksButton.style.display = 'inline-block';
    tasksListContainer.style.display = 'inline-block';

    renderTasks(getTasks());
  }
}

function anyTasksAlreadySaved() {
  if (getTasks() !== null) {
    return true;
  }
  
  return false;
}

function addNewTask() {
  saveNewTask({
    title: input.value,
    isCompleted: false
  })

  input.value = '';

  renderTasks(getTasks());
}

export { addNewTask, anyTasksAlreadySaved };