const e = require('express');
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
    return await $R.create(params);
    // updateView()
  }

  async updateItem(params) {
    return await $R.update(params);
    // updateView()
  }

  async deleteItem(id) {
    return await $R.delete(id); 
    // updateView()
  }
}

module.exports = new Controller();