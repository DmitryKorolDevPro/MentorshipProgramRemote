import { $C } from './Controller.js';

class View {
  constructor() {
    this.toDoContainer = document.querySelector('.to-do');

    const h1 = document.createElement('h1');
    h1.innerText = 'THINGS TO DO ✌️';
    document.body.prepend(h1);

    this.showButton = document.createElement('button');
    this.showButton.classList.add('to-do__button', 'to-do__button--show');
    this.showButton.title = 'Show all tasks';
    this.showButton.innerText = 'SHOW';
    this.toDoContainer.appendChild(this.showButton);

    this.input = document.createElement('input');
    this.input.classList.add('to-do__input');
    this.input.placeholder = 'Add a new task 👈';
    this.toDoContainer.appendChild(this.input);

    this.addButton = document.createElement('button');
    this.addButton.classList.add('to-do__button', 'to-do__button--add');
    this.addButton.title = 'Add a new task';
    this.addButton.innerText = 'ADD';
    this.toDoContainer.appendChild(this.addButton);

    this.tasksContainer = document.createElement('div');
    this.tasksContainer.classList.add('tasks');
    this.toDoContainer.appendChild(this.tasksContainer);

    this.tasksList = document.createElement('ul');
    this.tasksList.classList.add('tasks__list');
    this.tasksContainer.appendChild(this.tasksList);
  }

  renderTasks(tasks) {
    if (tasks.length === 0 && $C.isFiltered() === 'false') {
      this.toggleShowButton();
      this.showButton.style.display = 'none';
      this.tasksList.style.display = 'none';
      $C.tasksListIsHidden = true;
      return;
    }
    this.createTasksListBody(tasks);
  }

  toggleShowButton() {
    this.tasksList = document.querySelector('.tasks__list');
    this.showButton = document.querySelector('.to-do__button--show');

    this.tasksList.style.display = 'inline-block';
    this.showButton.style.display = 'inline-block';

    if (this.tasksList.style.height >= '25vh') {
      this.tasksList.style.height = '0px';
      this.tasksList.style.overflow = 'hidden';
      this.tasksList.style.padding = '0px';
      this.showButton.innerHTML = 'SHOW';
      this.showButton.style.background = '#87ff93';
    } else {
      this.tasksList.style.height = '25vh';
      this.tasksList.style.overflowY = 'scroll';
      this.tasksList.style.padding = '15px';
      this.showButton.innerHTML = 'CLOSE';
      this.showButton.style.background = '#ff8f87';
    }
  }

  createTasksListBody(tasks) {
    this.tasksList.innerHTML = `
      <li class="tasks__list-item">
        <div class="tasks__title tasks__title--last">CURRENT TASKS</div>
      </li>`;

    this.createTasksListItems(tasks);
      
    let filterButtonText;
      if ($C.isFiltered() === 'true') {
        filterButtonText = 'NOT DONE';
      } else {
        filterButtonText = 'ALL';
      }

    this.tasksList.innerHTML += `
      <li class="tasks__list-item">
        <div class="tasks__title tasks__title--last">ADD MORE TASKS</div>
        <button class="tasks__button tasks__button--filter icon">
          ${filterButtonText}
        </button>
      </li>`;
  }

  createTasksListItems(tasks) {
    let tasksCounter = 0;

    for (const task of tasks) {
      if ($C.isFiltered() === 'true' && tasks[tasksCounter].isCompleted === true) {
        tasksCounter++;
        continue;
      }

      this.tasksList.innerHTML += `
        <li class="tasks__list-item task">
          <button class="tasks__button tasks__button--done">
            <img src="images/task.svg" class="icon doneIcon-${tasksCounter}" alt="Press to mark task as done" draggable="false">
          </button>

          <div class="task__title title-${tasksCounter}">${task.title}</div>

          <button class="tasks__button tasks__button--delete">
            <img src="images/delete-task.svg" class="icon deleteIcon-${tasksCounter}" draggable="false" alt="Press to delete task">
          </button>
        </li>
      `;

      if (task.isCompleted === true) {
        const currentMarkAsDoneIcon = document.querySelector('.doneIcon-' + tasksCounter);
        currentMarkAsDoneIcon.src = 'images/task-done.svg';

        const currentTitle = document.querySelector('.title-' + tasksCounter);
        currentTitle.classList.add('task__title--done');
      }

      tasksCounter++;
    }
  }
}

const $V = new View;
export { $V };