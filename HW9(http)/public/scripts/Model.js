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
    const isNotUnique = await this.checkIfItemIsUnique(id);
    
    if (isNotUnique) {
      return false;
    }

    list.push({
      name: name ?? 'Default',
      id: id ?? list.length,
      url: url ?? '',
    });

    await fs.writeFile('./public/db.json', JSON.stringify({
      list: list
    }));

    return true;
  }

  async checkIfItemIsUnique(id) {
    const itemsList = await this.getItemsList();
    return itemsList.some(el => el === null ? false : +el.id === +id)
  }
}

module.exports = new Model();