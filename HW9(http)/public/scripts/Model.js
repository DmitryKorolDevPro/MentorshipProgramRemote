const fs = require('fs').promises;

class Model {
  async getList() {
    const database = await fs.readFile('./public/db.json');

    try {
      const list = JSON.parse(database).list;
      return list;
    } catch (err) {
      return undefined;
    }
  }

  async addNewItemToTheList(name, id, url) {
    const list = await this.getList();

    list.push({
      name: name,
      id: id,
      url: url,
    });

    this.saveList(list);
  }

  async updateItem(id, name, url) {
    const list = await this.getList();
    const itemToUpdate = await this.findItem(id, list);

    list[list.indexOf(itemToUpdate)] = {
      id: id,
      name: name,
      url: url,
    }

    this.saveList(list);
  }

  async deleteItem(id) {
    const list = await this.getList();
    const itemToDelete = await this.findItem(id, list);

    list.splice(list.indexOf(itemToDelete), 1);
    this.saveList(list);
  }

  async findItem(id, list) {
    if (list === undefined) {
      list = await this.getList();
    }

    return list.find(item => item.id === id);
  }

  saveList(list) {
    fs.writeFile('./public/db.json', JSON.stringify({
      list: list
    }));
  }
}

module.exports = new Model();