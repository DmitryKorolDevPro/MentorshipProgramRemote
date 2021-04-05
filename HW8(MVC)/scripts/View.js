class View {
  static h1Text = 'THINGS TO DO ✌️';
  static showButtonTextOnClose = 'SHOW';
  static showButtonTextOnOpen = 'CLOSE';
  static showButtonTitle = 'Show all tasks';
  static addButtonText = 'ADD';
  static addButtonTitle = 'Add a new task';
  static inputPlaceholder = 'Add a new task 👈';
  static tasksListHeaderText = 'CURRENT TASKS';
  static tasksListFooterText = 'ADD MORE TASKS';
  static filterButtonTextOnFiltered = 'NOT DONE';
  static filterButtonTextOnNotFiltered = 'ALL';
  static doneIconAltText = 'Press to mark task as done';
  static deleteIconAltText = 'Press to delete task';

  static rootElementId = 'to-do';
  static buttonsClassList = 'to-do__button';
  static showButtonClassList = 'to-do__button--show';
  static addButtonClassList = 'to-do__button--add';
  static inputClassList = 'to-do__input';
  static tasksContainerClassList = 'tasks';
  static tasksListClassList = 'tasks__list';
 
  static tasksListItemClassList = 'tasks__list-item';
  static taskTitleClassList = 'tasks__title';
  static doneTaskTitleClassList = 'task__title--done';
  static iconsButtonClassList = 'tasks__button';
  static filterButtonClassList = 'tasks__button--filter';
  static deleteButtonClassList = 'tasks__button--delete';
  static filterButtonOnFilteredClassList = 'tasks__button--done';
  static iconsClassList = 'icon';
  static taskClassList = 'task';

  static redColor = '#ff8f87';
  static greenColor = '#87ff93';
  static whiteColor = '#fff';

  constructor() {
    this.toDoContainer = document.getElementById(View.rootElementId);
    this.invalidInputTimer = null;

    if (this.toDoContainer === null) {
      throw new Error(`Root HTML element for creating View of this to-do list was not found.`);
    }

    this.renderUserInerface();
  }

  renderUserInerface() {
    const h1 = document.createElement('h1');
    h1.textContent = View.h1Text;
    document.body.prepend(h1);

    this.showButton = document.createElement('button');
    this.showButton.classList.add(View.buttonsClassList, View.showButtonClassList);
    this.showButton.textContent = View.showButtonTextOnClose;
    this.showButton.title = View.showButtonTitle;
    this.toDoContainer.appendChild(this.showButton);

    this.input = document.createElement('input');
    this.input.classList.add(View.inputClassList);
    this.input.placeholder = View.inputPlaceholder;
    this.toDoContainer.appendChild(this.input);

    this.addButton = document.createElement('button');
    this.addButton.classList.add(View.buttonsClassList, View.addButtonClassList);
    this.addButton.textContent = View.addButtonText;
    this.addButton.title = View.addButtonTitle;
    this.toDoContainer.appendChild(this.addButton);

    this.tasksContainer = document.createElement('div');
    this.tasksContainer.classList.add(View.tasksContainerClassList);
    this.toDoContainer.appendChild(this.tasksContainer);

    this.tasksList = document.createElement('ul');
    this.tasksList.classList.add(View.tasksListClassList);
    this.tasksContainer.appendChild(this.tasksList);
  }

  renderTasks(tasks, isFiltered) {
    /*
     Here and below 'true' and 'false' can appear as a string
     because localStorage saves only strings.
    */
    if (tasks.length === 0 && isFiltered === 'false') {
      this.toggleShowButton();
      this.showButton.style.display = 'none';
      this.tasksList.style.display = 'none';
      return;
    }

    this.createTasksListBody(tasks, isFiltered);
  }

  toggleShowButton() {
    this.tasksList = document.querySelector(`.${View.tasksListClassList}`);
    this.showButton = document.querySelector(`.${View.showButtonClassList}`);
    this.tasksList.style.display = 'inline-block';
    this.showButton.style.display = 'inline-block';
    this.tasksList.classList.toggle('open');

    if (this.tasksList.classList.contains('open')) {
      this.showButton.textContent = View.showButtonTextOnOpen;
      this.showButton.style.backgroundColor = '#ff8f87';
    } else {
      this.showButton.textContent = View.showButtonTextOnClose;
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
      <li class="${View.tasksListItemClassList}">
        <div class="${View.taskTitleClassList}">${View.tasksListHeaderText}</div>
      </li>`;

    this.createTasksListItems(tasks, isFiltered);
      
    let filterButtonText;
      if (isFiltered === 'true') {
        filterButtonText = View.filterButtonTextOnFiltered;
      } else {
        filterButtonText = View.filterButtonTextOnNotFiltered;
      }

    this.tasksList.insertAdjacentHTML('beforeend',
    `<li class="${View.tasksListItemClassList}">
        <div class="${View.taskTitleClassList}">${View.tasksListFooterText}</div>
        <button class="${View.iconsButtonClassList} ${View.filterButtonClassList} ${View.iconsClassList}">
          ${filterButtonText}
        </button>
      </li>
    `);
  }

  createTasksListItems(tasks, isFiltered) {
    let tasksCounter = 0;

    for (const task of tasks) {
      if (isFiltered === 'true' && tasks[tasksCounter].isCompleted === true) {
        tasksCounter++;
        continue;
      }

      this.tasksList.insertAdjacentHTML('beforeend',
      `<li class="${View.tasksListItemClassList} ${View.taskClassList}">
        <button class="${View.iconsButtonClassList} ${View.filterButtonOnFilteredClassList}">
          <img src="images/task.svg" class="${View.iconsClassList} doneIcon-${tasksCounter}" alt="${View.doneIconAltText}" draggable="false">
        </button>
          <div class="${View.taskTitleClassList} title-${tasksCounter}">${task.title}</div>
        <button class="${View.iconsButtonClassList} ${View.deleteButtonClassList}">
          <img src="images/delete-task.svg" class="${View.iconsClassList} deleteIcon-${tasksCounter}" draggable="false" alt="${View.deleteIconAltText}">
        </button>
       </li>`
      );

      if (task.isCompleted === true) {
        const currentMarkAsDoneIcon = document.querySelector('.doneIcon-' + tasksCounter);
        currentMarkAsDoneIcon.src = 'images/task-done.svg';

        const currentTitle = document.querySelector('.title-' + tasksCounter);
        currentTitle.classList.add(View.doneTaskTitleClassList);
      }

      tasksCounter++;
    }
  }
}

const $V = new View;
export { $V };