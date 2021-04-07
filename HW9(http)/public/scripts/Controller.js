const $M = require('./Model.js');
const $V = require('./View.js');

class Controller {
  async getItems(requestedItemId) {
    const list = await $M.getItemsList();
    let result = null;

    if (requestedItemId === undefined) {
      result = list;
    } else {
      result = list.find(item => +item.id === +requestedItemId);
    }

    return result;
  }

  addItems({name, id, url}) {
    $M.addNewItems(name, id, url);
  }
}

module.exports = new Controller();