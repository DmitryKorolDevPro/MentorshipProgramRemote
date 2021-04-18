const fs = require('fs').promises;

class Model {
  async getAllItems() {
    try {
      const database = await fs.readFile('./public/db.json');
      return JSON.parse(database).list;
    } catch (error) {
      console.error(`Cannot get items from the database. ${error}`)
      return error;
    }
  }

  async addNewItemToTheList(id, name, url) {
    const list = await this.getAllItems();

    list.push({
      id: id,
      name: name,
      url: url,
    });

    this.saveItems(list);
  }

  async updateItem(id, name, url) {
    const list = await this.getAllItems();
    const index = await this.findIndexOfItem(id);

    list[index] = {
      id: id,
      name: name,
      url: url,
    }

    this.saveItems(list);
  }

  async deleteItem(id) {
    const list = await this.getAllItems();
    const index = await this.findIndexOfItem(id);

    list.splice(index, 1);
    this.saveItems(list);
  }

  async findOneItem(id) {
    const list = await this.getAllItems();
    return list.find(item => item.id === id);
  }

  async findIndexOfItem(id) {
    const list = await this.getAllItems();
    const item = list.find(item => item.id === id);
    return list.indexOf(item);
  }

  saveItems(list) {
    try {
      fs.writeFile('./public/db.json', JSON.stringify({
        list: list
      }));
    } catch (error) {
      console.error(`Cannot save items in the database. ${error}`);
    }
  }
}

module.exports = new Model();