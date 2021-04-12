const middleware = require('./Middleware.js');

class Controller {
  async getItems(id) {
    if (id === undefined) {
      return await middleware.getAll();
    } else {
      return await middleware.getOne(id)
    }
  }

  async addItem(params) {
    return await middleware.create(params)
  }

  async updateItem(params) {
    return await middleware.update(params);
  }

  async deleteItem(id) {
    return await middleware.delete(id);
  }
}

module.exports = new Controller();