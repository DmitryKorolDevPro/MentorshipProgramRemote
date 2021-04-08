const fs = require('fs').promises;

class Model {
  async getItems() {
    const items = await fs.readFile('./public/db.json');
    return JSON.parse(items).list;
  }

  async addNewItem(name, id, url) {
    const list = await this.getItems();

    list.push({
      name: name,
      id: id,
      url: url,
    });

    this.saveList(list);
  }

  async updateItem(id, name, url) {
    const list = await this.getItems();
    const itemToUpdate = this.findItem(list, id);

    list[list.indexOf(itemToUpdate)] = {
      id: id,
      name: name,
      url: url,
    }

    this.saveList(list);
  }

  async deleteItem(id) {
    const list = await this.getItems();
    const itemToDelete = this.findItem(list, id);

    list.splice(list.indexOf(itemToDelete), 1);
    this.saveList(list);
  }

  findItem(list, id) {
    return list.find(item => +item.id === +id);
  }

  saveList(list) {
    fs.writeFile('./public/db.json', JSON.stringify({
      list: list
    }));
  }
}

module.exports = new Model();