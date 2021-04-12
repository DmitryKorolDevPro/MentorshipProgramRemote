const model = require('./Model.js');

class Middleware {
  async find(id) {
    const list = await model.getList();

    if (id === undefined) {
      return list;
    }

    return model.findItem(list, id);
  }

  async create({ id, name, url }) {
    if (
      name === undefined ||
      id === undefined ||
      url === undefined
    ) {
      return 400;
    }

    if (await (this.checkIfItemExists(id))) {
      return 406;
    }
    
    model.addNewItemToTheList(name, +id, url);
    return 201;
  }

  async update({ id, name, url }) {
    if (id === undefined) {
      return 400;
    }

    const item = await this.find(id);
    if (item === undefined) {
      return 404;
    }

    model.updateItem(+id, name ?? item.name, url ?? item.url);
    return 200;
  }

  async delete(id) {
    if (id === undefined) {
      return 400;
    }

    if (!(await this.checkIfItemExists(id))) {
      return 404;
    }

    model.deleteItem(id);
    return 200;
  }

  async checkIfItemExists(id) {
    const item = await this.find(id);

    if (item === undefined) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = new Middleware();