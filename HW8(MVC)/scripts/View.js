import { $C } from './Controller.js';

const h1Text = 'THINGS TO DO ✌️';
const showButtonTextOnClose = 'SHOW';
const showButtonTextOnOpen = 'CLOSE';
const showButtonTitle = 'Show all tasks';
const addButtonText = 'ADD';
const addButtonTitle = 'Add a new task';
const inputPlaceholder = 'Add a new task 👈';
const tasksListHeaderText = 'CURRENT TASKS';
const tasksListFooterText = 'ADD MORE TASKS';
const filterButtonTextOnFiltered = 'NOT DONE';
const filterButtonTextOnNotFiltered = 'ALL';
const doneIconAltText = 'Press to mark task as done';
const deleteIconAltText = 'Press to delete task';

const rootElementId = 'to-do';
const buttonsClassList = 'to-do__button';
const showButtonClassList = 'to-do__button--show';
const addButtonClassList = 'to-do__button--add';
const inputClassList = 'to-do__input';
const tasksContainerClassList = 'tasks';
const tasksListClassList = 'tasks__list';
const tasksListItemClassList = 'tasks__list-item';
const taskTitleClassList = 'tasks__title';
const doneTaskTitleClassList = 'task__title--done';
const iconsButtonClassList = 'tasks__button';
const filterButtonClassList = 'tasks__button--filter';
const deleteButtonClassList = 'tasks__button--delete';
const filterButtonOnFilteredClassList = 'tasks__button--done';
const iconsClassList = 'icon';
const taskClassList = 'task';

const redColor = '#ff8f87';
const greenColor = '#87ff93';
const whiteColor = '#fff';

class View {
  constructor() {
    this.whiteColor = whiteColor;
    this.greenColor = greenColor;
    this.redColor = redColor;

    this.toDoContainer = document.getElementById(rootElementId);
    this.invalidInputTimer = null;

    if (this.toDoContainer === null) {
      throw new Error(`Root HTML element for creating View of this to-do list was not found.`);
    }

    this.renderUserInerface();
  }

  renderUserInerface() {
    const h1 = document.createElement('h1');
    h1.textContent = h1Text;
    document.body.prepend(h1);

    this.showButton = document.createElement('button');
    this.showButton.classList.add(buttonsClassList, showButtonClassList);
    this.showButton.textContent = showButtonTextOnClose;
    this.showButton.title = showButtonTitle;
    this.toDoContainer.appendChild(this.showButton);

    this.input = document.createElement('input');
    this.input.classList.add(inputClassList);
    this.input.placeholder = inputPlaceholder;
    this.toDoContainer.appendChild(this.input);

    this.addButton = document.createElement('button');
    this.addButton.classList.add(buttonsClassList, addButtonClassList);
    this.addButton.innerText = addButtonText;
    this.addButton.title = addButtonTitle;
    this.toDoContainer.appendChild(this.addButton);

    this.tasksContainer = document.createElement('div');
    this.tasksContainer.classList.add(tasksContainerClassList);
    this.toDoContainer.appendChild(this.tasksContainer);

    this.tasksList = document.createElement('ul');
    this.tasksList.classList.add(tasksListClassList);
    this.tasksContainer.appendChild(this.tasksList);
  }

  renderTasks(tasks, isFiltered) {
    if (tasks.length === 0 && isFiltered === 'false') {
      this.toggleShowButton();
      this.showButton.style.display = 'none';
      this.tasksList.style.display = 'none';
      return;
    }

    this.createTasksListBody(tasks, isFiltered);
  }

  toggleShowButton() {
    this.tasksList = document.querySelector(`.${tasksListClassList}`);
    this.showButton = document.querySelector(`.${showButtonClassList}`);

    this.tasksList.style.display = 'inline-block';
    this.showButton.style.display = 'inline-block';
    this.tasksList.classList.toggle('open');

    if (this.tasksList.classList.contains('open')) {
      this.showButton.textContent = showButtonTextOnOpen;
      this.showButton.style.backgroundColor = '#ff8f87';
    } else {
      this.showButton.textContent = showButtonTextOnClose;
      this.showButton.style.backgroundColor = '#87ff93';
    }
  }

  addInvalidStyleToTheInput() {
    this.input.style.border = '1px solid #ff8f87';
    clearTimeout(this.invalidInputTimer);
    
    this.invalidInputTimer = setTimeout(() => {
      this.input.style.border = '1px solid #000';
    }, 1000);
  }

  createTasksListBody(tasks, isFiltered) {
    this.tasksList.innerHTML = `
      <li class="${tasksListItemClassList}">
        <div class="${taskTitleClassList}">${tasksListHeaderText}</div>
      </li>`;

    this.createTasksListItems(tasks, isFiltered);
      
    let filterButtonText;
      if (isFiltered === 'true') {
        filterButtonText = filterButtonTextOnFiltered;
      } else {
        filterButtonText = filterButtonTextOnNotFiltered;
      }

    this.tasksList.innerHTML += `
      <li class="${tasksListItemClassList}">
        <div class="${taskTitleClassList}">${tasksListFooterText}</div>
        <button class="${iconsButtonClassList} ${filterButtonClassList} ${iconsClassList}">
          ${filterButtonText}
        </button>
      </li>`;
  }

  createTasksListItems(tasks, isFiltered) {
    let tasksCounter = 0;

    for (const task of tasks) {
      if (isFiltered === 'true' && tasks[tasksCounter].isCompleted === true) {
        tasksCounter++;
        continue;
      }

      this.tasksList.innerHTML += `
        <li class="${tasksListItemClassList} ${taskClassList}">
          <button class="${iconsButtonClassList} ${filterButtonOnFilteredClassList}">
            <img src="images/task.svg" class="${iconsClassList} doneIcon-${tasksCounter}" alt="${doneIconAltText}" draggable="false">
          </button>

          <div class="${taskTitleClassList} title-${tasksCounter}">${task.title}</div>

          <button class="${iconsButtonClassList} ${deleteButtonClassList}">
            <img src="images/delete-task.svg" class="${iconsClassList} deleteIcon-${tasksCounter}" draggable="false" alt="${deleteIconAltText}">
          </button>
        </li>
      `;

      if (task.isCompleted === true) {
        const currentMarkAsDoneIcon = document.querySelector('.doneIcon-' + tasksCounter);
        currentMarkAsDoneIcon.src = 'images/task-done.svg';

        const currentTitle = document.querySelector('.title-' + tasksCounter);
        currentTitle.classList.add(doneTaskTitleClassList);
      }

      tasksCounter++;
    }
  }
}

const $V = new View;
export { $V };