class Model {
  addTaskToTheTasksList(title) {
    const currentTasks = this.getTasksList();
    currentTasks.push({
      'title': title,
      'isCompleted': false
    });

    this.saveTasksList(currentTasks);
  }

  removeTaskFromTheTasksList(index) {
    const currentTasks = $M.getTasksList();
    currentTasks.splice(index, 1);
    $M.saveTasksList(currentTasks);
  }

  getTasksList() {
    const tasks = JSON.parse(localStorage.getItem('savedTasks')) ?? { list: [] };
    return tasks.list;
  }

  saveTasksList(tasksList) {
    let savedTasks = {
      'list': tasksList
    };

    savedTasks = JSON.stringify(savedTasks);
    localStorage.setItem('savedTasks', savedTasks);
  }

  setFilter(newStatus) {
    localStorage.setItem('isFiltered', newStatus);
  }
}

const $M = new Model;
export { $M };