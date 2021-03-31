import { $V } from './View.js';
import { $M } from './Model.js';

class Controller {
  constructor () {
    this.invalidInputTimer = null;
    this.tasksListIsHidden = true;
  }

  initialize() {
    $V.tasksContainer.addEventListener('click', this.handleClick);
    $V.showButton.addEventListener('click', $V.toggleShowButton);
    $V.addButton.addEventListener('click', this.addTask);

    $V.input.addEventListener('input', () => {
      if ($V.input.value.length > 0) {
        $V.addButton.style.backgroundColor = '#87ff93';
      } else {
        $V.addButton.style.backgroundColor = '#fff';
      }
    });

    if (this.anyTasksAlreadySaved()) {
      $V.toggleShowButton();
      $V.renderTasks($M.getTasksList());
    }
  }

  handleClick(e) {
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
    let isDone = tasks[index].isCompleted;

    if (isDone) {
      isDone = false;
    } else {
      isDone = true;
    }
    tasks[index].isCompleted = isDone;
    
    $M.setTasksList(tasks);
    $V.renderTasks(tasks);
  }

  deleteTask(index) {
    const tasks = $M.getTasksList();
    tasks.splice(index, 1);

    $M.setTasksList(tasks);
    $V.renderTasks(tasks);
  }

  switchFilterMode() {
    let currentStatus = this.isFiltered();

    if (currentStatus === 'true') {
      currentStatus = 'false';
    } else {
      currentStatus = 'true';
    }

    $M.setFilter(currentStatus);
    $V.renderTasks($M.getTasksList());
  }

  addTask() {
    $V.addButton.style.backgroundColor = '#fff';

    if ($V.input.value.length > 0) {
      if ($C.tasksListIsHidden) {
        $C.tasksListIsHidden = false;
        $V.toggleShowButton();
      }

      $M.addTask($V.input.value);

      $V.input.value = '';
      $V.showButton.style.backgroundColor = '#ff8f87';
      $V.renderTasks($M.getTasksList());
    } else {
      $V.input.style.border = '1px solid #ff8f87';
      clearTimeout(this.invalidInputTimer);
      
      this.invalidInputTimer = setTimeout(() => {
        $V.input.style.border = '1px solid #000';
      }, 1000);
    }
  }
 
  inputIsValid() {
    const value = $V.input.value;
    $V.input.value = value.trim();

    if (value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  anyTasksAlreadySaved() {
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