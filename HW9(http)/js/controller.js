const model = require('./model.js');
class Controller {
    async getAllInFile() {
        return await model.getAll();
    }

    async addInFile({ id, title }) {
        return await model.addInto(id, title);
    }

    async updataItemInFile({ id, title }) {
        console.log('up');
        return await model.updataItem(id, title);
    }

    async deleteItemInFile({ id }) {
        return await model.deleteItem(id);
    }
}

const controller = new Controller();
module.exports = controller;