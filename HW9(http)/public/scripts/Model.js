const fs = require('fs').promises;

class Model {
  async getItems() {
    const items = await fs.readFile('./public/db.json');
    return JSON.parse(items).list;
  }

  async addNewItem(name, id, url) {
    const items = await fs.readFile('./public/db.json');
    const list = JSON.parse(items).list;

    list.push({
      name: name,
      id: id,
      url: url,
    });

    await fs.writeFile('./public/db.json', JSON.stringify({
      list: list
    }));
  }
}

module.exports = new Model();