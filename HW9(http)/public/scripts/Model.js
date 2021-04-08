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

    this.saveList(list); // mb await
  }

  async updateItem(id, name, url) { // NOT WORKING
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
    const itemToDelete = findItem(list, id);

    list.splice(list.indexOf(itemToDelete), 1);
    this.saveList(list);
  }

  async saveList(list) {
    await fs.writeFile('./public/db.json', JSON.stringify({
      list: list
    }));
  }

  findItem(list, id) {
    return list.find(item => +item.id === +id);
  }
}

module.exports = new Model();