// const $V = require('./View.js');
const $R = require('./Repository.js');

class Controller {
  async getItems(id) {
    return await $R.find(id);
  }

  async addItem(params) {
    return await $R.create(params);
  }

  async updateItem(params) {
    return await $R.update(params);
  }

  async deleteItem(id) {
    return await $R.delete(id);
  }
}

module.exports = new Controller();