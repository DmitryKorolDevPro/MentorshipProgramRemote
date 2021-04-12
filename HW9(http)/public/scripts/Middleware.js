const model = require('./Model.js');

class Middleware {
  async getAll() {
    const list = await model.getList();

    if (list.length === 0) {
      return 204;
    }

    return list;
  }

  async getOne(id) {
    id = parseInt(id);
    
    if (!this.isNumber(id)) {
      return 400;
    };

    const item = await model.findItem(id);

    if (item === undefined) {
      return 404;
    }
    
    return [item];
  }

  async create({ id, name, url }) {
    if (
      name === undefined ||
      id === undefined ||
      url === undefined
    ) {
      return 400;
    }

    id = parseInt(id);
    if (!this.isNumber(id)) {
      return 400;
    };

    if (await (this.checkIfItemExists(id))) {
      return 406;
    }
    
    model.addNewItemToTheList(name, id, url);
    return 201;
  }

  async update({ id, name, url }) {
    if (id === undefined) {
      return 400;
    }

    id = parseInt(id);
    if (!this.isNumber(id)) {
      return 400;
    };

    const item = await model.findItem(id);
    if (item === undefined) {
      return 404;
    }

    model.updateItem(id, name ?? item.name, url ?? item.url);
    return 200;
  }

  async delete(id) {
    if (id === undefined) {
      return 400;
    }

    id = parseInt(id);
    if (!this.isNumber(id)) {
      return 400;
    };

    if (!(await this.checkIfItemExists(id))) {
      return 404;
    }

    model.deleteItem(id);
    return 200;
  }

  async checkIfItemExists(id) {
    const item = await model.findItem(id);

    if (item === undefined) {
      return false;
    } else {
      return true;
    }
  }

  isNumber(n) {
    return typeof(n) === 'number' && !isNaN(n);
  }
}

module.exports = new Middleware();