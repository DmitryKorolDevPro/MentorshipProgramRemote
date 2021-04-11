const fs = require('fs').promises;

class Model {
  async getList() {
    const database = await fs.readFile('./public/db.json');
    return JSON.parse(database).list;
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
    const itemToUpdate = this.findItem(list, id)[0];

    list[list.indexOf(itemToUpdate)] = {
      id: id,
      name: name,
      url: url,
    }

    this.saveList(list);
  }

  async deleteItem(id) {
    const list = await this.getList();
    const itemToDelete = this.findItem(list, id)[0];

    console.log(itemToDelete, list);
    console.log('id', id);
    console.log('index ', list.indexOf(itemToDelete));

    list.splice(list.indexOf(itemToDelete), 1);
    this.saveList(list);
  }

  findItem(list, id) {
    const item = list.find(item => +item.id === +id);
    return item === undefined ? [] : [item];
  }

  saveList(list) {
    fs.writeFile('./public/db.json', JSON.stringify({
      list: list
    }));
  }
}

module.exports = new Model();