const model = require('./Model.js');

class Controller {
  async getAllItems() {
    return await model.getAllItems();
  }

  async getOneItem(id) {
    return await model.findOneItem(id);
  }

  async addItem(id, name, url) {
    return await model.addNewItemToTheList(id, name, url);
  }

  async updateItem(id, name, url) {
    return await model.updateItem(id, name, url);
  }

  async deleteItem(id) {
    return await model.deleteItem(id);
  }
}

module.exports = new Controller();