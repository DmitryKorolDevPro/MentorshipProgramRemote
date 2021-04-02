import { $V } from './View.js';
import { $M } from './Model.js';

class Controller {
  initialize() {
    $V.tasksContainer.addEventListener('click', this.handleClickOnTasksContainer);
    $V.showButton.addEventListener('click', $V.toggleShowButton);
    $V.addButton.addEventListener('click', this.passTaskToModel);

    $V.input.addEventListener('input', () => {
      if ($V.input.value.length > 0) {
        $V.addButton.style.backgroundColor = $V.greenColor;
      } else {
        $V.addButton.style.backgroundColor = $V.redColor;
      }
    });

    if (this.checkIfAnyTasksAlreadySaved()) {
      $V.toggleShowButton();
      $V.renderTasks($M.getTasksList(), this.isFiltered());
    }
  }

  handleClickOnTasksContainer(e) {
    const clickedOn = e.target;
    const clickedOnClassList = clickedOn.classList;
  
    if (clickedOnClassList.contains('icon')) {
      let [type, index] = clickedOnClassList[1].split('-');

      if (type === 'doneIcon') {
        $C.toggleDoneMarker(index);
      } else if (type === 'deleteIcon'){
        $C.deleteTask(index);
      } else {
        $C.switchFilterMode();
      }
    }
  }

  toggleDoneMarker(index) {
    const tasks = $M.getTasksList();
    tasks[index].isCompleted = !tasks[index].isCompleted;
    
    $M.saveTasksList(tasks);
    $V.renderTasks(tasks, this.isFiltered());
  }

  deleteTask(index) {
    $M.removeTaskFromTheTasksList(index);
    $V.renderTasks($M.getTasksList(), this.isFiltered());
  }

  switchFilterMode() {
    let currentStatus = this.isFiltered();

    if (currentStatus === 'true') {
      currentStatus = 'false';
    } else {
      currentStatus = 'true';
    }

    $M.setFilter(currentStatus);
    $V.renderTasks($M.getTasksList(), this.isFiltered());
  }

  passTaskToModel() {
    $V.addButton.style.backgroundColor = $V.whiteColor;

    if ($V.input.value.length > 0) {
      const tasksList = document.querySelector('.tasks__list');

      if (!tasksList.classList.contains('open')) {
        $V.toggleShowButton();
      }

      $M.addTaskToTheTasksList($V.input.value);

      $V.input.value = '';
      $V.showButton.style.backgroundColor = $V.redColor;
      $V.renderTasks($M.getTasksList(), $C.isFiltered());
    } else {
      $V.addInvalidStyleToTheInput();
    }
  }
 
  inputIsValid() {
    const value = $V.input.value;
    $V.input.value = value.trim();
    return value.length > 0;
  }

  checkIfAnyTasksAlreadySaved() {
    const currentTasksList = $M.getTasksList();

    if (currentTasksList.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  isFiltered() {
    return localStorage.getItem('isFiltered') ?? 'false';
  }
}

const $C = new Controller;

document.body.onload = () => {
  $C.initialize();
}

export { $C };