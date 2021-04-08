const $V = require('./View.js');
const $R = require('./Repository.js');

class Controller {
  async getItems(id) {
    if (id === undefined) {
      return await $R.findAll();
    } else {
      return await $R.findOne(id);
    }
  }

  async addItem(params) {
    // here and below (Arg1, Arg2) returns only last argument
    return (
      $V.updatePage(),
      await $R.create(params) 
    );
  }

  async updateItem(params) {
    return (
      $V.updatePage(),
      await $R.update(params)
    );
  }

  async deleteItem(id) {
    return (
      $V.updatePage(),
      await $R.delete(id)
    );
  }
}

module.exports = new Controller();