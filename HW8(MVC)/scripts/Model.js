// NOT INTERACTING WITH A CONTROLLER. SEEMS LIKE A MISTAKE.
class Model {
  constructor() {}

  addTask(title) {
    const currentTasks = this.getTasksList();

    currentTasks.push({
      'title': title,
      'isCompleted': false
    });

    this.setTasksList(currentTasks);
  }

  getTasksList() {
    const tasks = JSON.parse(localStorage.getItem('savedTasks')) ?? { list: [] };
    return tasks.list;
  }

  setTasksList(tasksList) {
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