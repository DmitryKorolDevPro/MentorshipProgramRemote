const model = require('./model.js');
class Controller {
    async getAllInFile() {
        return await model.getAll();
    }

    async addInFile({ id, title }) {
        return await model.addInto(id, title);
    }

    async updateItemInFile({ id, title }) {
        return await model.updateItem(id, title);
    }

    async deleteItemInFile({ id }) {
        return await model.deleteItem(id);
    }
}

const controller = new Controller();
module.exports = controller;