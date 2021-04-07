const $C = require('./Controller.js');
const fs = require('fs').promises;

class Model {
  async getItemsList() {
    const items = await fs.readFile('./public/db.json');
    return JSON.parse(items).list;
  }

  async addNewItems(name, id, url) {
    const items = await fs.readFile('./public/db.json');
    const list = JSON.parse(items).list;

    if (checkIfItemAlreadyExists(id)) {
      throw new Error('Item already exists');
      return;
    }

    list.push({
      name: name ?? 'Default',
      id: id ?? list.length,
      url: url ?? '',
    });

    await fs.writeFile('./public/db.json', JSON.stringify({
      list: list
    }));
  }

  checkIfItemAlreadyExists(id) {
    
  }
}

module.exports = new Model();